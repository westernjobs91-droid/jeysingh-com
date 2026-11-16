import type { Metadata } from "next";
import Link from "next/link";
import { articles, findArticle } from "@/lib/articles";

const SITE = "https://www.jeysingh.com";

const books = {
  git: {
    name: "Git / GitHub Study Guide",
    href: "/books/git",
    pitch: "151 pages for beginners: every command explained, 4 local drills with a PASS or FAIL checker, 4 GitHub labs written as work tickets and GH-900 exam prep.",
    image: "/books/git-github-og.jpg",
  },
  az104: {
    name: "AZ-104: The Azure Administrator Field Guide",
    href: "/books/az-104",
    pitch: "264 pages: every command in Azure CLI and PowerShell, 12 workplace labs and a capstone, 156 original practice questions and a job chapter.",
    image: "/books/az-104-og.jpg",
  },
};

export function articleMetadata(slug: string): Metadata {
  const a = findArticle(slug);
  const img = a.book ? books[a.book].image : "/og-site.jpg";
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/learn/${a.slug}` },
    authors: [{ name: "Jey Singh", url: SITE }],
    openGraph: {
      title: a.title,
      description: a.description,
      url: `/learn/${a.slug}`,
      type: "article",
      publishedTime: a.published,
      modifiedTime: a.updated,
      authors: ["Jey Singh"],
      images: [img],
    },
  };
}

const fmt = (d: string) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function Article({ slug, lede, children }: { slug: string; lede: React.ReactNode; children: React.ReactNode }) {
  const a = findArticle(slug);
  const book = a.book ? books[a.book] : null;
  const related = [
    ...articles.filter(x => x.slug !== slug && x.book === a.book),
    ...articles.filter(x => x.slug !== slug && x.book !== a.book),
  ].slice(0, 3);
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: a.title,
      description: a.description,
      url: `${SITE}/learn/${a.slug}`,
      datePublished: a.published,
      dateModified: a.updated,
      inLanguage: "en",
      author: { "@type": "Person", name: "Jey Singh", url: `${SITE}/about` },
      publisher: { "@type": "Person", name: "Jey Singh", url: SITE },
      image: `${SITE}${book ? book.image : "/og-site.jpg"}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Learn", item: `${SITE}/learn` },
        { "@type": "ListItem", position: 2, name: a.title, item: `${SITE}/learn/${a.slug}` },
      ],
    },
  ];
  return (
    <div className="wrap prose">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <article className="article">
        <div className="page-head">
          <p className="note"><Link href="/learn">Learn</Link> / {a.topic}</p>
          <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 2.7rem)" }}>{a.title}</h1>
          <p className="lede">{lede}</p>
          <p className="byline">
            By <Link href="/about">Jey Singh</Link> · Updated <time dateTime={a.updated}>{fmt(a.updated)}</time> · {a.minutes} min read
          </p>
        </div>
        {children}
        {book && (
          <div className="card" style={{ margin: "3rem 0 0" }}>
            <span className="badge b-live">From the book</span>
            <h3>{book.name}</h3>
            <p>{book.pitch}</p>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <Link href={`${book.href}#sample`} className="btn btn-primary">Get the free sample</Link>
              <Link href={book.href} className="btn btn-ghost">See the book</Link>
            </div>
          </div>
        )}
        <section className="related">
          <h2 style={{ marginTop: 0 }}>Read next</h2>
          <ul>
            {related.map(r => (
              <li key={r.slug} style={{ marginBottom: "0.7rem" }}>
                <Link href={`/learn/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
