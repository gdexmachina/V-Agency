"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-paper px-5 pt-5 md:px-10 md:pt-7">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between border-b border-black/15 pb-5">
        <Link
          href="/"
          aria-label="Aura home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[12px] font-bold text-acid">
            A
          </span>
          <span className="text-[15px] font-bold tracking-[-0.06em]">AURA®</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          <a href="/#work" className="nav-link eyebrow">
            Selected work
          </a>
          <a href="/#studio" className="nav-link eyebrow">
            Studio
          </a>
          <a href="/#contact" className="nav-link eyebrow">
            Contact
          </a>
        </nav>

        <a
          href="mailto:hello@aura.studio"
          className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#393932] md:flex"
        >
          Start a project <ArrowUpRight size={13} />
        </a>

        <button
          type="button"
          className="eyebrow md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-6 bg-paper px-6 pb-8 pt-7 md:hidden">
          <a href="/#work" onClick={() => setMenuOpen(false)} className="section-title text-5xl">
            Work
          </a>
          <a href="/#studio" onClick={() => setMenuOpen(false)} className="section-title text-5xl">
            Studio
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)} className="section-title text-5xl">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
