import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jey Singh: cloud and AI builder, author of the AZ-104 and Git / GitHub study guides",
    template: "%s | Jey Singh",
  },
  description:
    "Jey Singh builds cloud and AI products, writes practical study guides for Azure and Git / GitHub, and shares free study notes and labs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jey Singh",
    description: "Cloud and AI builder. Author of the AZ-104 Field Guide and the Git / GitHub Study Guide.",
    url: site.url,
    siteName: "Jey Singh",
    type: "website",
    images: [{ url: "/og-site.jpg", width: 1200, height: 630, alt: "Jey Singh, author of the AZ-104 and Git / GitHub study guides" }],
  },
  twitter: { card: "summary_large_image" },
  // Google Search Console ownership check (azureawscert@gmail.com).
  verification: { google: "uf5Yy2YZ6fkCvkA2nyxlKvtRcMugLDJ4KQ63aEQU61E" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jey Singh",
  url: site.url,
  image: `${site.url}/og-site.jpg`,
  jobTitle: "Founder, Western Jobs",
  description: "Cloud and AI builder, technical recruiter and author of the AZ-104 Field Guide and the Git / GitHub Study Guide.",
  address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
  sameAs: [site.linkedin, "https://github.com/azureawscert-a11y"],
  knowsAbout: ["Microsoft Azure", "Git", "GitHub", "Cloud computing", "Technical recruiting"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
