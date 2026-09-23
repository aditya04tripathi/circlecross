"use client";

import { Compass, QrCode, Sparkles, Users } from "lucide-react";
import { hHero, pageInset } from "../styles";
import { Arrow } from "../ui";
import { UniWorld } from "./scene/uni-world";

const HORIZON_POINTS = [
  {
    icon: Compass,
    title: "First 50 Journey",
    caption: "Pre-arrival through Week 7",
    accent: "text-olive",
  },
  {
    icon: QrCode,
    title: "CrossPoints",
    caption: "Physical QR campus landmark trails",
    accent: "text-copper",
  },
  {
    icon: Users,
    title: "Unit Circles",
    caption: "Opt-in peer study & PASS companions",
    accent: "text-olive",
  },
  {
    icon: Sparkles,
    title: "Skill Circles",
    caption: "Certified cohorts & peer skill swaps",
    accent: "text-copper",
  },
];

export function UniHero() {
  return (
    <section
      className={`${pageInset} relative isolate overflow-hidden pt-[145px] pb-20 max-md:pt-[115px] max-md:pb-14`}
      id="hero"
    >
      {/* 3D Campus Constellation Experience */}
      <UniWorld />

      {/* Cinematic 2-Line Heading (3/4 Width) */}
      <h1
        className={`${hHero} relative z-[2] mt-8 mb-6 w-full lg:w-3/4 max-w-5xl text-[clamp(44px,6.2vw,96px)] leading-[1.08] tracking-[-0.04em]`}
      >
        The relationship and <em>participation layer</em> for university life.
      </h1>

      <p className="relative z-[2] w-full lg:w-3/4 max-w-4xl text-[clamp(22px,2.6vw,36px)] leading-[1.24] tracking-[-0.035em] text-[#35392e]">
        Students discover institutional opportunities, participate in real-world experiences, and
        voluntarily return to participate again.
      </p>

      <p className="relative z-[2] mt-7 max-w-[58ch] text-base leading-[1.8] text-soft max-md:text-sm">
        ConnectOS wraps around official university systems — from orientation and peer mentoring to
        LMS units, PASS, campus landmarks, skills training, and alumni networks. It turns
        institutional silos into real-world belonging without social surveillance.
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
        {HORIZON_POINTS.map((item) => {
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
