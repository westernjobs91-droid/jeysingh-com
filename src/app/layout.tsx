import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

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
    images: ["/books/az-104-og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
