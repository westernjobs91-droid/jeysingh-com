"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/certifications", label: "Certs" },
  { href: "/roadmap", label: "Roadmap" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      borderBottom: "1px solid #1e1830",
      background: "rgba(8,8,16,0.88)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      padding: "0 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "58px",
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontSize: "15px", fontWeight: 700, letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Jey Singh
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        {links.map(l => {
          const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: active ? 500 : 400,
              color: active ? "#a78bfa" : "#6b6b8a",
              background: active ? "#a78bfa12" : "transparent",
              textDecoration: "none",
              transition: "all 0.15s",
              letterSpacing: active ? "-0.01em" : "normal",
            }}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
