import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Books",
  description: "Practical cloud guides by Jey Singh in the Exam to Work series, starting with AZ-104: The Azure Administrator Field Guide.",
  alternates: { canonical: "/books" },
};

export default function Books() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>Books</h1>
        <p className="lede">
          The Exam to Work series: study guides that get you through the exam and
          ready for the first week on the job.
        </p>
      </div>

      <div className="book">
        <Image className="cover" src="/books/az-104-cover.jpg" alt="Cover of AZ-104: The Azure Administrator Field Guide" width={816} height={1056} priority />
        <div>
          <span className="badge b-live">Available now</span>
          <h2 style={{ marginTop: "0.8rem" }}>AZ-104: The Azure Administrator Field Guide</h2>
          <p className="lede" style={{ marginTop: "1rem" }}>
            264 pages for beginners who want the certification and a first Azure job.
            Every command explained in Azure CLI and PowerShell, 12 workplace labs
            and 156 original practice questions.
          </p>
          <div className="btn-row" style={{ marginTop: "1.6rem" }}>
            <Link href="/books/az-104" className="btn btn-primary">See the book</Link>
            <Link href="/books/az-104#sample" className="btn btn-ghost">Read the free sample</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <h2 style={{ marginBottom: "1.5rem" }}>In the works</h2>
        <div className="grid-2">
          <div className="card">
            <span className="badge b-soon">Coming soon</span>
            <h3>AZ-305: The Azure Solutions Architect Field Guide</h3>
            <p>The next step after AZ-104: how to design Azure solutions and explain the trade-offs. In review now.</p>
          </div>
          <div className="card">
            <span className="badge b-soon">Coming soon</span>
            <h3>A Git and GitHub guide for job seekers</h3>
            <p>The Git skills companies test, and what a recruiter looks for on your GitHub profile.</p>
          </div>
        </div>
        <p className="note" style={{ marginTop: "1.5rem" }}>
          Want to hear when these are out? <Link href="/contact">Send me a message</Link>.
        </p>
      </section>
    </div>
  );
}
