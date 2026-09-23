"use client";

import { ArrowRight, BookOpen, Compass, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, pageInset } from "../styles";

const DOMAINS = [
  {
    id: "orientation",
    title: "Orientation & First 50",
    icon: Compass,
    system: "O-Planner & Orientation Portals",
    systemRole: "Publishes schedules, venue bookings, and campus maps for O-Week.",
    circleCrossLayer: "First 50 & Orientation Companions",
    circleCrossRole:
      "Extends orientation beyond Week 1 into a 50-day journey. Connects incoming students with verified peers attending the same sessions, plus CrossQuest campus trails.",
    institutionalValue: "Eliminates the Week 3 drop-off; preserves student union event autonomy.",
    accent: "text-olive",
    bgAccent: "bg-olive/15",
  },
  {
    id: "teaching",
    title: "LMS & Unit Cohorts",
    icon: BookOpen,
    system: "Moodle, Canvas & Blackboard",
    systemRole: "Delivers syllabus, lecture recordings, grades, and administrative forums.",
    circleCrossLayer: "Unit Circles & Study Match",
    circleCrossRole:
      "Opt-in peer communities for individual units. Enables students to find study partners by study habits and host spontaneous Study Now sessions in public libraries.",
    institutionalValue:
      "Zero clutter in graded LMS spaces; students connect freely without academic surveillance.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    id: "precincts",
    title: "Campus Precincts & QR",
    icon: MapPin,
    system: "Campus Facilities & Signage",
    systemRole: "Static building maps, library hours, and directory kiosks.",
    circleCrossLayer: "CrossPoints & CrossQuest",
    circleCrossRole:
      "Physical QR checkpoints at Campus Centre and libraries unlocking interactive landmark stories, team quests, and service referrals.",
    institutionalValue:
      "Breathes life into physical campus real estate without tracking student GPS.",
    accent: "text-olive",
    bgAccent: "bg-olive/15",
  },
  {
    id: "skills",
    title: "Skills & University Bridge",
    icon: GraduationCap,
    system: "Student Association Courses & Alumni Directory",
    systemRole: "Authorised enrolment for RSA, Barista, First Aid, and central graduate database.",
    circleCrossLayer: "Skill Circle & Alumni Continuity",
    circleCrossRole:
      "Forms practice cohorts for accredited short courses and enables consenting student circles to persist into alumni life and CircleCross Pro.",
    institutionalValue: "High course completion rates and lifelong voluntary alumni engagement.",
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

const DEFAULT_DOMAIN = DOMAINS[0] ?? {
  id: "orientation",
  title: "Orientation & First 50",
  icon: Compass,
  system: "O-Planner & Orientation Portals",
  systemRole: "Publishes schedules, venue bookings, and campus maps for O-Week.",
  circleCrossLayer: "First 50 & Orientation Companions",
  circleCrossRole: "Extends orientation beyond Week 1 into a 50-day journey.",
  institutionalValue: "Preserves student union event autonomy.",
  accent: "text-olive",
  bgAccent: "bg-olive/15",
};

export function ConnectOsGrid() {
  const [activeId, setActiveId] = useState("orientation");
  const activeDomain = DOMAINS.find((d) => d.id === activeId) ?? DEFAULT_DOMAIN;

  return (
    <section
      className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/30`}
      id="connectos"
    >
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>ConnectOS Protocol</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          Connecting institutional systems to <em>real-world participation.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Existing university systems remain authoritative for compliance, enrollment, and grades.
          CircleCross operates as the opt-in human relationship layer around them.
        </p>
      </div>

      {/* Editorial Interactive Comparison Architecture (Matching Height) */}
      <div className="mt-16 grid grid-cols-12 gap-10 items-stretch max-lg:gap-8">
        {/* Domain Navigation List with Crisp Hairline Dividers (Stretching Full Height) */}
        <div
          className="col-span-12 lg:col-span-5 flex flex-col justify-between divide-y divide-line/70 border-y border-line/70 h-full"
          role="tablist"
        >
          {DOMAINS.map((domain) => {
            const isSelected = domain.id === activeId;
            const Icon = domain.icon;
            return (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(domain.id)}
                className={`group flex flex-1 items-center justify-between py-6 text-left transition-all duration-300 ${
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

        {/* Dynamic Protocol Stage (Matching Full Height, Redundant Header Removed) */}
        <div className="col-span-12 lg:col-span-7 flex flex-col rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5 h-full">
          <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-paper p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
            {/* Official vs CircleCross Protocol Flow */}
            <div className="space-y-6">
              {/* Official System */}
              <div className="border-l-2 border-line pl-4">
                <span className="text-[10px] font-[650] tracking-[0.06em] text-soft uppercase">
                  Official Institutional Infrastructure
                </span>
                <h4 className="mt-1 text-base font-[600] text-ink">{activeDomain.system}</h4>
                <p className="mt-1.5 text-xs leading-[1.7] text-soft">{activeDomain.systemRole}</p>
              </div>

              {/* Dynamic Connection Indicator */}
              <div className="flex items-center gap-3 pl-4 text-xs font-[600] text-copper">
                <ArrowRight className="size-3.5 animate-pulse" />
                <span className="text-[11px] tracking-[0.04em] uppercase">
                  CircleCross Participation Bridge
                </span>
              </div>

              {/* CircleCross Layer */}
              <div className="border-l-2 border-olive pl-4">
                <span className="text-[10px] font-[650] tracking-[0.06em] text-olive uppercase">
                  Opt-In Community Layer
                </span>
                <h4 className="mt-1 text-base font-[600] text-ink">
                  {activeDomain.circleCrossLayer}
                </h4>
                <p className="mt-1.5 text-xs leading-[1.7] text-[#35392e]">
                  {activeDomain.circleCrossRole}
                </p>
              </div>
            </div>

            {/* Value Metric Bar */}
            <div className="mt-8 border-t border-line/70 pt-5 text-xs leading-[1.7] text-soft">
              <span className="font-[650] text-ink">Institutional Value: </span>
              {activeDomain.institutionalValue}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
