import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Products, repos and cloud projects by Jey Singh: the AZ-104 field labs, SnapBooks, Hirely and Azure work in progress.",
  alternates: { canonical: "/portfolio" },
};

const shipped = [
  {
    title: "AZ-104 field labs", kind: "Public GitHub repo",
    desc: "12 workplace ticket labs and a capstone for Azure administrators. Each lab has deploy, verify and cleanup scripts. All of them were run end to end in a live subscription in November 2026.",
    tags: ["Azure CLI", "Bicep", "Bash", "RBAC", "Networking", "Backup"],
    href: site.labsRepo, foot: "Open the repo",
  },
  {
    title: "AZ-104: The Azure Administrator Field Guide", kind: "Published book",
    desc: "A 264-page study guide I wrote, tested and published. It covers every AZ-104 domain in Azure CLI and PowerShell, with 156 original practice questions.",
    tags: ["Azure", "Technical writing", "PowerShell"],
    href: "/books/az-104", foot: "See the book",
  },
  {
    title: "SnapBooks", kind: "Live product",
    desc: "Bookkeeping software for self-employed Canadians. I built the full product: HST tracking, a KM logbook, the T2125 vehicle deduction, invoicing, AI receipt scanning and CRA-ready exports.",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "Neon Postgres", "Stripe"],
    href: "https://snapbooks.ca", foot: "Visit snapbooks.ca",
  },
  {
    title: "Hirely", kind: "Live product",
    desc: "A CRM built for recruiters. I built it solo: the web app, a Chrome extension that saves contacts from LinkedIn and Gmail in one click, billing, and follow-ups drafted with the Claude API.",
    tags: ["Next.js", "TypeScript", "Supabase", "Chrome extension", "Claude API"],
    href: "https://hirelypro.com", foot: "Visit hirelypro.com",
  },
];

const building = [
  { title: "BookHaven Online", status: "In progress", cls: "b-prog", desc: "An Azure architecture case study for an online bookstore: which services I chose and why.", tags: ["Azure", "Architecture"] },
  { title: "Azure SQL security deep-dive", status: "In progress", cls: "b-prog", desc: "Azure SQL Database with Key Vault, RBAC and Always Encrypted, written up as a lab.", tags: ["Azure SQL", "Key Vault", "RBAC"] },
  { title: "Infrastructure as code repo", status: "Planned", cls: "b-soon", desc: "Bicep and Terraform for a VNet, VM, storage account and Key Vault, deployed by a GitHub Actions pipeline.", tags: ["Bicep", "Terraform", "GitHub Actions"] },
  { title: "Agentic research system on Azure", status: "Planned", cls: "b-soon", desc: "A multi-agent research workflow with LangGraph and Claude, deployed on Azure with an evaluation suite.", tags: ["LangGraph", "Claude", "Azure"] },
];

export default function Portfolio() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>Portfolio</h1>
        <p className="lede">Finished work first. Everything in the top section is live, and you can open it and check it yourself.</p>
      </div>

      <div className="grid-2">
        {shipped.map(p => (
          <a key={p.title} href={p.href} className="card">
            <span className="badge b-live">{p.kind}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <span className="foot">{p.foot}</span>
          </a>
        ))}
      </div>

      <section className="section">
        <h2 style={{ marginBottom: "0.6rem" }}>Cloud projects in progress</h2>
        <p className="note" style={{ marginBottom: "1.5rem" }}>These are not finished. Each one gets a write-up and a repo link here when it is.</p>
        <div className="grid-2">
          {building.map(p => (
            <div key={p.title} className="card">
              <span className={`badge ${p.cls}`}>{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
