"use client";

import { Coffee, Compass, GraduationCap, QrCode } from "lucide-react";
import { hHero, pageInset } from "../styles";
import { Arrow } from "../ui";
import { ProWorld } from "./scene/pro-world";

const PRO_HORIZON_POINTS = [
  {
    icon: Compass,
    title: "First 90 Pro",
    caption: "Cross-functional onboarding journey",
    accent: "text-pro",
  },
  {
    icon: QrCode,
    title: "Pro CrossPoints",
    caption: "Workplace & hub presence without tracking",
    accent: "text-copper",
  },
  {
    icon: Coffee,
    title: "CrossCoffee & Lunch",
    caption: "Serendipitous cross-team connections",
    accent: "text-pro",
  },
  {
    icon: GraduationCap,
    title: "Uni-to-Pro Bridge",
    caption: "Lifelong sovereign career graph",
    accent: "text-copper",
  },
];

export function ProHero() {
  return (
    <section
      className={`${pageInset} relative isolate overflow-hidden pt-[145px] pb-20 max-md:pt-[115px] max-md:pb-14`}
      id="hero"
    >
      {/* 3D Executive Synapse Lattice */}
      <ProWorld />

      {/* Cinematic 2-Line Heading */}
      <h1
        className={`${hHero} relative z-[2] mt-8 mb-6 max-w-[15ch] min-[1400px]:max-w-[17ch] text-[clamp(44px,6.2vw,96px)] leading-[1.08] tracking-[-0.04em]`}
      >
        The relationship layer for <em>professional life.</em>
      </h1>

      <p className="relative z-[2] max-w-[34ch] text-[clamp(22px,2.6vw,36px)] leading-[1.24] tracking-[-0.035em] text-[#30313f]">
        Discover colleagues, mentors, collaborators, and opportunities through trusted context and
        consent-based real-world experiences.
      </p>

      <p className="relative z-[2] mt-7 max-w-[58ch] text-base leading-[1.8] text-soft max-md:text-sm">
        ConnectOS wraps around official HRIS, Microsoft Teams, Slack, learning platforms, and
        industry conferences. It connects initial introductions into lasting, voluntary
        relationships — with the individual, not their employer, in full sovereignty over their
        career graph.
      </p>

      {/* Button-in-Button Action CTAs */}
      <div className="relative z-[2] mt-10 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-stretch">
        <a
          href="#programmes"
          className="group inline-flex items-center justify-between gap-4 rounded-full bg-ink px-6 py-3.5 text-xs font-[550] tracking-[0.04em] text-paper shadow-[0_4px_20px_rgba(41,42,36,0.15)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#383a31] active:scale-[0.98]"
        >
          <span>Explore Signature Programmes</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px] group-hover:scale-105">
            <Arrow />
          </span>
        </a>

        <a
          href="#connectos"
          className="group inline-flex items-center justify-between gap-4 rounded-full border border-line bg-paper/90 px-6 py-3.5 text-xs font-[550] tracking-[0.04em] text-ink shadow-[0_2px_10px_rgba(41,42,36,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#ebe6db] active:scale-[0.98]"
        >
          <span>How ConnectOS Integrates</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px] group-hover:scale-105">
            <Arrow diagonal />
          </span>
        </a>
      </div>

      {/* Card-Free Editorial Horizon Strip */}
      <div className="relative z-[2] mt-16 grid grid-cols-4 gap-8 border-t border-line/80 pt-10 max-[1100px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
        {PRO_HORIZON_POINTS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-3.5">
              <span
                className={`mt-0.5 grid size-7 place-items-center rounded-full bg-black/5 ${item.accent}`}
              >
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xs font-[650] tracking-[0.04em] text-ink uppercase">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-soft">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
