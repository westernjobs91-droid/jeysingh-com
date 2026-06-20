export default function CertificationsPage() {
  const certs = [
    { code: "AZ-104", name: "Microsoft Azure Administrator Associate", desc: "Core Azure admin skills: identity, governance, storage, compute, networking, and monitoring. The foundation cert for any Azure engineer role.", target: "August 2026", status: "active", domains: ["Azure AD and Identity", "Governance and Compliance", "Storage Accounts", "Virtual Machines", "Networking", "Azure Monitor"] },
    { code: "AZ-305", name: "Microsoft Azure Solutions Architect Expert", desc: "Designing cloud solutions on Azure: identity architecture, data storage design, business continuity, infrastructure, and application architecture.", target: "October 2026", status: "planned", domains: ["Identity and Governance Design", "Data Storage Design", "Business Continuity", "Infrastructure Design", "Application Architecture"] },
    { code: "CCA-F", name: "Claude Certified Architect - Foundations", desc: "Agentic architecture, Claude Code, prompt engineering, tool use and MCP, context management. The AI credential for the FDE track.", target: "October 2026", status: "planned", domains: ["Agentic Architecture", "Claude Code", "Prompt Engineering", "Tool Use and MCP", "Context Management"] },
  ];

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div className="pill" style={{ marginBottom: "1.5rem" }}><span className="pill-dot" />3 certifications</div>
      <h1 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1rem", lineHeight: 1.05 }}>
        <span className="grad-text">Certifications</span>
      </h1>
      <p style={{ fontSize: "16px", color: "#6b6b8a", maxWidth: "500px", lineHeight: 1.75, marginBottom: "3.5rem" }}>
        Two Azure certs and one AI architect credential by December 2026. AZ-104 first, AZ-305 second, CCA-F alongside AZ-305.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {certs.map((c, i) => (
          <div key={c.code} className="card" style={{ padding: "1.6rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                  background: c.status === "active" ? "#2a1f50" : "#0e0e1a",
                  border: `1px solid ${c.status === "active" ? "#3d2f6e" : "#1e1830"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", color: c.status === "active" ? "#a78bfa" : "#2a2040",
                }}>
                  <i className="ti ti-certificate" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 700, fontFamily: "monospace",
                      padding: "2px 8px", borderRadius: "5px", letterSpacing: "0.05em",
                      background: c.status === "active" ? "#2a1f50" : "#0e0e1a",
                      color: c.status === "active" ? "#a78bfa" : "#3a3858",
                      border: `1px solid ${c.status === "active" ? "#3d2f6e" : "#1e1830"}`,
                    }}>{c.code}</span>
                    {c.status === "active" && (
                      <span style={{ fontSize: "10px", color: "#a78bfa", background: "#2a1f5060", padding: "1px 8px", borderRadius: "10px", border: "1px solid #3d2f6e" }}>Studying now</span>
                    )}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#eeeaf8", letterSpacing: "-0.02em" }}>{c.name}</div>
                  <div style={{ fontSize: "11px", color: "#3a3858", marginTop: "1px" }}>Target: {c.target}</div>
                </div>
              </div>
              <span style={{
                fontSize: "20px", fontWeight: 800, color: "#1e1830", letterSpacing: "-0.03em",
              }}>0{i + 1}</span>
            </div>
            <p style={{ fontSize: "13px", color: "#4a4860", lineHeight: 1.7, marginBottom: "1rem" }}>{c.desc}</p>
            <div style={{ borderTop: "1px solid #1e1830", paddingTop: "1rem" }}>
              <div style={{ fontSize: "10px", color: "#3a3858", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "8px" }}>Domains</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {c.domains.map(d => <span key={d} className="tag" style={{ fontSize: "10px" }}>{d}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
