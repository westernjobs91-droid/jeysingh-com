import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What I am working on now",
  description: "What Jey Singh is studying, building and writing as of November 2026.",
  alternates: { canonical: "/roadmap" },
};

const now = [
  { when: "Studying", title: "Finishing Cloud Development and Operations", text: "Final month at Algonquin College. The program ends in December 2026." },
  { when: "Studying", title: "Preparing for AZ-104", text: "Working through my own field guide, the practice exams and all 12 labs before I book the exam." },
  { when: "Writing", title: "AZ-305 Field Guide", text: "The Solutions Architect guide is in review. It comes out when the labs and questions pass the same checks AZ-104 did." },
  { when: "Writing", title: "A Git and GitHub guide for job seekers", text: "What teams test, and what a recruiter looks for on a GitHub profile." },
  { when: "Building", title: "SnapBooks and Hirely", text: "Shipping updates to both products." },
  { when: "Next", title: "Cloud roles from December 2026", text: "Open to Azure administrator, cloud operations and DevOps roles once the program ends." },
];

export default function Now() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>What I am working on now</h1>
        <p className="lede">Updated November 2026.</p>
      </div>
      <div className="rows">
        {now.map(n => (
          <div key={n.title} className="row">
            <div className="when">{n.when}</div>
            <div><h3>{n.title}</h3><p>{n.text}</p></div>
          </div>
        ))}
      </div>
      <div className="btn-row" style={{ marginTop: "2.5rem" }}>
        <Link href="/contact" className="btn btn-primary">Get in touch</Link>
      </div>
    </div>
  );
}
