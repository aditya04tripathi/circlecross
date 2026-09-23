"use client";

import { ArrowRight, Compass, GraduationCap, Layers, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, pageInset } from "../styles";

const PRO_DOMAINS = [
  {
    id: "onboarding",
    title: "Onboarding & Mobility",
    icon: Compass,
    system: "HRIS & Workday Systems",
    systemRole: "Publishes org charts, role profiles, and compliance checklists.",
    circleCrossLayer: "First 90 Pro & Cross-Department Buddy",
    circleCrossRole:
      "Connects new hires with cross-department peers, mentors, and cohort companions for mutual acclimation beyond team silos.",
    enterpriseValue: "Accelerates time-to-productivity by 35%; reduces early tenure attrition.",
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    id: "comms",
    title: "Guilds & Cross-Functional Sync",
    icon: Layers,
    system: "Microsoft Teams & Slack",
    systemRole: "Hosts asynchronous team chats, official announcements, and departmental channels.",
    circleCrossLayer: "Pro Circles & Spontaneous Syncs",
    circleCrossRole:
      "Opt-in interest and craft guilds across business units. Turns channel fatigue into focused, real-world coffee and working sessions.",
    enterpriseValue:
      "Breaks down corporate silos without introducing another noisy notification feed.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    id: "summits",
    title: "Conferences & Summits",
    icon: MapPin,
    system: "Brella & Corporate Event Apps",
    systemRole: "Publishes agendas, speaker lists, and generic attendee rosters.",
    circleCrossLayer: "Conference CrossPoints & Companions",
    circleCrossRole:
      "Physical QR checkpoints at summit stages and lounges unlocking curated small-group discussions and interest-matched walking 1:1s.",
    enterpriseValue:
      "Maximises ROI on offsites and conferences with genuine relationship formation.",
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    id: "graph",
    title: "Sovereign Career Graph",
    icon: GraduationCap,
    system: "Enterprise Alumni & Directory Portals",
    systemRole: "Deactivates employee access and corporate network presence upon departure.",
    circleCrossLayer: "Lifelong Sovereign Professional Graph",
    circleCrossRole:
      "Preserves personal relationships across career moves. The individual retains cryptographic ownership of their network independently of their employer.",
    enterpriseValue:
      "Turns former employees into commercial partners and client referral champions.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

const DEFAULT_PRO_DOMAIN = PRO_DOMAINS[0] ?? {
  id: "onboarding",
  title: "Onboarding & Mobility",
  icon: Compass,
  system: "HRIS & Workday Systems",
  systemRole: "Publishes org charts, role profiles, and compliance checklists.",
  circleCrossLayer: "First 90 Pro & Cross-Department Buddy",
  circleCrossRole: "Connects new hires with cross-department peers.",
  enterpriseValue: "Accelerates time-to-productivity.",
  accent: "text-pro",
  bgAccent: "bg-pro/15",
};

export function ProConnectOsGrid() {
  const [activeId, setActiveId] = useState("onboarding");
  const activeDomain = PRO_DOMAINS.find((d) => d.id === activeId) ?? DEFAULT_PRO_DOMAIN;

  return (
    <section
      className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/30`}
      id="connectos"
    >
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>ConnectOS Enterprise Protocol</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Connecting enterprise software to <em>real-world collaboration.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Existing enterprise tools remain authoritative for security, compliance, and HR records.
          CircleCross operates as the opt-in human relationship layer that empowers people to
          connect meaningfully without employer surveillance.
        </p>
      </div>

      {/* Editorial Interactive Comparison Architecture (No Card Inception) */}
      <div className="mt-16 grid grid-cols-12 gap-10 items-start max-lg:gap-8">
        {/* Domain Navigation List with Crisp Hairline Dividers */}
        <div
          className="col-span-12 lg:col-span-5 divide-y divide-line/70 border-y border-line/70"
          role="tablist"
        >
          {PRO_DOMAINS.map((domain) => {
            const isSelected = domain.id === activeId;
            const Icon = domain.icon;
            return (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(domain.id)}
                className={`group flex w-full items-center justify-between py-6 text-left transition-all duration-300 ${
                  isSelected ? "opacity-100" : "opacity-60 hover:opacity-90"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid size-9 place-items-center rounded-full transition-colors ${
                      isSelected
                        ? "bg-ink text-paper"
                        : "bg-black/5 text-ink group-hover:bg-black/10"
                    }`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-[600] text-ink">{domain.title}</h3>
                    <p className="text-xs text-soft">{domain.system.split(" &")[0]}</p>
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

        {/* Dynamic Protocol Stage */}
        <div className="col-span-12 lg:col-span-7 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5">
          <div className="rounded-[calc(2rem-0.375rem)] bg-paper p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
            <div className="flex items-center justify-between border-b border-line/70 pb-5">
              <span className="text-[11px] font-[650] tracking-[0.08em] text-[#343547] uppercase">
                Enterprise Interface Protocol
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-soft font-[500]">
                <ShieldCheck className="size-3.5 text-pro" />
                Zero Surveillance Guarantee
              </span>
            </div>

            {/* Corporate vs CircleCross Protocol Flow */}
            <div className="mt-8 space-y-6">
              {/* Corporate System */}
              <div className="border-l-2 border-line pl-4">
                <span className="text-[10px] font-[650] tracking-[0.06em] text-soft uppercase">
                  Corporate Governance Infrastructure
                </span>
                <h4 className="mt-1 text-base font-[600] text-ink">{activeDomain.system}</h4>
                <p className="mt-1.5 text-xs leading-[1.7] text-soft">{activeDomain.systemRole}</p>
              </div>

              {/* Dynamic Connection Indicator */}
              <div className="flex items-center gap-3 pl-4 text-xs font-[600] text-copper">
                <ArrowRight className="size-3.5 animate-pulse" />
                <span className="text-[11px] tracking-[0.04em] uppercase">
                  CircleCross Human Relationship Layer
                </span>
              </div>

              {/* CircleCross Layer */}
              <div className="border-l-2 border-pro pl-4">
                <span className="text-[10px] font-[650] tracking-[0.06em] text-pro uppercase">
                  Consent-Based Relationship Graph
                </span>
                <h4 className="mt-1 text-base font-[600] text-ink">
                  {activeDomain.circleCrossLayer}
                </h4>
                <p className="mt-1.5 text-xs leading-[1.7] text-[#343547]">
                  {activeDomain.circleCrossRole}
                </p>
              </div>
            </div>

            {/* Value Metric Bar */}
            <div className="mt-8 border-t border-line/70 pt-5 text-xs leading-[1.7] text-soft">
              <span className="font-[650] text-ink">Enterprise Value: </span>
              {activeDomain.enterpriseValue}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
