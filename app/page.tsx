import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import WorkRail from "@/components/WorkRail";

function OrbitMark() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className="h-full w-full"
      aria-label="Aura orbit mark"
      role="img"
    >
      <circle cx="120" cy="120" r="95" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="120" cy="120" r="67" stroke="currentColor" strokeWidth="0.7" />
      <ellipse
        cx="120"
        cy="120"
        rx="104"
        ry="42"
        stroke="currentColor"
        strokeWidth="0.7"
        transform="rotate(-42 120 120)"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="104"
        ry="42"
        stroke="currentColor"
        strokeWidth="0.7"
        transform="rotate(42 120 120)"
      />
      <circle cx="120" cy="120" r="18" fill="currentColor" />
      <circle cx="40" cy="76" r="5" fill="#d8ff3e" />
      <circle cx="198" cy="85" r="4" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div id="top" className="overflow-hidden">
      <section className="relative mx-5 mt-5 min-h-[690px] overflow-hidden bg-ink text-paper md:mx-10 md:mt-8 md:min-h-[min(760px,82vh)]">
        <div className="hero-orb grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        <div className="relative z-10 flex min-h-[690px] flex-col justify-between p-6 md:min-h-[min(760px,82vh)] md:p-10">
          <div className="flex items-start justify-between">
            <p className="eyebrow max-w-[190px] leading-relaxed text-white/65">
              Independent creative studio
              <br />
              Identity · Digital · Direction
            </p>
            <span className="eyebrow hidden text-right text-white/65 md:block">
              Design for
              <br />
              a world in motion
            </span>
          </div>

          <div className="relative flex flex-1 items-center">
            <div className="pointer-events-none absolute right-[2%] top-[12%] h-[min(48vw,480px)] w-[min(48vw,480px)] opacity-70 md:right-[8%] md:top-[2%]">
              <OrbitMark />
            </div>
            <div className="relative z-10 -mt-2">
              <p className="mb-5 eyebrow text-acid md:mb-8">We make what moves you.</p>
              <h1 className="hero-title">
                Make
                <br />
                <span className="ml-[12vw] text-white/90 md:ml-[12vw]">some</span>
                <br />
                <span className="text-acid">wonder.</span>
              </h1>
            </div>
            <a
              href="#work"
              aria-label="Scroll to selected work"
              className="absolute bottom-1 right-0 z-10 grid h-14 w-14 place-items-center rounded-full border border-white/35 transition-colors hover:bg-acid hover:text-ink md:bottom-4 md:right-2"
            >
              <ArrowDown size={19} />
            </a>
          </div>

          <div className="flex items-end justify-between border-t border-white/20 pt-4">
            <p className="max-w-[220px] text-xs leading-relaxed text-white/70 md:text-sm">
              A design practice building distinct brands &amp; digital experiences.
            </p>
            <span className="eyebrow text-white/60">Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 pt-24 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-[1fr_1.7fr]">
          <p className="eyebrow flex items-start gap-2 text-black/55">
            <span className="mt-1 h-2 w-2 rounded-full bg-acid ring-1 ring-black/10" />
            The short version
          </p>
          <div>
            <p className="max-w-[950px] text-[clamp(2rem,4.2vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.075em]">
              We bring big ideas to life with <span className="text-black/35">clarity,</span>{" "}
              <span className="text-black/35">feeling</span> and a little bit of{" "}
              <span className="text-black/35">the unexpected.</span>
            </p>
            <a href="#studio" className="mt-8 inline-flex items-center gap-2 eyebrow">
              Get to know us <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-8 pb-24 pt-9 md:pb-36">
        <div className="mb-9 flex items-end justify-between px-5 md:mb-12 md:px-10">
          <div>
            <p className="mb-4 eyebrow text-black/50">A few recent favorites · 2024—25</p>
            <h2 className="section-title">Selected work<span className="text-black/30">.</span></h2>
          </div>
          <span className="hidden pb-2 eyebrow text-black/45 md:block">Drag or scroll →</span>
        </div>
        <WorkRail />
        <div className="mt-8 flex justify-center px-5 md:mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-black/25 px-5 py-3 eyebrow transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            Explore all selected work <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section id="studio" className="px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="eyebrow text-black/55">A small studio with a wide lens</p>
            <p className="eyebrow text-black/45">01—03 / What we bring</p>
          </div>
          <div className="grid auto-rows-[230px] gap-3 md:grid-cols-12 md:auto-rows-[270px] md:gap-4">
            <div className="relative flex flex-col justify-between overflow-hidden bg-ink p-6 text-paper md:col-span-5 md:row-span-2 md:p-9">
              <div className="absolute -bottom-16 -right-10 h-64 w-64 text-white/15 md:h-80 md:w-80">
                <OrbitMark />
              </div>
              <span className="eyebrow relative z-10 text-acid">01 / The point of view</span>
              <div className="relative z-10">
                <p className="max-w-[460px] text-[clamp(2rem,4vw,4rem)] leading-[0.98] tracking-[-0.08em]">
                  Good work should make you <span className="text-acid">feel something.</span>
                </p>
                <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/60">
                  We chase the useful, the beautiful, and the ideas that sit somewhere between.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#e8e4da] p-6 md:col-span-4 md:p-8">
              <span className="eyebrow text-black/50">02 / The sweet spot</span>
              <div>
                <span className="mb-3 block text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.09em]">
                  Small<span className="text-black/30">+</span>
                </span>
                <p className="max-w-[250px] text-sm leading-relaxed text-black/60">
                  Senior minds, sleeves rolled up. Personal by design, ambitious by nature.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col justify-between overflow-hidden bg-lavender p-6 md:col-span-3 md:row-span-2 md:p-8">
              <span className="eyebrow">03 / A little momentum</span>
              <div className="relative mx-auto my-2 aspect-square w-[min(40vw,240px)] text-ink/75 md:w-full">
                <OrbitMark />
              </div>
              <p className="max-w-[200px] text-sm leading-relaxed">
                Strategy, identity, digital. One curious team, from first thought to final pixel.
              </p>
            </div>
            <div className="flex items-end justify-between bg-acid p-6 md:col-span-4 md:p-8">
              <div>
                <span className="mb-3 block eyebrow">Good people. Better questions.</span>
                <p className="max-w-[280px] text-[clamp(1.6rem,2.6vw,2.6rem)] font-medium leading-[1] tracking-[-0.07em]">
                  Ready when you are.
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink">
                <MoveUpRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink px-5 py-20 text-paper md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-6 eyebrow text-acid">Have a good one in mind?</p>
              <h2 className="section-title max-w-4xl text-[clamp(3.5rem,9vw,9rem)]">
                Let’s make
                <br />
                <span className="text-white/40">it matter.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-4 border-b border-white/40 pb-3 text-xl tracking-[-0.05em] transition-colors hover:border-acid hover:text-acid md:text-2xl"
            >
              Start a conversation <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.13em] text-white/55 md:flex-row">
            <span>© AURA® Studio 2025</span>
            <span>Independent by nature. Connected everywhere.</span>
            <a href="#top" className="hover:text-paper">
              Back to the top ↑
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
