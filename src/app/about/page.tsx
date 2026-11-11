import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Jey Singh is an electrical engineer, technical recruiter and cloud builder finishing Cloud Development and Operations at Algonquin College.",
  alternates: { canonical: "/about" },
};

const path = [
  { when: "2026", title: "Cloud Development and Operations, Algonquin College", text: "Ontario College Graduate Certificate, finishing December 2026. Azure architecture, cloud migration, infrastructure as code, DevOps, serverless, security and cloud-native development." },
  { when: "2026", title: "Author, AZ-104: The Azure Administrator Field Guide", text: "Wrote and published a 264-page study guide with 12 tested labs, while preparing for the exam myself." },
  { when: "2026", title: "Founder, SnapBooks and Hirely", text: "Built and launched two software products on my own: bookkeeping for self-employed Canadians, and a CRM for recruiters." },
  { when: "2023 to now", title: "Founder and Managing Director, Western Jobs", text: "A technical and industrial staffing agency in Mississauga. I screen engineering, IT and cloud candidates the way a hiring manager would." },
  { when: "2019 to 2023", title: "HR and IT Operations Specialist, Essex Employment", text: "Ran IT across five to six offices: workstations, software, security setup, websites, domains and CRM platforms, alongside recruitment." },
  { when: "Earlier", title: "Electrical and Electronics Engineering, then Wireless Telecommunications", text: "B.Eng in Electrical and Electronics Engineering, followed by Wireless Telecommunications at Humber College: network infrastructure, Cisco networking and wireless systems." },
];

export default function About() {
  return (
    <div className="wrap">
      <div className="page-head prose">
        <h1>About</h1>
        <p className="lede">
          I&apos;m Jey Singh. I trained as an electrical and electronics engineer, spent
          years hiring technical people, and now build in the cloud myself.
        </p>
        <p>
          Recruiting taught me what gets a candidate hired: proof you can do the work,
          explained clearly. That is how I study and how I write. I learn a skill, use
          it on something real, then write it down in plain language for the next person.
        </p>
        <p>
          Right now I am finishing a cloud program at Algonquin College, preparing for
          the AZ-104 exam, and running the products I have built.
        </p>
      </div>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Background</h2>
        <div className="rows">
          {path.map(p => (
            <div key={p.title} className="row">
              <div className="when">{p.when}</div>
              <div><h3>{p.title}</h3><p>{p.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="credentials">
        <h2 style={{ marginBottom: "0.6rem" }}>Credentials</h2>
        <p className="note" style={{ marginBottom: "1.5rem" }}>Earned and in progress are kept separate, so you know exactly where I am.</p>
        <div className="grid-2">
          <div className="card"><span className="badge b-live">Earned, July 2026</span><h3>Agentic AI</h3><p>DeepLearning.AI, taught by Andrew Ng. Reflection, tool use, planning and multi-agent collaboration.</p></div>
          <div className="card"><span className="badge b-live">Earned, July 2026</span><h3>Programming for Everybody (Python)</h3><p>University of Michigan, on Coursera.</p></div>
          <div className="card"><span className="badge b-prog">Preparing now</span><h3>AZ-104: Azure Administrator Associate</h3><p>Microsoft. I am studying for this exam with my own field guide and labs.</p></div>
          <div className="card"><span className="badge b-prog">In progress</span><h3>Cloud Development and Operations</h3><p>Algonquin College graduate certificate, finishing December 2026.</p></div>
          <div className="card"><span className="badge b-soon">Planned next</span><h3>AZ-305: Azure Solutions Architect Expert</h3><p>Microsoft. After AZ-104.</p></div>
          <div className="card"><span className="badge b-soon">Planned</span><h3>Claude Certified Architect, Foundations</h3><p>Anthropic.</p></div>
        </div>
      </section>

      <div className="btn-row" style={{ marginBottom: "2rem" }}>
        <Link href="/portfolio" className="btn btn-primary">See my work</Link>
        <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
      </div>
    </div>
  );
}
