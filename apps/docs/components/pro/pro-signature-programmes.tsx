"use client";

import { Award, Briefcase, Coffee, Compass, GraduationCap, MapPin, QrCode } from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

type ProProgrammeKey = "first90" | "crosspoints" | "coffee" | "lunch" | "crosslab" | "bridge";

const PRO_PROGRAMMES: Array<{
  key: ProProgrammeKey;
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: typeof Compass;
  accent: string;
}> = [
  {
    key: "first90",
    number: "01",
    name: "First 90 Pro",
    tagline: "Your first 90 days. Your cross-functional network.",
    description:
      "A structured enterprise onboarding journey from day one through the crucial first quarter. Bridges new hires across departmental silos into organic peer cohorts.",
    icon: Compass,
    accent: "text-pro",
  },
  {
    key: "crosspoints",
    number: "02",
    name: "Pro CrossPoints",
    tagline: "Scan in space. Unlock context. Cross paths with colleagues.",
    description:
      "Physical QR checkpoints situated in headquarters receptions, collaboration floors, and event venues. Unlocks team stories, project briefs, and coffee companions.",
    icon: QrCode,
    accent: "text-copper",
  },
  {
    key: "coffee",
    number: "03",
    name: "CrossCoffee & CrossWalk",
    tagline: "Low-pressure 1:1 conversations outside the conference room.",
    description:
      "Low-friction coffee catch-ups and 20-minute walking 1:1s between meetings, breaking down hierarchical barriers without rigid calendar friction.",
    icon: Coffee,
    accent: "text-pro",
  },
  {
    key: "lunch",
    number: "04",
    name: "Lunch Across Teams",
    tagline: "Dine with colleagues outside your reporting chain.",
    description:
      "Curated small-group lunch pods (3-4 people) matching individuals across Engineering, Design, Sales, and Ops based on shared interests or career questions.",
    icon: MapPin,
    accent: "text-copper",
  },
  {
    key: "crosslab",
    number: "05",
    name: "CrossLab Pro Challenges",
    tagline: "Solve interdisciplinary innovation challenges together.",
    description:
      "Internal hackathons and cross-functional problem sprints where cross-departmental teams solve strategic business challenges in timeboxed sessions.",
    icon: Award,
    accent: "text-pro",
  },
  {
    key: "bridge",
    number: "06",
    name: "Uni-to-Pro Bridge",
    tagline: "Bringing student networks and verified degrees into industry life.",
    description:
      "Graduates preserve university relationship circles and degree credentials into CircleCross Pro, establishing immediate credibility in target sectors.",
    icon: GraduationCap,
    accent: "text-copper",
  },
];

