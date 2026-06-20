import Link from "next/link";

const courses = [
  { title: "Cloud Migration", modules: 6, slug: "cloud-migration", status: "active" },
  { title: "Cloud Computing Foundations", modules: 6, slug: "cloud-foundations", status: "active" },
  { title: "Cloud Solutions Architecture", modules: 0, slug: "cloud-architecture", status: "coming" },
  { title: "Cloud-native Development", modules: 0, slug: "cloud-native", status: "coming" },
  { title: "Accessible by Design", modules: 0, slug: "accessible-design", status: "coming" },
];

const projects = [
  { title: "BookHaven Online", desc: "Azure architecture case study. Service selection and design trade-offs.", tags: ["Azure", "Architecture"], status: "in-progress" },
  { title: "Azure SQL Security", desc: "Key Vault with RBAC, Always Encrypted, advanced security configuration.", tags: ["SQL", "Key Vault", "Security"], status: "in-progress" },
  { title: "IaC Repo with CI/CD", desc: "Bicep and Terraform provisioning VNet, VM, storage. GitHub Actions pipeline.", tags: ["Bicep", "Terraform", "CI/CD"], status: "planned" },
  { title: "Agentic Research System", desc: "Multi-agent AI workflow with Claude, deployed on Azure with eval suite.", tags: ["LangGraph", "Claude", "Azure"], status: "planned" },
];

const certs = [
  { code: "AZ-104", full: "Azure Administrator Associate", target: "Aug 2026", status: "active" },
  { code: "AZ-305", full: "Azure Solutions Architect Expert", target: "Oct 2026", status: "planned" },
  { code: "CCA-F", full: "Claude Certified Architect - Foundations", target: "Oct 2026", status: "planned" },
];

const iconMap: Record<string, string> = {
  "Cloud Migration": "ti-arrows-right-left",
  "Cloud Computing Foundations": "ti-cloud",
  "Cloud Solutions Architecture": "ti-topology-star",
  "Cloud-native Development": "ti-code",
  "Accessible by Design": "ti-accessible",
  "BookHaven Online": "ti-building-store",
  "Azure SQL Security": "ti-shield-lock",
  "IaC Repo with CI/CD": "ti-git-branch",
  "Agentic Research System": "ti-robot",
};

