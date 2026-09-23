"use client";

import { BookOpen, Coffee, Compass, GraduationCap, MapPin, QrCode, Sparkles } from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

type ProgrammeKey = "first50" | "crosspoints" | "study" | "skills" | "encounters" | "alumni";

const PROGRAMMES: Array<{
  key: ProgrammeKey;
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: typeof Compass;
  accent: string;
}> = [
  {
    key: "first50",
    number: "01",
    name: "CircleCross First 50",
    tagline: "Your first 50 days. Your first real connections.",
    description:
      "A university-supported onboarding journey from pre-arrival through the first seven weeks. Extends orientation far beyond O-Week into lasting academic and social belonging.",
    icon: Compass,
    accent: "text-olive",
  },
  {
    key: "crosspoints",
    number: "02",
    name: "CrossPoints & CrossQuest",
    tagline: "Discover a place. Unlock an experience. Cross paths with someone new.",
    description:
      "Approved physical QR checkpoints at campus landmarks (Campus Centre, Libraries, Faculty Hubs) turning physical locations into interactive stories, team challenges, and service referrals.",
    icon: QrCode,
    accent: "text-copper",
  },
  {
    key: "study",
    number: "03",
    name: "Unit Circles & Study Match",
    tagline: "Study with people who get your units.",
    description:
      "Opt-in peer communities for degrees, majors, and specific units. Find study partners based on study habits, host spontaneous Study Now sessions, and discover companions for official PASS sessions.",
    icon: BookOpen,
    accent: "text-olive",
  },
  {
    key: "skills",
    number: "04",
    name: "Skill Circle & SkillSwap",
    tagline: "Learn something useful. Meet people doing the same.",
    description:
      "Form cohorts around practical short courses (RSA, barista, first aid, public speaking, code), plus structured peer-to-peer trades of non-regulated skills.",
    icon: Sparkles,
    accent: "text-copper",
  },
  {
    key: "encounters",
    number: "05",
    name: "Second Hello & 30-Min Cross",
    tagline: "Low-pressure reconnection that fits real campus routines.",
    description:
      "Facilitates follow-up coffee after an initial event, short 30-minute collaborative activities between classes, commute circles, and quiet social spaces.",
    icon: Coffee,
    accent: "text-olive",
  },
  {
    key: "alumni",
    number: "06",
    name: "University Bridge & Alumni",
    tagline: "Preserving student relationships into lifelong professional ties.",
    description:
      "Student circles transition into Graduation Circles. Consenting graduates carry chosen relationships and verified credentials smoothly into CircleCross Pro.",
    icon: GraduationCap,
    accent: "text-copper",
  },
];

