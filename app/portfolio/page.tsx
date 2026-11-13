import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected work — AURA®",
  description:
    "Explore selected identity, strategy, and digital projects by AURA®, an independent creative studio.",
};

export default function PortfolioPage() {
  return (
    <div className="px-5 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-[1600px]">
        <section className="grid gap-10 pb-16 pt-16 md:grid-cols-[1.4fr_0.6fr] md:items-end md:pb-24 md:pt-24">
          <div>
            <p className="mb-6 eyebrow text-black/50">Selected work · 2023—25</p>
            <h1 className="section-title max-w-5xl text-[clamp(4rem,12vw,12rem)]">
              Made to
              <br />
              <span className="text-black/30">make you feel.</span>
            </h1>
          </div>
          <div className="max-w-sm md:justify-self-end">
            <p className="text-lg leading-relaxed tracking-[-0.035em] md:text-xl">
              A collection of identities and digital experiences made with good people and
              ambitious ideas.
            </p>
            <a href="#projects" className="mt-6 inline-flex items-center gap-2 eyebrow">
              Explore the work <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <section id="projects" aria-label="Selected projects" className="scroll-mt-8">
          <div className="mb-6 flex items-end justify-between border-b border-black/20 pb-4">
            <p className="eyebrow text-black/50">AURA® projects</p>
            <p className="eyebrow text-black/50">
              {String(projects.length).padStart(2, "0")} works
            </p>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 md:gap-x-8 md:gap-y-20">
            {projects.map((project, index) => (
              <Link
                href={`/work/${project.slug}`}
                key={project.slug}
                className={`work-card group block ${
                  index % 2 === 1 ? "md:mt-20" : ""
                }`}
              >
                <div className="relative aspect-[1.15/1] overflow-hidden bg-[#dfddd6]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 46vw"
                    className="work-card-image object-cover"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 eyebrow">
                    {project.number} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-acid text-ink transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <h2 className="text-[clamp(1.7rem,3.8vw,3rem)] font-semibold tracking-[-0.075em]">
                      {project.name}
                    </h2>
                    <p className="mt-1 text-[11px] text-black/55">{project.category}</p>
                  </div>
                  <span className="pt-2 text-[10px] text-black/50">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24 flex flex-col justify-between gap-8 border-t border-black/20 pt-8 md:mt-36 md:flex-row md:items-end">
          <div>
            <p className="mb-4 eyebrow text-black/50">Something in mind?</p>
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.08em]">
              Let’s make it matter.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 eyebrow text-paper transition-colors hover:bg-acid hover:text-ink"
          >
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </section>
      </div>
    </div>
  );
}
