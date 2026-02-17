import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
  tags: string[];
  category: string;
  categoryColor: string;
  type: string; // inferred from subdirectory: "projects", "blog", "reads", etc.
  contentHtml: string;
  draft?: boolean;
}

/**
 * Get all .md files recursively from the content directory.
 * The content type is inferred from the subdirectory name.
 */
export function getAllContent(): ContentItem[] {
  const items: ContentItem[] = [];

  if (!fs.existsSync(contentDirectory)) {
    return items;
  }

  const subdirs = fs.readdirSync(contentDirectory, { withFileTypes: true });

  for (const subdir of subdirs) {
    if (!subdir.isDirectory()) continue;

    const typeName = subdir.name; // e.g. "projects", "blog", "reads"
    const typeDir = path.join(contentDirectory, typeName);
    const files = fs.readdirSync(typeDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      const item = getContentBySlug(slug, typeName);
      if (item && !item.draft) {
        items.push(item);
      }
    }
  }

  // Sort by date descending
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get all slugs for generateStaticParams.
 */
export function getAllSlugs(): string[] {
  const content = getAllContent();
  return content.map((item) => item.slug);
}

/**
 * Get a single content item by slug.
 * Searches across all subdirectories.
 */
export function getContentBySlug(
  slug: string,
  typeHint?: string
): ContentItem | null {
  // If typeHint is provided, look directly in that subdirectory
  if (typeHint) {
    return readMarkdownFile(slug, typeHint);
  }

  // Otherwise, search all subdirectories
  if (!fs.existsSync(contentDirectory)) return null;

  const subdirs = fs.readdirSync(contentDirectory, { withFileTypes: true });

  for (const subdir of subdirs) {
    if (!subdir.isDirectory()) continue;

    const result = readMarkdownFile(slug, subdir.name);
    if (result) return result;
  }

  return null;
}

/**
 * Read and parse a single markdown file.
 */
function readMarkdownFile(
  slug: string,
  typeName: string
): ContentItem | null {
  const filePath = path.join(contentDirectory, typeName, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Synchronously process markdown to HTML
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    emoji: data.emoji || "",
    tags: data.tags || [],
    category: data.category || "",
    categoryColor: data.categoryColor || "",
    type: typeName,
    contentHtml,
    draft: data.draft || false,
  };
}
