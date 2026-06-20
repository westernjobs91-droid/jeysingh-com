import Link from "next/link";

const courses = [
  { title: "Cloud Migration", desc: "Migration strategies, Azure App Service, PaaS databases, and the 4 Rs.", slug: "cloud-migration", modules: 6, status: "active", icon: "ti-arrows-right-left", tags: ["4 Rs", "App Service", "MySQL"] },
  { title: "Cloud Computing Foundations", desc: "Service models, deployment models, cloud providers, and adoption strategy.", slug: "cloud-foundations", modules: 6, status: "active", icon: "ti-cloud", tags: ["IaaS", "PaaS", "SaaS", "CAF"] },
  { title: "Cloud Solutions Architecture", desc: "Designing cloud solutions on Azure. Architecture patterns and trade-offs.", slug: "cloud-architecture", modules: 0, status: "coming", icon: "ti-topology-star", tags: ["AZ-305", "Architecture"] },
  { title: "Accessible by Design", desc: "Building accessible digital products. WCAG standards and inclusive design.", slug: "accessible-design", modules: 0, status: "coming", icon: "ti-accessible", tags: ["WCAG", "UX"] },
  { title: "Cloud-native Development", desc: "Full-stack development on cloud infrastructure. Containers and modern APIs.", slug: "cloud-native", modules: 0, status: "coming", icon: "ti-code", tags: ["Docker", "APIs"] },
  { title: "Real-Time Data and Applications", desc: "Working with real-time data streams and remote data in the cloud.", slug: "realtime-data", modules: 0, status: "coming", icon: "ti-wave-sine", tags: ["Streaming", "Real-time"] },
  { title: "Agentic AI", desc: "Multi-agent systems, tool use, RAG, eval frameworks. Andrew Ng and Hugging Face Agents courses.", slug: "agentic-ai", modules: 0, status: "coming", icon: "ti-robot", tags: ["LangGraph", "Claude", "RAG"] },
];

export default function LearnPage() {
  const active = courses.filter(c => c.status === "active");
  const coming = courses.filter(c => c.status === "coming");
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "4rem 2rem" }}>
      <div className="pill" style={{ marginBottom: "1.5rem" }}><span className="pill-dot" />Study notes</div>
      <h1 style={{ fontSize: "42px", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1rem", color: "#eeeaf8", lineHeight: 1.05 }}>
        Learn <span className="grad-text">cloud and AI</span>
      </h1>
      <p style={{ fontSize: "16px", color: "#6b6b8a", maxWidth: "520px", lineHeight: 1.75, marginBottom: "3.5rem" }}>
        Personal study notes rewritten in plain English, with cheat sheets and quizzes for every module. No course codes, no jargon walls.
      </p>

      <div className="section-label">Available now</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "10px", marginBottom: "3rem" }}>
        {active.map(c => (
          <Link key={c.slug} href={`/learn/${c.slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ padding: "1.4rem", cursor: "pointer", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "20px", color: "#a78bfa" }}>
                  <i className={`ti ${c.icon}`} aria-hidden="true" />
                </span>
                <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "10px", background: "#2a1f50", color: "#a78bfa", border: "1px solid #3d2f6e" }}>
                  {c.modules} modules
                </span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#eeeaf8", marginBottom: "6px", letterSpacing: "-0.02em" }}>{c.title}</div>
              <p style={{ fontSize: "12px", color: "#4a4860", lineHeight: 1.6, marginBottom: "12px" }}>{c.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {c.tags.map(t => <span key={t} className="tag" style={{ fontSize: "10px" }}>{t}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-label">Coming September 2026</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "10px" }}>
        {coming.map(c => (
          <div key={c.slug} className="card" style={{ padding: "1.4rem", opacity: 0.45 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "20px", color: "#2a2040" }}>
                <i className={`ti ${c.icon}`} aria-hidden="true" />
              </span>
              <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "10px", background: "#0e0e1a", color: "#2a2040", border: "1px solid #1e1830" }}>Soon</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#4a4860", marginBottom: "6px", letterSpacing: "-0.02em" }}>{c.title}</div>
            <p style={{ fontSize: "12px", color: "#2a2040", lineHeight: 1.6 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
