import type { Metadata } from "next";
import Image from "next/image";
import { gitBook, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Git / GitHub Study Guide: Learn Git, Prepare for GH-900",
  description:
    "A 151-page beginner's guide to Git and GitHub: every command explained, 145 quiz questions, 4 local drills, 4 GitHub labs and the GH-900 exam covered.",
  alternates: { canonical: "/books/git" },
  openGraph: {
    title: "Git / GitHub Study Guide",
    description: "Learn Git, prepare for GH-900, work on a team. 151 pages, 9 hands-on labs, 145 quiz questions.",
    url: "/books/git",
    type: "book",
    images: ["/books/git-github-og.jpg"],
  },
};

const parts = [
  "Start Here: open a terminal and install Git",
  "Part 1, Git foundations: commits, branches, merging, undo and remotes",
  "Part 2, GitHub the platform: the GH-900 exam core",
  "Pull requests, reviews, issues, Projects and Discussions",
  "GitHub Actions, security, Copilot and AI agents",
  "Part 3, At work: your first week on a team",
  "When something breaks: troubleshooting from the error message",
  "Interview prep, cheat sheet, glossary, index and GH-900 objective map",
];

export default function GitBook() {
  return (
    <div className="wrap">
      <div className="page-head">
        <div className="book" style={{ alignItems: "start" }}>
          <Image className="cover" src="/books/git-github-cover.jpg" alt="Cover of the Git / GitHub Study Guide" width={816} height={1056} priority />
          <div>
            <span className="badge b-live">Available now</span>
            <h1 style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)", margin: "0.9rem 0 1rem" }}>
              Git / GitHub Study Guide
            </h1>
            <p className="lede">
              Learn Git from your first terminal command, prepare for GitHub
              Foundations (GH-900), and practise the workflow teams use every day.
            </p>
            <ul>
              <li>{gitBook.pages} pages, PDF, US Letter. Best on a laptop or tablet.</li>
              <li>{gitBook.edition}, last updated {gitBook.updated}. Updates are free.</li>
              <li>Written against the January 2026 GH-900 skills outline.</li>
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
          <div className="card"><h3>No experience needed</h3><p>It starts with opening a terminal. Every command is explained in plain words, with what Git prints back.</p></div>
          <div className="card"><h3>4 local Git drills</h3><p>A checker prints PASS or FAIL with a hint. Each drill has a second variant so you can retry it cold. Runs on Windows, macOS and Linux.</p></div>
          <div className="card"><h3>4 GitHub labs and a capstone</h3><p>Labs are written as work tickets. The capstone is your first week on a team, ending with a solo retry with no steps given.</p></div>
          <div className="card"><h3>145 quiz questions</h3><p>A quiz after every chapter and a mixed exam checkpoint. Every answer is explained. The Practice Pack adds two full 60-question exams.</p></div>
          <div className="card"><h3>Pull requests and Actions</h3><p>Review practice, a safe-Actions check, and how to review a pull request that Copilot or an AI agent wrote.</p></div>
          <div className="card"><h3>Ready for the job</h3><p>A troubleshooting chapter that starts from the error message, interview prep, a two-page cheat sheet and a glossary.</p></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: "1.5rem" }}>A look inside</h2>
        <div className="shots">
          <Image src="/books/git-github-start.jpg" alt="The Start Here pages of the Git / GitHub Study Guide" width={1200} height={960} />
          <Image src="/books/git-github-drills.jpg" alt="The drills page, with a checker that prints PASS or FAIL" width={1200} height={960} />
          <Image src="/books/git-github-broken.jpg" alt="The troubleshooting chapter, organized by error message" width={1200} height={960} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Inside the book</h2>
        <ol className="toc">{parts.map(c => <li key={c}>{c}</li>)}</ol>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="sample">
        <div className="grid-2">
          <div className="card">
            <h3>Free sample, 18 pages</h3>
            <p>Start Here, the drills page, the pull request chapter opening, the troubleshooting chapter and the exam map. No sign-up.</p>
            <a className="foot" href={gitBook.sample}>Download the sample PDF</a>
          </div>
          <div className="card">
            <h3>Free lab files</h3>
            <p>The drills, the checker and the GitHub lab tickets, tested on Windows (Git Bash), macOS and Linux.</p>
            <a className="foot" href={gitBook.labsRepo}>Open the lab repo on GitHub</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="buy">
        <h2 style={{ marginBottom: "0.6rem" }}>Get the book</h2>
        <p className="note" style={{ marginBottom: "1.5rem" }}>
          Pick what you need. The Practice Pack is a separate PDF, and the bundle includes it.
        </p>
        <div className="stores">
          {gitBook.stores.map(s => (
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
          Prices are set by each store. Etsy is in Canadian dollars, the others in US dollars. Gumroad purchases have a 14-day refund.
        </p>
      </section>

      <section className="section prose" style={{ paddingTop: 0 }}>
        <h2>Good to know</h2>
        <ul>
          <li>The local drills need only Git and a terminal. The GitHub labs need a free GitHub account.</li>
          <li>The drills were tested on Windows (Git Bash), macOS and Linux, and the GitHub labs were run live in November 2026.</li>
          <li>Every practice question is original. The book contains no real exam questions.</li>
          <li>No pass guarantee. You still have to study and practise.</li>
          <li>Written by Jey Singh with AI assistance in drafting. Every lab was tested and every page was reviewed before release.</li>
          <li>Found a mistake? <a href={`mailto:${site.email}?subject=Git%20GitHub%20Study%20Guide%20correction`}>Email me</a> and I will fix it in the next update.</li>
          <li>Independent publication. Not affiliated with, authorized, sponsored or approved by GitHub or Microsoft. GitHub is a trademark of GitHub, Inc.</li>
        </ul>
      </section>
    </div>
  );
}
