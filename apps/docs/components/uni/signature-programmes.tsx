"use client";

import { BookOpen, Coffee, Compass, GraduationCap, MapPin, QrCode, Sparkles } from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, hSubsection, pageInset, pyDense } from "../styles";

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
    <section className={`${pageInset} ${pyDense} border-t border-border`} id="programmes">
      <div className="max-w-[720px]">
        <p className={eyebrow}>Signature Initiatives</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Six programmes built for <em>real-world connection.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Designed specifically for Australian and global higher education. Each programme works
          with your existing timetable, campus geography, and student associations.
        </p>
      </div>

      {/* Programme Tabs */}
      <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-4" role="tablist">
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
              className={`flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs font-[500] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
                isActive
                  ? "bg-ink text-paper shadow-sm"
                  : "border border-line bg-paper text-soft hover:bg-[#e8e4d8] hover:text-ink"
              }`}
            >
              <Icon className="size-3.5" aria-hidden="true" />
              <span>{prog.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Programme Detail Showcase */}
      <div className="mt-10 rounded-[22px] border border-line bg-white/50 p-10 max-md:p-6">
        <div className="flex items-center justify-between border-b border-line/60 pb-6 max-md:flex-col max-md:items-start max-md:gap-3">
          <div>
            <span className="text-xs font-[600] tracking-[0.08em] text-[#373d2b] uppercase">
              Programme {activeProgramme.number}
            </span>
            <h3 className={`${hSubsection} mt-1 text-ink`}>{activeProgramme.name}</h3>
          </div>
          <p className="max-w-[32ch] text-sm font-[450] italic text-soft max-md:text-xs">
            "{activeProgramme.tagline}"
          </p>
        </div>

        <p className="mt-6 max-w-[65ch] text-base leading-[1.8] text-soft max-md:text-sm">
          {activeProgramme.description}
        </p>

        {/* Dynamic Detailed Content Based on Active Programme */}
        {selected === "first50" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              The 50-Day Transition Journey
            </h4>
            <div className="mt-6 grid grid-cols-5 gap-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-4">
                <span className="text-[10px] font-[600] text-copper uppercase">Stage 01</span>
                <h5 className="mt-1 text-xs font-[550] text-ink">Before Arrival</h5>
                <p className="mt-2 text-[11px] leading-[1.6] text-soft">
                  Academic identity, course interests, and pre-arrival orientation recommendations.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-4">
                <span className="text-[10px] font-[600] text-olive uppercase">Stage 02</span>
                <h5 className="mt-1 text-xs font-[550] text-ink">O-Week</h5>
                <p className="mt-2 text-[11px] leading-[1.6] text-soft">
                  CrossPoints check-ins, CrossQuest team trails, official events & companions.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-4">
                <span className="text-[10px] font-[600] text-copper uppercase">Stage 03</span>
                <h5 className="mt-1 text-xs font-[550] text-ink">Weeks 1–2</h5>
                <p className="mt-2 text-[11px] leading-[1.6] text-soft">
                  Unit Circles, Skill Circle cohorts, clubs & PASS study group discovery.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-4">
                <span className="text-[10px] font-[600] text-olive uppercase">Stage 04</span>
                <h5 className="mt-1 text-xs font-[550] text-ink">Weeks 3–5</h5>
                <p className="mt-2 text-[11px] leading-[1.6] text-soft">
                  Second Hello re-connections, SkillSwap sessions, and extracurricular project
                  teams.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-4">
                <span className="text-[10px] font-[600] text-copper uppercase">Stage 05</span>
                <h5 className="mt-1 text-xs font-[550] text-ink">Weeks 6–7</h5>
                <p className="mt-2 text-[11px] leading-[1.6] text-soft">
                  Fresh Start pathways, continuing community rituals, and voluntary experience
                  feedback.
                </p>
              </div>
            </div>
          </div>
        )}

        {selected === "crosspoints" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              Four Core CrossPoint Checkpoint Types
            </h4>
            <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-olive/15 text-olive">
                    <MapPin className="size-3.5" />
                  </span>
                  <h5 className="text-sm font-[550] text-ink">The Social Cross (Campus Centre)</h5>
                </div>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Introduces student association services, active clubs, volunteer groups, and open
                  social tables.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-copper/15 text-copper">
                    <BookOpen className="size-3.5" />
                  </span>
                  <h5 className="text-sm font-[550] text-ink">The Knowledge Cross (Libraries)</h5>
                </div>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Highlights academic research collections, peer consultation hours, and
                  collaborative discovery puzzles.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-olive/15 text-olive">
                    <Sparkles className="size-3.5" />
                  </span>
                  <h5 className="text-sm font-[550] text-ink">
                    The Discovery Cross (Faculty & Makerspaces)
                  </h5>
                </div>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Features cutting-edge faculty research, lab facilities, and interdisciplinary
                  CrossLab challenges.
                </p>
              </div>

              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-copper/15 text-copper">
                    <Coffee className="size-3.5" />
                  </span>
                  <h5 className="text-sm font-[550] text-ink">The Food Cross (Campus Dining)</h5>
                </div>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Hosts casual lunch circles, coffee meetups, and verified merchant offers approved
                  by the university.
                </p>
              </div>
            </div>
          </div>
        )}

        {selected === "study" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              Academic Collaboration Architecture
            </h4>
            <div className="mt-6 grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">CourseMates & Unit Circles</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Opt-in communities for specific subjects that continue across semesters without
                  cluttering LMS teaching spaces.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">Study Match & Study Now</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Matches compatible peers by study goals, schedule, and preferred study silence,
                  with spontaneous Study Now beacons in public study zones.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">PASS Companion Discovery</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Students discover classmates voluntarily attending official PASS sessions without
                  duplicating facilitators or curriculum.
                </p>
              </div>
            </div>
          </div>
        )}

        {selected === "skills" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              Skill Building & Peer Exchange
            </h4>
            <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <span className="text-[10px] font-[600] text-copper uppercase">
                  Accredited Short Courses
                </span>
                <h5 className="mt-1 text-sm font-[550] text-ink">Skill Circle</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Aggregates authorised training for RSA, Barista, First Aid, and Food Safety.
                  Enrolment stays with official providers while CircleCross forms practice cohorts.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <span className="text-[10px] font-[600] text-olive uppercase">
                  Peer-to-Peer Trades
                </span>
                <h5 className="mt-1 text-sm font-[550] text-ink">SkillSwap</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Students trade non-regulated skills in structured mutual sessions: Photography for
                  Python, Public Speaking for Graphic Design, or Language Practice for Excel.
                </p>
              </div>
            </div>
          </div>
        )}

        {selected === "encounters" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              Everyday Campus Connection
            </h4>
            <div className="mt-6 grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">Second Hello</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Structured, low-pressure follow-up mechanisms after an initial orientation, club,
                  or faculty meeting.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">The 30-Minute Cross</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Short, repeatable activities (campus photography walks, quick logic puzzles)
                  calibrated for timetable breaks.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">Fresh Start</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Year-round social re-onboarding for transfers, exchange students, and returning
                  cohorts who missed O-Week.
                </p>
              </div>
            </div>
          </div>
        )}

        {selected === "alumni" && (
          <div className="mt-10 border-t border-line/60 pt-8">
            <h4 className="text-xs font-[600] tracking-[0.08em] text-ink uppercase">
              Lifelong Connection Architecture
            </h4>
            <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">Graduation Circles</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Allows student-era friendship and project circles to persist into alumni life
                  without being cut off when university email access expires.
                </p>
              </div>
              <div className="rounded-[12px] border border-line/70 bg-paper p-5">
                <h5 className="text-sm font-[550] text-ink">University Bridge to Pro</h5>
                <p className="mt-2 text-xs leading-[1.7] text-soft">
                  Selective, user-governed transfer of verified credentials and trusted
                  relationships directly into CircleCross Pro.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
