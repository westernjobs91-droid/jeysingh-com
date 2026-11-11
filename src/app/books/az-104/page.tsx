import type { Metadata } from "next";
import Image from "next/image";
import { az104, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AZ-104: The Azure Administrator Field Guide",
  description:
    "A 264-page AZ-104 study guide for beginners: every command explained in Azure CLI and PowerShell, 12 tested workplace labs and 156 original practice questions.",
  alternates: { canonical: "/books/az-104" },
  openGraph: {
    title: "AZ-104: The Azure Administrator Field Guide",
    description: "Pass the exam, then do the job. 264 pages, 12 workplace labs, 156 practice questions.",
    url: "/books/az-104",
    type: "book",
    images: ["/books/az-104-og.jpg"],
  },
};

const chapters = [
  "The Exam and the Job",
  "Your Toolkit: Command Grammar",
  "Identity and Governance",
  "Storage",
  "Compute, ARM and Bicep",
  "Networking",
  "Monitor and Backup",
  "12 Workplace Labs and a Capstone",
  "Two Practice Exams",
  "Land the Job: Resume and Interviews",
  "Cheat Sheets and Final Week Plan",
  "Field Reference and Error Fixes",
];

export default function Az104() {
  return (
    <div className="wrap">
      <div className="page-head">
        <div className="book" style={{ alignItems: "start" }}>
          <Image className="cover" src="/books/az-104-cover.jpg" alt="Cover of AZ-104: The Azure Administrator Field Guide" width={816} height={1056} priority />
          <div>
            <span className="badge b-live">Available now</span>
            <h1 style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)", margin: "0.9rem 0 1rem" }}>
              AZ-104: The Azure Administrator Field Guide
            </h1>
            <p className="lede">
              Study for AZ-104 by doing the job. Written for beginners who want the
              certification and a first Azure role.
            </p>
            <ul>
              <li>{az104.pages} pages, PDF, US Letter. Best on a laptop or tablet.</li>
              <li>{az104.edition}, last updated {az104.updated}. Updates are free.</li>
              <li>Covers every domain on Microsoft&apos;s public AZ-104 skills outline.</li>
            </ul>
            <div className="btn-row">
              <a href="#buy" className="btn btn-primary">Get the book</a>
              <a href="#sample" className="btn btn-ghost">Read the free sample</a>
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>What you get</h2>
        <div className="grid-3">
          <div className="card"><h3>Every command, broken down</h3><p>Each important command is taken apart piece by piece, in both Azure CLI and PowerShell, with the portal path beside it.</p></div>
          <div className="card"><h3>12 workplace labs and a capstone</h3><p>Labs are written as real IT tickets. Each one has deploy, verify and cleanup scripts in a free GitHub repo.</p></div>
          <div className="card"><h3>156 original practice questions</h3><p>A quiz after every domain and two full practice exams, one with a case study. Every answer is explained.</p></div>
          <div className="card"><h3>Diagrams for the hard parts</h3><p>RBAC scopes, storage redundancy, peering, NSG rules, private endpoints, backup and Site Recovery.</p></div>
          <div className="card"><h3>A job chapter from a recruiter</h3><p>A sample resume, a LinkedIn guide, 20 technical and 8 behavioral interview questions, and 7 troubleshooting scenarios.</p></div>
          <div className="card"><h3>A reference you keep using</h3><p>Portal paths for about 70 tasks, 28 real error messages with fixes, cheat sheets, a glossary and an index.</p></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: "1.5rem" }}>A look inside</h2>
        <div className="shots">
          <Image src="/books/az-104-anatomy.jpg" alt="A book page that labels each part of an Azure CLI command" width={1200} height={960} />
          <Image src="/books/az-104-diagrams.jpg" alt="A book page with a virtual network peering diagram" width={1200} height={960} />
          <Image src="/books/az-104-labs.jpg" alt="A lab page written as a workplace ticket with acceptance criteria" width={1200} height={960} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Chapters</h2>
        <ol className="toc">{chapters.map(c => <li key={c}>{c}</li>)}</ol>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="sample">
        <div className="grid-2">
          <div className="card">
            <h3>Free sample, 22 pages</h3>
            <p>The front matter, the command grammar chapter and the first workplace lab. No sign-up.</p>
            <a className="foot" href={az104.sample}>Open the sample PDF on GitHub</a>
          </div>
          <div className="card">
            <h3>Free lab scripts</h3>
            <p>All 12 labs and the capstone, with a tool that finds a region and VM size your subscription can use.</p>
            <a className="foot" href={site.labsRepo}>Open the lab repo on GitHub</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="buy">
        <h2 style={{ marginBottom: "0.6rem" }}>Get the book</h2>
        <p className="note" style={{ marginBottom: "1.5rem" }}>
          Pick what you need. The Practice Pack is a separate PDF, and the bundle includes it.
        </p>
        <div className="stores">
          {az104.stores.map(s => (
            <div key={s.href} className={`store${s.primary ? " primary" : ""}`}>
              <div>
                <h3>{s.name}</h3>
                <p>{s.what}</p>
              </div>
              <div className="buy">
                <span className="price">{s.price}</span>
                <a href={s.href} className={`btn ${s.primary ? "btn-primary" : "btn-ghost"}`}>Buy on {s.where}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="note" style={{ marginTop: "1.2rem" }}>
          Prices are in US dollars and set by each store. Gumroad purchases have a 14-day refund.
        </p>
      </section>

      <section className="section prose" style={{ paddingTop: 0 }}>
        <h2>Good to know</h2>
        <ul>
          <li>The labs use real Azure resources. Most cost a few cents, and the book shows you how to set a budget alert and clean up.</li>
          <li>All 12 labs and the capstone were run end to end in a live Azure subscription in November 2026.</li>
          <li>Every practice question is original. The book contains no real exam questions.</li>
          <li>No pass guarantee. You still have to study and practice.</li>
          <li>Written by Jey Singh with AI assistance in drafting. Every lab was run live in Azure and every page was technically reviewed before release.</li>
          <li>Found a mistake? <a href={`mailto:${site.email}?subject=AZ-104%20Field%20Guide%20correction`}>Email me</a> and I will fix it in the next update.</li>
          <li>Independent publication. Not affiliated with, authorized, sponsored or approved by Microsoft Corporation.</li>
        </ul>
      </section>
    </div>
  );
}
