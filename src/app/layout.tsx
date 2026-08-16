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
  title: "Mahendra B | Senior Product Manager",
  description:
    "Senior Product Manager with 8+ years across construction-tech, fintech and B2B SaaS. IIM Ahmedabad MBA. Currently at ARIS running Supply Operations; previously Nextuple and Paytm.",
  keywords: [
    "Mahendra B",
    "Senior Product Manager",
    "AI Product Manager",
    "Fintech Product Manager",
    "SaaS Product Manager",
    "Omnichannel",
    "IIM Ahmedabad",
    "Paytm",
    "Nextuple",
    "ArisInfra",
    "Supply Chain",
    "Product Management Portfolio",
    "PM Portfolio",
    "Order Management",
    "Product Strategy",
  ],
  authors: [{ name: "Mahendra B", url: "https://mahe1235.github.io" }],
  creator: "Mahendra B",
  openGraph: {
    title: "Mahendra B | Senior Product Manager",
    description:
      "Senior Product Manager. Currently at ARIS running Supply Operations; previously Nextuple and Paytm. IIM Ahmedabad MBA.",
    url: "https://mahe1235.github.io",
    siteName: "Mahendra B | Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Mahendra B, Senior Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mahendra B | Senior Product Manager",
    description:
      "Senior Product Manager. Currently at ARIS; previously Nextuple and Paytm. IIM Ahmedabad MBA.",
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
              jobTitle: "Senior Product Manager",
              url: "https://mahe1235.github.io",
              description:
                "Senior Product Manager with 8+ years across construction-tech, fintech and B2B SaaS. Currently at ARIS, previously Nextuple and Paytm.",
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
                name: "ArisInfra Solutions",
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
