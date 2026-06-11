"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/coaching", label: "Coaching" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-display text-2xl uppercase tracking-wider">
          KG <span className="text-accent">Performance</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/apply" className="btn-primary !px-5 !py-2.5 !text-sm">
            Apply Now
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="/apply" className="btn-primary !px-4 !py-2 !text-xs">
            Apply
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-base md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line px-6 py-4 text-sm font-medium text-zinc-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book-call"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 text-sm font-bold uppercase tracking-wider text-accent"
          >
            Book a Consultation →
          </Link>
        </div>
      )}
    </header>
  );
}
