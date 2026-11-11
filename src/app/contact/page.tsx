import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email Jey Singh or connect on LinkedIn about cloud roles, the AZ-104 Field Guide or a project.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>Contact</h1>
        <p className="lede">
          Hiring for a cloud role, have a question about a book, or found a mistake
          in one? I read every message.
        </p>
      </div>
      <div className="grid-3">
        <a href={`mailto:${site.email}`} className="card">
          <h3>Email</h3>
          <p>{site.email}</p>
          <span className="foot">Write an email</span>
        </a>
        <a href={site.linkedin} className="card">
          <h3>LinkedIn</h3>
          <p>The fastest way to reach me, and where I post about cloud careers.</p>
          <span className="foot">Open my profile</span>
        </a>
        <a href={site.labsRepo} className="card">
          <h3>GitHub</h3>
          <p>The AZ-104 lab repo. Open an issue there if a lab script fails.</p>
          <span className="foot">Open the repo</span>
        </a>
      </div>
      <p className="note" style={{ marginTop: "2rem" }}>
        Need technical or industrial staff in Ontario? That is my staffing firm,{" "}
        <a href="https://www.westernjobs.ca">Western Jobs</a>.
      </p>
    </div>
  );
}