export function SignatureProgrammes() {
  const [selected, setSelected] = useState<ProgrammeKey>("first50");
  const fallback = PROGRAMMES[0] ?? {
    key: "first50" as const,
    number: "01",
    name: "CircleCross First 50",
    tagline: "Your first 50 days.",
    description: "Onboarding journey.",
    icon: Compass,
    accent: "text-olive",
  };
  const activeProgramme = PROGRAMMES.find((p) => p.key === selected) ?? fallback;

  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="programmes">
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>Signature Initiatives</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Six programmes engineered for <em>meaningful connection.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Designed specifically for Australian and global higher education. Each programme works
          with existing academic timetables, campus precincts, and faculty communities.
        </p>
      </div>

      {/* Sleek Floating Pill Tabs */}
      <div className="mt-14 flex flex-wrap gap-2.5 border-b border-line/80 pb-5" role="tablist">
        {PROGRAMMES.map((prog) => {
          const isActive = prog.key === selected;
          const Icon = prog.icon;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              key={prog.key}
              onClick={() => setSelected(prog.key)}
              className={`group flex items-center gap-2.5 rounded-full px-4.5 py-2.5 text-xs font-[550] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper active:scale-[0.98] ${
                isActive
                  ? "bg-ink text-paper shadow-md"
                  : "border border-line bg-paper text-soft hover:border-ink/20 hover:bg-[#eae5da] hover:text-ink"
              }`}
            >
              <Icon
                className={`size-3.5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                aria-hidden="true"
              />
              <span>{prog.name}</span>
            </button>
          );
        })}
      </div>

      {/* Single Clean Editorial Stage (Zero Card Inception) */}
      <div className="mt-10 rounded-[2.25rem] bg-black/5 p-1.5 ring-1 ring-black/5">
        <div className="rounded-[calc(2.25rem-0.375rem)] bg-paper p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
          <div className="flex items-center justify-between border-b border-line/70 pb-6 max-md:flex-col max-md:items-start max-md:gap-3">
            <div>
              <span className="text-[11px] font-[650] tracking-[0.08em] text-[#343a29] uppercase">
                Initiative Architecture {activeProgramme.number}
              </span>
              <h3 className={`${hSubsection} mt-1 text-ink`}>{activeProgramme.name}</h3>
            </div>
            <p className="max-w-[34ch] text-sm font-[450] italic text-soft max-md:text-xs">
              "{activeProgramme.tagline}"
            </p>
          </div>

          <p className="mt-6 max-w-[68ch] text-base leading-[1.8] text-soft max-md:text-sm">
            {activeProgramme.description}
          </p>

          {/* Dynamic Content Ribbon Without Nested Cards */}
          {selected === "first50" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                The 50-Day Transition Journey
              </h4>
              <div className="mt-6 grid grid-cols-5 gap-6 border-t border-line/60 pt-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {[
                  {
                    step: "01",
                    color: "text-copper",
                    title: "Before Arrival",
                    desc: "Academic identity, degree cohorts, and pre-arrival recommendations.",
                  },
                  {
                    step: "02",
                    color: "text-olive",
                    title: "O-Week",
                    desc: "CrossPoints check-ins, team quests, official events & companions.",
                  },
                  {
                    step: "03",
                    color: "text-copper",
                    title: "Weeks 1–2",
                    desc: "Unit Circles, study groups, clubs & PASS discovery.",
                  },
                  {
                    step: "04",
                    color: "text-olive",
                    title: "Weeks 3–5",
                    desc: "Second Hello reconnections and peer skill swaps.",
                  },
                  {
                    step: "05",
                    color: "text-copper",
                    title: "Weeks 6–7",
                    desc: "Continuing rituals and mid-semester study circles.",
                  },
                ].map((s) => (
                  <div key={s.step} className="border-l border-line pl-3.5">
                    <span className={`text-xs font-mono font-[650] ${s.color}`}>{s.step}</span>
                    <h5 className="mt-1 text-xs font-[650] text-ink">{s.title}</h5>
                    <p className="mt-1.5 text-xs leading-[1.65] text-soft">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selected === "crosspoints" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Four Core Campus Landmark Checkpoints
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    icon: MapPin,
                    accent: "text-olive",
                    title: "The Social Cross (Campus Centre)",
                    desc: "Introduces student association services, active clubs, volunteer groups, and open communal study tables.",
                  },
                  {
                    icon: BookOpen,
                    accent: "text-copper",
                    title: "The Knowledge Cross (Libraries)",
                    desc: "Highlights academic research collections, peer consultation hours, and collaborative discovery puzzles.",
                  },
                  {
                    icon: Sparkles,
                    accent: "text-olive",
                    title: "The Discovery Cross (Faculty & Makerspaces)",
                    desc: "Features cutting-edge faculty research, lab facilities, and interdisciplinary CrossLab challenges.",
                  },
                  {
                    icon: Coffee,
                    accent: "text-copper",
                    title: "The Food Cross (Campus Dining)",
                    desc: "Hosts casual lunch circles, coffee meetups, and verified merchant offers approved by the university.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 grid size-8 place-items-center rounded-full bg-black/5 ${item.accent}`}
                      >
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <h5 className="text-sm font-[650] text-ink">{item.title}</h5>
                        <p className="mt-1.5 text-xs leading-[1.7] text-soft">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {selected === "study" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Academic Collaboration Architecture
              </h4>
              <div className="mt-6 grid grid-cols-3 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    title: "CourseMates & Unit Circles",
                    desc: "Opt-in communities for specific subjects that continue across semesters without cluttering LMS teaching spaces.",
                  },
                  {
                    title: "Study Match & Study Now",
                    desc: "Matches compatible peers by study goals, schedule, and preferred study silence, with spontaneous Study Now beacons in libraries.",
                  },
                  {
                    title: "PASS Companion Discovery",
                    desc: "Students discover classmates voluntarily attending official PASS sessions without duplicating facilitators or curriculum.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l border-line pl-4">
                    <h5 className="text-sm font-[650] text-ink">{item.title}</h5>
                    <p className="mt-2 text-xs leading-[1.7] text-soft">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selected === "skills" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Skill Building & Peer Exchange
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                <div className="border-l-2 border-copper pl-4">
                  <span className="text-[10px] font-[650] text-copper uppercase">
                    Accredited Short Courses
                  </span>
                  <h5 className="mt-1 text-sm font-[650] text-ink">Skill Circle</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Aggregates authorised training for RSA, Barista, First Aid, and Food Safety.
                    Official enrolment stays with providers while CircleCross forms practice
                    cohorts.
                  </p>
                </div>
                <div className="border-l-2 border-olive pl-4">
                  <span className="text-[10px] font-[650] text-olive uppercase">
                    Peer-to-Peer Trades
                  </span>
                  <h5 className="mt-1 text-sm font-[650] text-ink">SkillSwap</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Students trade non-regulated skills in structured mutual sessions: Photography
                    for Python, Public Speaking for Graphic Design, or Language Practice for Excel.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selected === "encounters" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Everyday Campus Connection
              </h4>
              <div className="mt-6 grid grid-cols-3 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    title: "Second Hello",
                    desc: "Structured, low-pressure follow-up mechanisms after an initial orientation, club, or faculty meeting.",
                  },
                  {
                    title: "The 30-Minute Cross",
                    desc: "Short, repeatable activities (campus photography walks, quick logic puzzles) calibrated for timetable breaks.",
                  },
                  {
                    title: "Fresh Start",
                    desc: "Year-round social re-onboarding for transfers, exchange students, and returning cohorts who missed O-Week.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l border-line pl-4">
                    <h5 className="text-sm font-[650] text-ink">{item.title}</h5>
                    <p className="mt-2 text-xs leading-[1.7] text-soft">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selected === "alumni" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Lifelong Connection Architecture
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                <div className="border-l-2 border-olive pl-4">
                  <h5 className="text-sm font-[650] text-ink">Graduation Circles</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Allows student-era friendship and project circles to persist into alumni life
                    without being severed when university email access expires.
                  </p>
                </div>
                <div className="border-l-2 border-copper pl-4">
                  <h5 className="text-sm font-[650] text-ink">University Bridge to Pro</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Selective, user-governed transfer of verified credentials and trusted
                    relationships directly into CircleCross Pro.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
