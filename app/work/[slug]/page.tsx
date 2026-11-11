import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: "Project not found — AURA®" };
  return {
    title: `${project.name} — AURA®`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="px-5 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <Link href="/#work" className="mt-7 inline-flex items-center gap-2 eyebrow text-black/60">
          <ArrowLeft size={13} /> All projects
        </Link>
        <div className="grid gap-8 pb-10 pt-16 md:grid-cols-[1.3fr_0.7fr] md:items-end md:pb-16 md:pt-24">
          <div>
            <p className="mb-5 eyebrow text-black/50">
              {project.number} / 04 &nbsp;·&nbsp; {project.category} &nbsp;·&nbsp; {project.year}
            </p>
            <h1 className="section-title text-[clamp(4rem,12vw,12rem)]">{project.name}</h1>
          </div>
          <div className="max-w-md md:justify-self-end">
            <p className="text-lg leading-relaxed tracking-[-0.035em] md:text-xl">
              {project.description}
            </p>
            <p className="mt-5 text-sm text-black/55">{project.outcome}</p>
          </div>
        </div>
        <div className="relative aspect-[1.2/1] overflow-hidden bg-[#dfddd6] md:aspect-[1.9/1]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 92vw"
            className="object-cover"
            style={{ backgroundColor: project.color }}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-2 eyebrow">
            {project.name} — AURA® Studio
          </span>
        </div>
        <div className="grid gap-10 py-14 md:grid-cols-2 md:py-24">
          <p className="eyebrow text-black/50">A little more about it</p>
          <div>
            <p className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.1] tracking-[-0.065em]">
              {project.description}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/55">
              We partner closely with ambitious people to turn a clear point of view into an
              experience that feels unmistakably theirs. This is what happens when the right idea
              finds its shape.
            </p>
          </div>
        </div>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group flex items-center justify-between border-t border-black/20 py-7"
        >
          <div>
            <p className="mb-2 eyebrow text-black/50">Up next · {nextProject.category}</p>
            <p className="text-3xl font-semibold tracking-[-0.075em] md:text-5xl">
              {nextProject.name}
            </p>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-acid transition-transform group-hover:rotate-45">
            <ArrowUpRight size={20} />
          </span>
        </Link>
      </div>
    </article>
  );
}
