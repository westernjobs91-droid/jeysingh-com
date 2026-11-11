import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <h3>Jey Singh</h3>
          <p>
            Cloud and AI builder, recruiter and author. Based in the Greater Toronto Area, Ontario.
          </p>
        </div>
        <div>
          <h3>Site</h3>
          <ul>
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/learn">Learn</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/roadmap">What I am working on now</Link></li>
          </ul>
        </div>
        <div>
          <h3>Books</h3>
          <ul>
            <li><Link href="/books/az-104">AZ-104 Field Guide</Link></li>
            <li><a href={site.labsRepo}>AZ-104 labs on GitHub</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin}>LinkedIn</a></li>
            <li><Link href="/contact">All contact options</Link></li>
          </ul>
        </div>
        <p className="legal">
          © 2026 Jey Singh. Independent publications. Not affiliated with or endorsed by Microsoft.
          Microsoft and Azure are trademarks of the Microsoft group of companies.
        </p>
      </div>
    </footer>
  );
}