export function ProSignatureProgrammes() {
  const [selected, setSelected] = useState<ProProgrammeKey>("first90");
  const fallback = PRO_PROGRAMMES[0] ?? {
    key: "first90" as const,
    number: "01",
    name: "First 90 Pro",
    tagline: "Your first 90 days.",
    description: "Onboarding journey.",
    icon: Compass,
    accent: "text-pro",
  };
  const activeProgramme = PRO_PROGRAMMES.find((p) => p.key === selected) ?? fallback;

  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="programmes">
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>Signature Enterprise Initiatives</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Six initiatives engineered for <em>authentic collaboration.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Designed for modern enterprises, industry associations, and innovation precincts. Each
          initiative works with flexible work routines, multi-office campuses, and hybrid teams.
        </p>
      </div>

      {/* Sleek Floating Pill Tabs */}
      <div className="mt-14 flex flex-wrap gap-2.5 border-b border-line/80 pb-5" role="tablist">
        {PRO_PROGRAMMES.map((prog) => {
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
              <span className="text-[11px] font-[650] tracking-[0.08em] text-[#343547] uppercase">
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
          {selected === "first90" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                The 90-Day Enterprise Transition Arc
              </h4>
              <div className="mt-6 grid grid-cols-5 gap-6 border-t border-line/60 pt-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {[
                  {
                    step: "01",
                    color: "text-copper",
                    title: "Days 1–14",
                    desc: "Welcome buddy matching & cross-functional onboarding cohorts.",
                  },
                  {
                    step: "02",
                    color: "text-pro",
                    title: "Days 15–30",
                    desc: "Pro CrossPoints discovery and informal mentor introductions.",
                  },
                  {
                    step: "03",
                    color: "text-copper",
                    title: "Days 31–60",
                    desc: "Lunch Across Teams participation and interest circle discovery.",
                  },
                  {
                    step: "04",
                    color: "text-pro",
                    title: "Days 61–75",
                    desc: "CrossLab problem contributions and peer knowledge sharing.",
                  },
                  {
                    step: "05",
                    color: "text-copper",
                    title: "Days 76–90",
                    desc: "Full peer network autonomy and reciprocal mentoring.",
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
                Four Core Enterprise Checkpoint Archetypes
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    icon: Briefcase,
                    accent: "text-pro",
                    title: "The Reception & Hub Cross",
                    desc: "Welcomes visitors, contractor cohorts, and roaming employees with verified WiFi access and local workplace guides.",
                  },
                  {
                    icon: Coffee,
                    accent: "text-copper",
                    title: "The Cafe & Lounge Cross",
                    desc: "Facilitates casual 1:1 catchups, impromptu coffee chats, and spontaneous team meetups.",
                  },
                  {
                    icon: Award,
                    accent: "text-pro",
                    title: "The Innovation Lab Cross",
                    desc: "Showcases active internal experiments, open RFCs, and collaborative project needs across business units.",
                  },
                  {
                    icon: MapPin,
                    accent: "text-copper",
                    title: "The Summit & Event Cross",
                    desc: "Transforms offsites, town halls, and industry summits into dynamic networking zones.",
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

          {selected === "coffee" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Low-Friction 1:1 Connection Formats
              </h4>
              <div className="mt-6 grid grid-cols-3 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    title: "CrossCoffee 1:1",
                    desc: "20-minute, mutual opt-in coffee pairings around shared professional interests or problem solving.",
                  },
                  {
                    title: "CrossWalk Meetings",
                    desc: "Walking conversations in nearby parks or precincts, replacing sedentary screen-share meetings.",
                  },
                  {
                    title: "Second Hello Follow-Up",
                    desc: "Effortless, low-pressure reconnection loops after an all-hands, conference, or committee presentation.",
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

          {selected === "lunch" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Cross-Departmental Dining Architecture
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                <div className="border-l-2 border-copper pl-4">
                  <span className="text-[10px] font-[650] text-copper uppercase">
                    Curated Small-Group Pods
                  </span>
                  <h5 className="mt-1 text-sm font-[650] text-ink">Lunch Across Teams</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Matches 3-4 colleagues from unrelated departments for casual lunches,
                    eliminating clique behavior and cultivating cross-functional empathy.
                  </p>
                </div>
                <div className="border-l-2 border-pro pl-4">
                  <span className="text-[10px] font-[650] text-pro uppercase">
                    Open Table Topics
                  </span>
                  <h5 className="mt-1 text-sm font-[650] text-ink">Topic Dining Tables</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-[#343547]">
                    Weekly informal lunch tables hosted on designated themes (e.g. AI Workflow
                    Experiments, Sustainable Practices, or Working Parent Circles).
                  </p>
                </div>
              </div>
            </div>
          )}

          {selected === "crosslab" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Collaborative Problem-Solving Frameworks
              </h4>
              <div className="mt-6 grid grid-cols-3 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                {[
                  {
                    title: "Interdisciplinary Sprints",
                    desc: "Timeboxed 2-day challenges where Product, Design, Sales, and Ops tackle thorny strategic customer roadblocks.",
                  },
                  {
                    title: "Skill Exchange Clinics",
                    desc: "Peer-led masterclasses where colleagues teach practical tools (e.g. Figma prototyping, SQL basics, storytelling).",
                  },
                  {
                    title: "Open Mentorship Hours",
                    desc: "Senior leaders host open-door collaborative mentoring hours without rigid formal reporting relationships.",
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

          {selected === "bridge" && (
            <div className="mt-10 border-t border-line/70 pt-8">
              <h4 className="text-xs font-[650] tracking-[0.08em] text-ink uppercase">
                Lifelong Career Capital Architecture
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line/60 pt-6 max-md:grid-cols-1">
                <div className="border-l-2 border-pro pl-4">
                  <h5 className="text-sm font-[650] text-ink">University-to-Industry Continuity</h5>
                  <p className="mt-2 text-xs leading-[1.7] text-[#343547]">
                    Preserves verified student cohorts, honors research ties, and project
                    collaborators into corporate networks without restarting from zero.
                  </p>
                </div>
                <div className="border-l-2 border-copper pl-4">
                  <h5 className="text-sm font-[650] text-ink">
                    Independent Professional Sovereignty
                  </h5>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">
                    Your graph remains your personal intellectual capital across company moves.
                    Employers provide corporate context, but you own your relationships forever.
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
