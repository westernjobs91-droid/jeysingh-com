import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud computing foundations",
  description: "Cloud computing foundations notes are being prepared.",
  alternates: { canonical: "/learn/cloud-foundations" },
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>Cloud computing foundations</h1>
        <p className="lede">These notes are not ready yet. The cloud migration notes cover the basics in module 1.</p>
        <div className="btn-row" style={{ marginTop: "1.6rem" }}>
          <Link href="/learn/cloud-migration" className="btn btn-primary">Open cloud migration notes</Link>
          <Link href="/learn" className="btn btn-ghost">Back to Learn</Link>
        </div>
      </div>
    </div>
  );
}
