import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Jey Singh - Cloud Engineer and AI Builder",
  description: "Azure cloud engineering, agentic AI systems, and cloud study notes by Jey Singh.",
  openGraph: {
    title: "Jey Singh",
    description: "Cloud Engineer and AI Builder",
    url: "https://jeysingh.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer style={{
          borderTop: "1px solid #1e1830",
          padding: "2.5rem 2rem",
          textAlign: "center",
          marginTop: "6rem",
        }}>
          <p style={{ fontSize: "13px", color: "#3a3858" }}>
            Jey Singh &middot; jeysingh.com &middot; Toronto, ON
          </p>
          <p style={{ fontSize: "12px", color: "#2a2040", marginTop: "4px" }}>
            Azure Cloud Engineer in progress &middot; Algonquin College
          </p>
        </footer>
      </body>
    </html>
  );
}
