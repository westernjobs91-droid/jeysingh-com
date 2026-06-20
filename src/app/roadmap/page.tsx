export default function RoadmapPage() {
  const phases = [
    {
      phase: "Phase 1", dates: "Jun 17 - Aug 18, 2026", status: "active",
      goal: "Pass AZ-104. Publish first two portfolio pieces.",
      color: "#a78bfa", colorDim: "#2a1f50", colorBorder: "#3d2f6e",
      items: [
        { week: "Wk 1-3", task: "AZ-104: Identity, Governance, Storage" },
        { week: "Wk 4-6", task: "AZ-104: Compute, App Service, Containers" },
        { week: "Wk 7-8", task: "AZ-104: Networking, Monitoring, final review" },
        { week: "Wk 3", task: "Publish BookHaven case study" },
        { week: "Wk 6", task: "Publish Azure SQL Security write-up" },
        { week: "Wk 9", task: "Sit AZ-104 exam" },
      ],
    },
    {
      phase: "Phase 2", dates: "Aug 19 - Oct 27, 2026", status: "planned",
      goal: "Pass AZ-305. Ship IaC repo. Start semester 2 courses.",
      color: "#60a5fa", colorDim: "#0e1e3d", colorBorder: "#1a3060",
      items: [
        { week: "Wk 10-12", task: "AZ-305: Identity, Monitoring, Storage design" },
        { week: "Wk 13", task: "Semester 2 starts - DevOps and IaC course begins" },
        { week: "Wk 13-17", task: "Build IaC repo through DevOps course" },
        { week: "Wk 17", task: "Publish IaC repo on GitHub" },
        { week: "Wk 19", task: "Sit AZ-305 and CCA-F exams" },
      ],
    },
    {
      phase: "Phase 3", dates: "Oct 28 - Dec 15, 2026", status: "planned",
      goal: "Ship agentic AI project. Launch job search.",
      color: "#34d399", colorDim: "#052e1c", colorBorder: "#0a5c35",
      items: [
        { week: "Wk 20-22", task: "Containerize app, deploy to Azure, GitHub Actions CI/CD" },
        { week: "Wk 20", task: "Pitch agentic Azure project in Applied Projects course" },
        { week: "Wk 21-23", task: "Build multi-agent system: orchestrator, tool layer, eval suite" },
        { week: "Wk 24", task: "Rebuild resume around 4 projects and 3 certs" },
        { week: "Wk 25-26", task: "Active applications - cloud and FDE roles" },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div className="pill" style={{ marginBottom: "1.5rem" }}><span className="pill-dot" />Jun - Dec 2026</div>
      <h1 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1rem", lineHeight: 1.05 }}>
        <span className="grad-text">Roadmap</span>
      </h1>
      <p style={{ fontSize: "16px", color: "#6b6b8a", maxWidth: "500px", lineHeight: 1.75, marginBottom: "3.5rem" }}>
        26 weeks from student to employed cloud and AI engineer. Three phases, four portfolio projects, three certifications.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {phases.map(ph => (
          <div key={ph.phase} className="card" style={{ padding: "1.6rem", borderLeft: `2px solid ${ph.colorBorder}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, fontFamily: "monospace",
                    color: ph.color, background: ph.colorDim,
                    border: `1px solid ${ph.colorBorder}`, padding: "2px 8px", borderRadius: "5px", letterSpacing: "0.05em",
                  }}>{ph.phase}</span>
                  <span style={{ fontSize: "11px", color: "#3a3858" }}>{ph.dates}</span>
                </div>
                <p style={{ fontSize: "14px", color: "#6b6b8a", lineHeight: 1.6, fontWeight: 500 }}>{ph.goal}</p>
              </div>
              <span style={{
                fontSize: "10px", padding: "3px 10px", borderRadius: "10px",
                background: ph.status === "active" ? ph.colorDim : "#0e0e1a",
                color: ph.status === "active" ? ph.color : "#3a3858",
                border: `1px solid ${ph.status === "active" ? ph.colorBorder : "#1e1830"}`,
                whiteSpace: "nowrap",
              }}>
                {ph.status === "active" ? "In progress" : "Planned"}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #1e1830", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "1px" }}>
              {ph.items.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "7px 0" }}>
                  <span style={{
                    fontSize: "9px", color: ph.color, fontFamily: "monospace",
                    background: ph.colorDim, padding: "2px 6px", borderRadius: "4px",
                    whiteSpace: "nowrap", marginTop: "2px", flexShrink: 0,
                    border: `1px solid ${ph.colorBorder}`,
                  }}>
                    {item.week}
                  </span>
                  <span style={{ fontSize: "13px", color: "#6b6b8a", lineHeight: 1.6 }}>{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
