"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span aria-hidden="true">~/</span>Jey Singh
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-menu" className={`nav-links${open ? " open" : ""}`} aria-label="Main">
          {links.map(l => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
