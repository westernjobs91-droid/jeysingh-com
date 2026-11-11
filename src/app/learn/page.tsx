import type { Metadata } from "next";
import Link from "next/link";
import { az104, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn cloud and AI for free",
  description: "Free Azure lessons, study notes with quizzes, a sample chapter and hands-on labs from Jey Singh.",
  alternates: { canonical: "/learn" },
};

const soon = [
  { title: "AZ-104 practice quiz", desc: "A short set of original questions for each exam domain, with explained answers." },
  { title: "Git and GitHub for job seekers", desc: "The Git habits teams expect, and how to make your GitHub profile prove them." },
  { title: "Cloud computing foundations", desc: "Service models, deployment models and adoption strategy, in the same notes, cheat sheet and quiz format." },
  { title: "Cloud solutions architecture", desc: "Design patterns and trade-offs on Azure, written while I prepare for AZ-305." },
  { title: "Cloud-native development", desc: "Containers, APIs and serverless apps on Azure." },
  { title: "Agentic AI notes", desc: "Reflection, tool use, planning and multi-agent patterns, with small working examples." },
];

export default function Learn() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>Learn</h1>
        <p className="lede">Free lessons, notes and labs. Everything here is written in my own words, in plain English.</p>
      </div>

      <h2 style={{ marginBottom: "1.5rem" }}>Start here</h2>
      <div className="grid-2">
        <Link href="/learn/read-azure-cli" className="card">
          <span className="badge b-live">Lesson</span>
          <h3>How to read any Azure CLI command</h3>
          <p>Every <code>az</code> command follows one sentence pattern. Learn it once and you can read commands you have never seen.</p>
          <span className="foot">Read the lesson</span>
        </Link>
        <Link href="/learn/cloud-migration" className="card">
          <span className="badge b-live">Notes and quizzes</span>
          <h3>Cloud migration</h3>
          <p>Six modules on migration strategy, App Service and managed databases. Each has notes, a cheat sheet and a quiz.</p>
          <span className="foot">Start module 1</span>
        </Link>
        <a href={az104.sample} className="card">
          <span className="badge b-live">Sample chapter</span>
          <h3>AZ-104 Field Guide, free sample</h3>
          <p>22 pages from the book: the command grammar chapter and the first workplace lab.</p>
          <span className="foot">Open the PDF on GitHub</span>
        </a>
        <a href={site.labsRepo} className="card">
          <span className="badge b-live">Hands-on labs</span>
          <h3>12 Azure labs and a capstone</h3>
          <p>Workplace tickets with deploy, verify and cleanup scripts. Free for everyone, with or without the book.</p>
          <span className="foot">Open the lab repo</span>
        </a>
      </div>

      <section className="section">
        <h2 style={{ marginBottom: "1.5rem" }}>Coming soon</h2>
        <div className="grid-3">
          {soon.map(s => (
            <div key={s.title} className="card">
              <span className="badge b-soon">Coming soon</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
