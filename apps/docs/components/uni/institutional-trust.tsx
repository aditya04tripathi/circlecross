"use client";

import {
  Award,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
  PieChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

const PACKAGES = [
  {
    id: "welcome",
    name: "CircleCross Welcome",
    focus: "O-Week to Week 7 Transition",
    description:
      "Includes First 50 journey, orientation companions, CrossPoints landmark checkpoints, and CrossQuest team challenges.",
    value: "Increases orientation reach and keeps students engaged well past Week 1.",
    icon: Compass,
    accent: "text-olive",
  },
  {
    id: "connect",
    name: "CircleCross Connect",
    focus: "Belonging & Academic Identity",
    description:
      "Academic classification, Unit Circles, Study Match, consent-based messaging, and continuing friendship circles.",
    value: "Combats student isolation and supports persistent cohort retention.",
    icon: Users,
    accent: "text-copper",
  },
  {
    id: "campus",
    name: "CircleCross Campus",
    focus: "Student Life & Societies",
    description:
      "Verified club profiles, event companions, volunteer discovery, interclub collaborations, and Campus Pulse.",
    value: "Drives foot traffic and attendance to existing university and club activities.",
    icon: Layers,
    accent: "text-olive",
  },
  {
    id: "skills",
    name: "CircleCross Skills",
    focus: "Employability & Training",
    description:
      "Skill Circle short course cohorts (RSA, Barista, First Aid), SkillSwap peer exchanges, and verified credentials.",
    value: "Connects students with university and student union training investments.",
    icon: Award,
    accent: "text-copper",
  },
  {
    id: "alumni",
    name: "CircleCross Alumni",
    focus: "Lifelong Community",
    description:
      "Graduation Circles, alumni mentor discovery, career transition pathways, and the University Bridge to CircleCross Pro.",
    value: "Extends voluntary engagement beyond graduation without losing connection cohorts.",
    icon: GraduationCap,
    accent: "text-olive",
  },
  {
    id: "insights",
    name: "CircleCross Insights",
    focus: "Institutional Analytics & Evaluation",
    description:
      "Programme referral tracking, aggregate participation metrics, and anonymous student belonging feedback.",
    value: "Provides evidence-based reporting without encroaching on student privacy.",
    icon: PieChart,
    accent: "text-copper",
  },
];

const DEFAULT_PACKAGE = PACKAGES[0] ?? {
  id: "welcome",
  name: "CircleCross Welcome",
  focus: "O-Week to Week 7 Transition",
  description: "Includes First 50 journey.",
  value: "Increases orientation reach.",
  icon: Compass,
  accent: "text-olive",
};

export function InstitutionalTrust() {
  const [selectedId, setSelectedId] = useState("welcome");
  const activePkg = PACKAGES.find((p) => p.id === selectedId) ?? DEFAULT_PACKAGE;

  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="institutional">
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>Institutional Partnership & Governance</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Engineered for governance, <em>privacy by design,</em> and proven reach.
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          CircleCross Uni scales across multi-campus institutions with modular packaging, delegated
          permissions for student associations, and compliance with the Australian Privacy
          Principles.
        </p>
      </div>

      {/* Clean Interactive Deployment Matrix (No 6-Card Bloat) */}
      <div className="mt-16 grid grid-cols-12 gap-10 items-start max-lg:gap-8">
        {/* Package Selector List with Hairlines */}
        <div className="col-span-12 lg:col-span-5 divide-y divide-line/70 border-y border-line/70">
          {PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedId;
            const Icon = pkg.icon;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedId(pkg.id)}
                className={`group flex w-full items-center justify-between py-4 text-left transition-opacity duration-200 ${
                  isSelected ? "opacity-100" : "opacity-60 hover:opacity-90"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`grid size-7 place-items-center rounded-full bg-black/5 ${pkg.accent}`}
                  >
                    <Icon className="size-3.5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-[650] text-ink">{pkg.name}</h3>
                    <p className="text-[11px] text-soft">{pkg.focus}</p>
                  </div>
                </div>
                <span
                  className={`size-2 rounded-full transition-all ${
                    isSelected ? "bg-copper scale-125" : "bg-transparent group-hover:bg-line"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Package Spotlight */}
        <div className="col-span-12 lg:col-span-7 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5">
          <div className="rounded-[calc(2rem-0.375rem)] bg-paper p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
            <span className="text-[10px] font-[650] tracking-[0.08em] text-olive uppercase">
              {activePkg.focus}
            </span>
            <h3 className="mt-2 text-2xl font-[650] text-ink">{activePkg.name}</h3>
            <p className="mt-4 text-sm leading-[1.8] text-soft">{activePkg.description}</p>

            <div className="mt-8 border-t border-line/70 pt-6">
              <span className="text-xs font-[650] tracking-[0.04em] text-ink uppercase">
                Institutional ROI
              </span>
              <p className="mt-2 text-sm leading-[1.7] text-[#343a29] font-[500]">
                {activePkg.value}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Safeguarding Principles: Editorial Layout (Zero Nested Cards) */}
      <div className="mt-24 border-t border-line/80 pt-16">
        <div className="w-full lg:w-3/4 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-olive/15 text-[#343a29]">
              <ShieldCheck className="size-4.5 text-olive" aria-hidden="true" />
            </span>
            <h3 className={`${hSubsection} text-ink`}>The CircleCross Trust Guarantee</h3>
          </div>

          <p className="mt-4 max-w-[68ch] text-sm leading-[1.8] text-soft">
            Universities partner with CircleCross because we maintain an inviolable boundary between
            institutional opportunity discovery and student privacy.
          </p>
        </div>

        {/* Minimalist 3-Pillar Row with Hairlines, No White Boxes */}
        <div className="mt-12 grid grid-cols-3 gap-8 divide-x divide-line/70 max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y max-md:gap-6">
          <div className="pr-4 max-md:pr-0 max-md:pt-4">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive shrink-0" />
              Zero Social Surveillance
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Institutions receive aggregated programme reach and confirmed participation metrics,
              never individual student chats, friendship maps, or private relationship graphs.
            </p>
          </div>

          <div className="px-6 max-md:px-0 max-md:pt-6">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive shrink-0" />
              No Continuous GPS Tracking
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Around You and CrossPoints rely strictly on voluntary, opt-in proximity within
              approved campus hubs. Student movement paths are never recorded or mapped.
            </p>
          </div>

          <div className="pl-6 max-md:pl-0 max-md:pt-6">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive shrink-0" />
              SSO & Identity Sovereignty
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Students authenticate through official university SSO without copying institutional
              passwords. Profile disclosure across degree, interests, and background is 100%
              user-controlled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
