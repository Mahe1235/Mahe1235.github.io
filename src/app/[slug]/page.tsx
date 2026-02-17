import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllSlugs, getContentBySlug } from "@/lib/content";
import type { Metadata } from "next";

// Generate all static paths at build time
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Per-page SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    return { title: "Not Found" };
  }

  return {
    title: `${content.title} — Mahendra B`,
    description: content.description,
    openGraph: {
      title: `${content.title} — Mahendra B`,
      description: content.description,
      url: `https://mahe1235.github.io/${slug}`,
      type: "article",
      images: [
        {
          url: "/profile.jpg",
          width: 800,
          height: 800,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${content.title} — Mahendra B`,
      description: content.description,
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  const formattedDate = content.date
    ? new Date(content.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky back header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Article content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Article header */}
        <header className="mb-10">
          {content.emoji && (
            <span className="text-5xl block mb-4">{content.emoji}</span>
          )}

          {content.category && (
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full font-semibold mb-4 ${content.categoryColor}`}
            >
              {content.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight mb-4">
            {content.title}
          </h1>

          {content.description && (
            <p className="text-lg text-muted leading-relaxed mb-4">
              {content.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            {formattedDate && <time dateTime={content.date}>{formattedDate}</time>}
            {formattedDate && content.tags.length > 0 && (
              <span className="text-border">|</span>
            )}
            {content.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-section-alt text-muted/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Divider */}
        <hr className="border-border/50 mb-10" />

        {/* Rendered markdown */}
        <article
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: content.contentHtml }}
        />

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
