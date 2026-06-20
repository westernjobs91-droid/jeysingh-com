import Link from "next/link";

const projects = [
  { title: "BookHaven Online", subtitle: "Cloud Architecture Case Study", desc: "Reasoning through Azure service selection and design trade-offs for a real-world e-commerce scenario. Published with a 'why I made these decisions' narrative, not just a technical summary.", tags: ["Azure", "Architecture", "AZ-104"], status: "in-progress", icon: "ti-building-store" },
  { title: "Azure SQL Security Deep-Dive", subtitle: "Lab Write-up", desc: "Azure SQL Database, Key Vault with RBAC, and Always Encrypted configuration. Advanced security material most entry-level candidates have not touched.", tags: ["Azure SQL", "Key Vault", "RBAC", "Always Encrypted"], status: "in-progress", icon: "ti-shield-lock" },
  { title: "IaC Repo and Containerized App", subtitle: "Infrastructure as Code with CI/CD", desc: "Bicep and Terraform repo provisioning a VNet, VM, storage account, and Key Vault on Azure. Containerized app deployed through a GitHub Actions CI/CD pipeline.", tags: ["Bicep", "Terraform", "Docker", "GitHub Actions"], status: "planned", icon: "ti-git-branch" },
  { title: "Agentic Research System on Azure", subtitle: "Multi-agent AI on Azure", desc: "Multi-agent research workflow using LangGraph with Claude as the LLM backbone, deployed on Azure with a Blob retrieval tool layer and a real eval suite.", tags: ["LangGraph", "Claude", "Azure", "RAG", "Eval"], status: "planned", icon: "ti-robot" },
];

export default function PortfolioPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div className="pill" style={{ marginBottom: "1.5rem" }}><span className="pill-dot" />4 projects</div>
      <h1 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1rem", lineHeight: 1.05 }}>
        <span className="grad-text">Portfolio</span>
      </h1>
      <p style={{ fontSize: "16px", color: "#6b6b8a", maxWidth: "520px", lineHeight: 1.75, marginBottom: "3.5rem" }}>
        Cloud and AI projects built during the program. Each one is designed to show real engineering decisions, not just that the lab ran.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {projects.map(p => (
          <div key={p.title} className="card" style={{ padding: "1.6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: p.status === "in-progress" ? "#0e1e3d" : "#0e0e1a",
                  border: `1px solid ${p.status === "in-progress" ? "#1a3060" : "#1e1830"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "17px", color: p.status === "in-progress" ? "#60a5fa" : "#2a2040",
                  flexShrink: 0,
                }}>
                  <i className={`ti ${p.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#eeeaf8", letterSpacing: "-0.02em", marginBottom: "1px" }}>{p.title}</h2>
                  <span style={{ fontSize: "11px", color: "#3a3858" }}>{p.subtitle}</span>
                </div>
              </div>
              <span style={{
                fontSize: "10px", padding: "4px 11px", borderRadius: "10px", whiteSpace: "nowrap",
                background: p.status === "in-progress" ? "#0e1e3d" : "#0e0e1a",
                color: p.status === "in-progress" ? "#60a5fa" : "#3a3858",
                border: `1px solid ${p.status === "in-progress" ? "#1a3060" : "#1e1830"}`,
              }}>
                {p.status === "in-progress" ? "In progress" : "Planned"}
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "#6b6b8a", lineHeight: 1.7, marginBottom: "1rem" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "11px" }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
