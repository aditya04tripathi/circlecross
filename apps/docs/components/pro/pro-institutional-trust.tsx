"use client";

import {
  Award,
  CheckCircle2,
  Compass,
  GraduationCap,
  MapPin,
  PieChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

const ENTERPRISE_PACKAGES = [
  {
    id: "welcome",
    name: "CircleCross Welcome Pro",
    focus: "New Starter Onboarding & Acclimation",
    description:
      "Includes First 90 Pro journey, cross-functional onboarding buddies, reception CrossPoints, and team discovery trails.",
    value: "Reduces ramp time and employee turnover in the critical first quarter.",
    icon: Compass,
    accent: "text-pro",
  },
  {
    id: "connect",
    name: "CircleCross Connect Pro",
    focus: "Cross-Functional Belonging & Guilds",
    description:
      "Craft Guilds, Pro Circles, Lunch Across Teams, and spontaneous CrossCoffee pairing across distributed teams.",
    value: "Dismantles corporate department silos and builds cross-functional empathy.",
    icon: Users,
    accent: "text-copper",
  },
  {
    id: "summits",
    name: "CircleCross Summits & Events",
    focus: "Conferences, Offsites & Summits",
    description:
      "Event CrossPoints, conference companions, interactive session discussions, and walking 1:1 scheduling.",
    value: "Maximises return on corporate offsites and trade show investments.",
    icon: MapPin,
    accent: "text-pro",
  },
  {
    id: "growth",
    name: "CircleCross Growth & Mentoring",
    focus: "Peer Leadership & Skill Exchanges",
    description:
      "Two-way reciprocal mentoring, CrossLab challenges, skill exchange clinics, and organic leadership development.",
    value: "Accelerates internal promotion pipelines and peer knowledge transfer.",
    icon: Award,
    accent: "text-copper",
  },
  {
    id: "talent",
    name: "CircleCross Talent & Alumni",
    focus: "Lifelong Alumni & Partner Networks",
    description:
      "Corporate alumni circles, contractor talent pools, and user-governed Uni-to-Pro graduate bridges.",
    value: "Transforms departing staff into lifelong commercial brand advocates.",
    icon: GraduationCap,
    accent: "text-pro",
  },
  {
    id: "insights",
    name: "CircleCross Enterprise Insights",
    focus: "Network Density & Aggregated Analytics",
    description:
      "Departmental cross-pollination metrics, onboarding health signals, and anonymous organizational connectivity indices.",
    value: "Provides executive organizational health insights with zero surveillance.",
    icon: PieChart,
    accent: "text-copper",
  },
];

const DEFAULT_PRO_PACKAGE = ENTERPRISE_PACKAGES[0] ?? {
  id: "welcome",
  name: "CircleCross Welcome Pro",
  focus: "New Starter Onboarding & Acclimation",
  description: "Includes First 90 Pro journey.",
  value: "Reduces ramp time and employee turnover.",
  icon: Compass,
  accent: "text-pro",
};

export function ProInstitutionalTrust() {
  const [selectedId, setSelectedId] = useState("welcome");
  const activePkg = ENTERPRISE_PACKAGES.find((p) => p.id === selectedId) ?? DEFAULT_PRO_PACKAGE;

  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="institutional">
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>Enterprise Deployment & Packaging</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Engineered for governance, <em>data sovereignty,</em> and privacy.
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          CircleCross Pro scales across global enterprises, distributed teams, and industry
          associations with SOC2-ready architecture, Okta/Azure SSO, and employee data sovereignty.
        </p>
      </div>

      {/* Clean Interactive Deployment Matrix (No 6-Card Bloat) */}
      <div className="mt-16 grid grid-cols-12 gap-10 items-start max-lg:gap-8">
        {/* Package Selector List with Hairlines */}
        <div className="col-span-12 lg:col-span-5 divide-y divide-line/70 border-y border-line/70">
          {ENTERPRISE_PACKAGES.map((pkg) => {
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
            <span className="text-[10px] font-[650] tracking-[0.08em] text-pro uppercase">
              {activePkg.focus}
            </span>
            <h3 className="mt-2 text-2xl font-[650] text-ink">{activePkg.name}</h3>
            <p className="mt-4 text-sm leading-[1.8] text-soft">{activePkg.description}</p>

            <div className="mt-8 border-t border-line/70 pt-6">
              <span className="text-xs font-[650] tracking-[0.04em] text-ink uppercase">
                Enterprise ROI
              </span>
              <p className="mt-2 text-sm leading-[1.7] text-[#343547] font-[500]">
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
            <span className="grid size-9 place-items-center rounded-full bg-pro/15 text-[#343547]">
              <ShieldCheck className="size-4.5 text-pro" aria-hidden="true" />
            </span>
            <h3 className={`${hSubsection} text-ink`}>The Enterprise Trust Guarantee</h3>
          </div>

          <p className="mt-4 max-w-[68ch] text-sm leading-[1.8] text-soft">
            Enterprises partner with CircleCross Pro because we strictly maintain human dignity and
            confidentiality: zero workplace surveillance, zero private message snooping.
          </p>
        </div>

        {/* Minimalist 3-Pillar Row with Hairlines, No White Boxes */}
        <div className="mt-12 grid grid-cols-3 gap-8 divide-x divide-line/70 max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y max-md:gap-6">
          <div className="pr-4 max-md:pr-0 max-md:pt-4">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-pro shrink-0" />
              Zero Social Surveillance
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Leadership receives anonymised cross-functional interaction density signals, never
              individual chat transcripts, private calendars, or colleague graphs.
            </p>
          </div>

          <div className="px-6 max-md:px-0 max-md:pt-6">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-pro shrink-0" />
              No Continuous Office Tracking
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Workplace CrossPoints operate via voluntary, physical QR check-ins. Employees are
              never tracked through continuous beaconing, RFID, or GPS.
            </p>
          </div>

          <div className="pl-6 max-md:pl-0 max-md:pt-6">
            <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-pro shrink-0" />
              Individual Graph Sovereignty
            </h4>
            <p className="mt-3 text-xs leading-[1.7] text-soft">
              Relationships cultivated on CircleCross remain personal intellectual property. When an
              employee transitions to a new role, their network stays with them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
