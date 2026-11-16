import Link from "next/link";
import { articles } from "@/lib/articles";

// Free articles that come from a book, shown on that book's page.
export default function BookGuides({ book }: { book: "git" | "az104" }) {
  const list = articles.filter(a => a.book === book);
  if (!list.length) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Free guides from the book</h2>
      <div className="grid-2">
        {list.map(a => (
          <Link key={a.slug} href={`/learn/${a.slug}`} className="card">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="foot">Read it, {a.minutes} min</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
