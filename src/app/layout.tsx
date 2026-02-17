import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahe1235.github.io"),
  title: "Mahendra B — Product Manager | Fintech & SaaS",
  description:
    "Product Manager with 8+ years in Fintech, SaaS & Omnichannel. IIM Ahmedabad MBA. Ex-Paytm. Currently at Nextuple building order management systems for global retailers.",
  keywords: [
    "Mahendra B",
    "Product Manager",
    "Fintech Product Manager",
    "SaaS Product Manager",
    "Omnichannel",
    "IIM Ahmedabad",
    "Paytm",
    "Nextuple",
    "Product Management Portfolio",
    "PM Portfolio",
    "Order Management",
    "Product Strategy",
  ],
  authors: [{ name: "Mahendra B", url: "https://mahe1235.github.io" }],
  creator: "Mahendra B",
  openGraph: {
    title: "Mahendra B — Product Manager | Fintech & SaaS",
    description:
      "Product Manager with 8+ years in Fintech, SaaS & Omnichannel. IIM Ahmedabad MBA. Ex-Paytm. Currently at Nextuple.",
    url: "https://mahe1235.github.io",
    siteName: "Mahendra B — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Mahendra B — Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mahendra B — Product Manager | Fintech & SaaS",
    description:
      "Product Manager with 8+ years in Fintech, SaaS & Omnichannel. IIM Ahmedabad MBA. Ex-Paytm.",
    creator: "@mahendrab0",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://mahe1235.github.io",
  },
  other: {
    "theme-color": "#0D9488",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mahendra B",
              jobTitle: "Product Manager",
              url: "https://mahe1235.github.io",
              description:
                "Product Manager with 8+ years in Fintech, SaaS & Omnichannel. Currently at Nextuple, previously at Paytm.",
              image: "https://mahe1235.github.io/profile.jpg",
              sameAs: [
                "https://www.linkedin.com/in/mahendrabreddy/",
                "https://twitter.com/mahendrab0",
                "https://www.instagram.com/wanderer.on.wheels",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Indian Institute of Management, Ahmedabad",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "National Institute of Technology, Karnataka",
                },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Nextuple",
              },
              knowsAbout: [
                "Product Management",
                "Fintech",
                "SaaS",
                "Omnichannel",
                "Order Management",
                "Product Strategy",
                "User Research",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
