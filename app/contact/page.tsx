import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — AURA®",
  description: "Get in touch with AURA® about a project, collaboration, or a good question.",
};

export default function ContactPage() {
  return (
    <div className="px-5 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-[1600px]">
        <Link href="/" className="mt-7 inline-flex items-center gap-2 eyebrow text-black/60">
          <ArrowLeft size={13} /> Back home
        </Link>

        <section className="grid gap-12 pb-16 pt-16 md:grid-cols-[1.4fr_0.6fr] md:items-end md:pb-24 md:pt-24">
          <div>
            <p className="mb-6 eyebrow text-black/50">Good people. Better questions.</p>
            <h1 className="section-title max-w-5xl text-[clamp(4rem,12vw,12rem)]">
              Let’s make
              <br />
              <span className="text-black/30">it matter.</span>
            </h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed tracking-[-0.035em] md:justify-self-end md:text-xl">
            Have a project, a collaboration, or a question? We’d love to hear what you’re thinking.
          </p>
        </section>

        <section
          aria-label="Contact information"
          className="grid border-t border-black/20 md:grid-cols-2"
        >
          <div className="border-b border-black/20 py-8 md:border-b-0 md:border-r md:py-12 md:pr-10">
            <p className="mb-8 eyebrow text-black/50">01 / Say hello</p>
            <a
              href="mailto:hello@aura.studio"
              className="group inline-flex items-center gap-3 text-[clamp(1.7rem,4vw,4rem)] font-medium tracking-[-0.075em] transition-colors hover:text-black/55"
            >
              hello@aura.studio
              <ArrowUpRight
                size={24}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-black/55">
              For new projects, collaborations, or anything else on your mind.
            </p>
          </div>
          <div className="py-8 md:py-12 md:pl-10">
            <p className="mb-8 eyebrow text-black/50">02 / Find our point of view</p>
            <p className="text-[clamp(1.7rem,4vw,4rem)] font-medium tracking-[-0.075em]">
              New York · Everywhere
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/55">
              An independent creative studio, working with good people wherever they are.
            </p>
          </div>
        </section>

        <section className="mt-16 bg-ink p-7 text-paper md:mt-24 md:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 eyebrow text-acid">Start a conversation</p>
              <p className="max-w-3xl text-[clamp(2rem,5vw,5rem)] leading-[0.98] tracking-[-0.075em]">
                Every good thing starts somewhere.
              </p>
            </div>
            <a
              href="mailto:hello@aura.studio"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-acid px-5 py-3 eyebrow text-ink transition-colors hover:bg-paper"
            >
              Write us a note <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
