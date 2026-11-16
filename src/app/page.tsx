import Link from "next/link";
import Image from "next/image";
import CommandAnatomy from "@/components/CommandAnatomy";
import { site, gitBook } from "@/lib/site";

const work = [
  {
    title: "AZ-104 field labs",
    badge: "Public repo", cls: "b-live",
    desc: "12 workplace ticket labs and a capstone. Every lab has deploy, verify and cleanup scripts, tested live in Azure.",
    tags: ["Azure CLI", "Bicep", "Bash"],
    href: site.labsRepo, foot: "Open the repo on GitHub",
  },
  {
    title: "Git / GitHub labs",
    badge: "Public repo", cls: "b-live",
    desc: "4 local Git drills with a checker that prints PASS or FAIL, and 4 GitHub labs. Tested on Windows, macOS and Linux in CI.",
    tags: ["Git", "Bash", "GitHub Actions"],
    href: gitBook.labsRepo, foot: "Open the repo on GitHub",
  },
  {
    title: "SnapBooks",
    badge: "Live product", cls: "b-live",
    desc: "Bookkeeping for self-employed Canadians: HST tracking, a KM logbook, AI receipt scanning and CRA-ready exports.",
    tags: ["Next.js", "Neon Postgres", "Stripe"],
    href: "https://snapbooks.ca", foot: "Visit snapbooks.ca",
  },
  {
    title: "Hirely",
    badge: "Live product", cls: "b-live",
    desc: "A CRM for recruiters. A Chrome extension saves contacts from LinkedIn and Gmail, and the Claude API drafts follow-ups.",
    tags: ["TypeScript", "Supabase", "Claude API"],
    href: "https://hirelypro.com", foot: "Visit hirelypro.com",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="status"><i aria-hidden="true" />Open to cloud roles from December 2026</span>
            <h1>I build on Azure and write the guide I wanted when I started.</h1>
            <p className="lede">
              I&apos;m Jey Singh: electrical engineer, technical recruiter and cloud builder.
              I ship cloud and AI products, and I teach Azure and Git the way the job uses them,
              one command at a time.
            </p>
            <div className="btn-row" style={{ marginTop: "2rem" }}>
              <Link href="/books" className="btn btn-primary">See my books</Link>
              <Link href="/portfolio" className="btn btn-ghost">View my work</Link>
            </div>
          </div>
          <CommandAnatomy />
        </div>
      </section>

      <div className="wrap">
        <div className="facts">
          <div><strong>Author</strong><span>AZ-104 Field Guide (264 pages) and Git / GitHub Study Guide (151 pages)</span></div>
          <div><strong>Cloud Development and Operations</strong><span>Algonquin College, finishing December 2026</span></div>
          <div><strong>Electrical and Electronics Engineer</strong><span>B.Eng, plus Wireless Telecommunications at Humber College</span></div>
          <div><strong>Founder</strong><span>Western Jobs, SnapBooks and Hirely</span></div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="book">
            <Image className="cover" src="/books/az-104-cover.jpg" alt="Cover of AZ-104: The Azure Administrator Field Guide" width={816} height={1056} priority />
            <div>
              <h2>AZ-104: The Azure Administrator Field Guide</h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                Pass the exam, then do the job. Every skill on the official outline,
                explained with diagrams and real commands.
              </p>
              <ul>
                <li>Every command broken down in Azure CLI and PowerShell</li>
                <li>12 workplace labs written as IT tickets, plus a capstone</li>
                <li>156 original practice questions with explained answers</li>
                <li>A job chapter written from the recruiter&apos;s side of the desk</li>
              </ul>
              <div className="btn-row">
                <Link href="/books/az-104" className="btn btn-primary">See what&apos;s inside</Link>
                <Link href="/books/az-104#sample" className="btn btn-ghost">Read the free sample</Link>
              </div>
            </div>
          </div>
          <div className="book" style={{ marginTop: "3rem" }}>
            <Image className="cover" src="/books/git-github-cover.jpg" alt="Cover of the Git / GitHub Study Guide" width={816} height={1056} />
            <div>
              <span className="badge b-live">New</span>
              <h2 style={{ marginTop: "0.8rem" }}>Git / GitHub Study Guide</h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                Learn Git from your first terminal command, prepare for GitHub
                Foundations (GH-900) and practise the workflow teams use every day.
              </p>
              <ul>
                <li>Every command explained in plain words, with what Git prints back</li>
                <li>4 local drills with a PASS or FAIL checker, and 4 GitHub labs written as work tickets</li>
                <li>145 quiz questions, plus a Practice Pack with two full practice exams</li>
                <li>A capstone: your first week on a team</li>
              </ul>
              <div className="btn-row">
                <Link href="/books/git" className="btn btn-primary">See what&apos;s inside</Link>
                <Link href="/books/git#sample" className="btn btn-ghost">Read the free sample</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Work you can open and check</h2>
            <Link href="/portfolio">All projects</Link>
          </div>
          <div className="grid-2">
            {work.map(w => (
              <a key={w.title} href={w.href} className="card">
                <span className={`badge ${w.cls}`}>{w.badge}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <div className="tags">{w.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                <span className="foot">{w.foot}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Learn for free</h2>
            <Link href="/learn">Everything in Learn</Link>
          </div>
          <div className="grid-3">
            <Link href="/learn/read-azure-cli" className="card">
              <h3>How to read any Azure CLI command</h3>
              <p>The one sentence pattern behind every <code>az</code> command, with the PowerShell version beside it.</p>
              <span className="foot">Read the lesson</span>
            </Link>
            <Link href="/books/az-104#sample" className="card">
              <h3>AZ-104 sample chapter</h3>
              <p>22 pages from the book: the command grammar chapter and the first workplace lab.</p>
              <span className="foot">Get the free sample</span>
            </Link>
            <Link href="/books/git#sample" className="card">
              <h3>Git / GitHub sample</h3>
              <p>18 pages from the book: Start Here, the drills page and the troubleshooting chapter.</p>
              <span className="foot">Get the free sample</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2" style={{ alignItems: "center" }}>
          <div>
            <h2>Recruiter by trade, engineer by training</h2>
            <p style={{ marginTop: "1rem", maxWidth: "58ch" }}>
              I have read resumes and run interviews for years, so I know what gets a
              cloud candidate hired. Now I am on the other side of the table, learning
              the work properly and writing down what helps.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/about" className="btn btn-ghost">More about me</Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
