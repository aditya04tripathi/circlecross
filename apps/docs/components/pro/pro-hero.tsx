"use client";

import { Coffee, Compass, GraduationCap, QrCode } from "lucide-react";
import { hHero, pageInset } from "../styles";
import { Arrow } from "../ui";
import { ProWorld } from "./scene/pro-world";

const PILLARS = [
  {
    icon: Compass,
    title: "First 90 Pro",
    desc: "A 90-day connection journey for new starters and team transitions, bridging cross-functional silos across departments.",
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    icon: QrCode,
    title: "Pro CrossPoints",
    desc: "QR checkpoints in reception, innovation hubs, and event zones revealing opt-in activities without employee tracking.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    icon: Coffee,
    title: "CrossCoffee & Lunch",
    desc: "Curated small-group lunches and walking 1:1 conversations between meetings to dismantle corporate silos.",
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    icon: GraduationCap,
    title: "Uni-to-Pro Bridge",
    desc: "Seamless transition for graduates preserving student circles into verified alumni and enduring industry networks.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

export function ProHero() {
  return (
    <section
      className={`${pageInset} relative isolate overflow-hidden pt-[145px] pb-24 max-md:pt-[115px] max-md:pb-16`}
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

      {/* Double-Bezel Hardware Enclosure Pillar Grid */}
      <div className="relative z-[2] mt-16 grid grid-cols-4 gap-4 border-t border-line/80 pt-12 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {PILLARS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="rounded-[1.75rem] bg-black/5 p-1.5 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between rounded-[calc(1.75rem-0.375rem)] bg-paper/90 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-8 place-items-center rounded-full ${p.bgAccent} ${p.accent}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h2 className="text-xs font-[600] tracking-[0.06em] text-ink uppercase">
                      {p.title}
                    </h2>
                  </div>
                  <p className="mt-3 text-xs leading-[1.7] text-soft">{p.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