export default function Home() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>

      {/* Hero */}
      <section style={{ padding: "7rem 0 5.5rem" }}>
        <div className="pill" style={{ marginBottom: "2rem" }}>
          <span className="pill-dot" />
          Available for cloud roles - December 2026
        </div>

        <h1 style={{
          fontSize: "clamp(44px, 8vw, 76px)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          marginBottom: "1.5rem",
          color: "#eeeaf8",
        }}>
          Cloud Engineer.<br />
          <span className="grad-text">AI Builder.</span>
        </h1>

        <p style={{
          fontSize: "17px", color: "#6b6b8a",
          maxWidth: "500px", lineHeight: 1.75, marginBottom: "2.5rem",
        }}>
          Building cloud systems and agentic AI on Azure.
          Studying at Algonquin College, Toronto.
          Targeting AZ-104, AZ-305, and Claude Certified Architect.
        </p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="/portfolio" className="btn-primary">View my work</Link>
          <Link href="/learn" className="btn-ghost">Learn Azure with me</Link>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px", background: "#1e1830",
        borderRadius: "12px", overflow: "hidden",
        marginBottom: "5rem",
        border: "1px solid #1e1830",
      }}>
        {[
          { num: "6", label: "Courses this semester" },
          { num: "4", label: "Portfolio projects" },
          { num: "3", label: "Certifications planned" },
          { num: "26", label: "Week career plan" },
        ].map(s => (
          <div key={s.label} style={{ background: "#0e0e1a", padding: "1.25rem 1rem", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.num}</div>
            <div style={{ fontSize: "11px", color: "#3a3858", marginTop: "3px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Study notes */}
      <section style={{ paddingBottom: "5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
          <div className="section-label">Study notes</div>
          <Link href="/learn" style={{ fontSize: "12px", color: "#a78bfa", textDecoration: "none" }}>View all</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "10px" }}>
          {courses.map(c => (
            <div key={c.slug} className="card" style={{ padding: "1.1rem 1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "16px", color: c.status === "active" ? "#a78bfa" : "#2a2040" }}>
                  <i className={`ti ${iconMap[c.title] || "ti-cloud"}`} aria-hidden="true" />
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500, color: c.status === "active" ? "#eeeaf8" : "#3a3858", letterSpacing: "-0.01em" }}>{c.title}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {c.status === "active" ? (
                  <Link href={`/learn/${c.slug}`} style={{ fontSize: "12px", color: "#a78bfa", textDecoration: "none" }}>
                    Start learning
                  </Link>
                ) : (
                  <span style={{ fontSize: "12px", color: "#2a2040" }}>Coming Sep 2026</span>
                )}
                <span style={{
                  fontSize: "10px", padding: "2px 8px", borderRadius: "10px",
                  background: c.status === "active" ? "#2a1f50" : "#0e0e1a",
                  color: c.status === "active" ? "#a78bfa" : "#2a2040",
                  border: `1px solid ${c.status === "active" ? "#3d2f6e" : "#1e1830"}`,
                }}>
                  {c.status === "active" ? `${c.modules} modules` : "Soon"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ paddingBottom: "5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
          <div className="section-label">Portfolio</div>
          <Link href="/portfolio" style={{ fontSize: "12px", color: "#a78bfa", textDecoration: "none" }}>View all</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "10px" }}>
          {projects.map(p => (
            <div key={p.title} className="card" style={{ padding: "1.1rem 1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ fontSize: "16px", color: p.status === "in-progress" ? "#60a5fa" : "#2a2040" }}>
                  <i className={`ti ${iconMap[p.title] || "ti-briefcase"}`} aria-hidden="true" />
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#eeeaf8", letterSpacing: "-0.01em" }}>{p.title}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#4a4860", lineHeight: 1.6, marginBottom: "10px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: "10px", padding: "2px 7px", borderRadius: "8px",
                    background: p.status === "in-progress" ? "#0e1e3d" : "#0e0e1a",
                    color: p.status === "in-progress" ? "#60a5fa" : "#3a3858",
                    border: `1px solid ${p.status === "in-progress" ? "#1a3060" : "#1e1830"}`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={{ paddingBottom: "6rem" }}>
        <div className="section-label" style={{ marginBottom: "1.25rem" }}>Certifications</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {certs.map(c => (
            <div key={c.code} className="card" style={{
              padding: "1rem 1.25rem",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{
                  fontSize: "11px", fontWeight: 700, fontFamily: "monospace",
                  padding: "4px 10px", borderRadius: "6px",
                  background: c.status === "active" ? "#2a1f50" : "#0e0e1a",
                  color: c.status === "active" ? "#a78bfa" : "#3a3858",
                  border: `1px solid ${c.status === "active" ? "#3d2f6e" : "#1e1830"}`,
                  letterSpacing: "0.05em",
                }}>
                  {c.code}
                </span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#eeeaf8", letterSpacing: "-0.01em" }}>{c.full}</div>
                  <div style={{ fontSize: "11px", color: "#3a3858", marginTop: "1px" }}>Target: {c.target}</div>
                </div>
              </div>
              <span style={{
                fontSize: "10px", padding: "3px 10px", borderRadius: "10px",
                background: c.status === "active" ? "#2a1f50" : "#0e0e1a",
                color: c.status === "active" ? "#a78bfa" : "#3a3858",
                border: `1px solid ${c.status === "active" ? "#3d2f6e" : "#1e1830"}`,
                whiteSpace: "nowrap",
              }}>
                {c.status === "active" ? "Studying now" : "Planned"}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
