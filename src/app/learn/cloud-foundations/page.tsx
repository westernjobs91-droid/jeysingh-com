import Link from "next/link";
export default function Page() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
      <Link href="/learn" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>
        Learn
      </Link>
      <span style={{ color: "#333", margin: "0 8px" }}>/</span>
      <span style={{ fontSize: "13px", color: "#888" }}>Cloud Computing Foundations</span>
      <h1 style={{ fontSize: "36px", fontWeight: 800, marginTop: "2rem", marginBottom: "1rem" }}>
        <span className="grad-text">Cloud Computing Foundations</span>
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Modules coming soon - currently being organized into this format.</p>
      <Link href="/learn/cloud-migration" className="btn-ghost">See Cloud Migration notes (live now)</Link>
    </div>
  );
}
