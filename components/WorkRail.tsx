"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/projects";

export default function WorkRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const featuredProjects = projects.filter((project) => project.featured);

  const scroll = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.72, 900),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={railRef}
        className="work-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:gap-6 md:px-10"
        aria-label="Selected projects"
      >
        {featuredProjects.map((project, index) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            className={`work-card group w-[82vw] shrink-0 snap-start md:w-[42vw] ${
              index % 2 === 1 ? "md:mt-14" : ""
            }`}
          >
            <div className="relative aspect-[1.13/1] overflow-hidden bg-[#dfddd6]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 82vw, 42vw"
                className="work-card-image object-cover"
                style={{ backgroundColor: project.color }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 eyebrow">
                {project.number} / {String(featuredProjects.length).padStart(2, "0")}
              </span>
              <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-acid text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={16} />
              </span>
            </div>
            <div className="flex items-start justify-between pt-4">
              <div>
                <h3 className="text-[clamp(1.5rem,3vw,2.4rem)] font-semibold tracking-[-0.075em]">
                  {project.name}
                </h3>
                <p className="mt-1 text-[11px] text-black/55">{project.category}</p>
              </div>
              <span className="pt-2 text-[10px] text-black/50">{project.year}</span>
            </div>
          </Link>
        ))}
        <div className="grid w-[35vw] shrink-0 place-items-center bg-acid md:w-[24vw]">
          <Link href="/contact" className="flex flex-col items-center gap-4 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-ink">
              <ArrowRight size={22} />
            </span>
            <span className="eyebrow">Have a good one in mind?</span>
            <span className="text-3xl font-semibold tracking-[-0.08em]">Let’s make it.</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-end gap-2 px-5 pt-4 md:px-10">
        <button
          type="button"
          aria-label="Scroll projects left"
          onClick={() => scroll(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/20 transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Scroll projects right"
          onClick={() => scroll(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/20 transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
