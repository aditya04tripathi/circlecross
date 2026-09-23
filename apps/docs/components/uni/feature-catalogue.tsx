"use client";

import {
  Award,
  BookOpen,
  Compass,
  GraduationCap,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, pageInset, pyDense } from "../styles";

type CategoryId = "all" | "academic" | "social" | "orientation" | "skills" | "alumni";

type FeatureItem = {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  integration: string;
  tag: string;
};

const FEATURES: FeatureItem[] = [
  // Academic
  {
    id: "unit-circles",
    name: "Unit Circles & CourseMates",
    category: "academic",
    description:
      "Opt-in communities for degrees, majors, and specific units that operate outside formal LMS grading spaces.",
    integration: "Connects voluntary peer study without cluttering Moodle or Canvas courses.",
    tag: "Voluntary Peer Study",
  },
  {
    id: "study-match",
    name: "Study Match & Study Now",
    category: "academic",
    description:
      "Match with peers based on study goals, silence preferences, and schedule; broadcast spontaneous study sessions in libraries.",
    integration: "Preserves university and student association study-buddy programme ownership.",
    tag: "Algorithmic Match",
  },
  {
    id: "pass-companions",
    name: "PASS Companion Discovery",
    category: "academic",
    description:
      "Find classmates planning to attend authorised Peer Assisted Study Sessions (PASS) workshops.",
    integration: "Promotes official attendance without duplicating PASS leaders or curriculum.",
    tag: "Official Support",
  },
  {
    id: "cross-lab",
    name: "CrossLab Challenges",
    category: "academic",
    description:
      "Short interdisciplinary project challenges connecting IT, Design, Business, and Science students.",
    integration: "Departments author challenge briefs; CircleCross handles team formation.",
    tag: "Interdisciplinary",
  },

  // Orientation
  {
    id: "first-50",
    name: "CircleCross First 50",
    category: "orientation",
    description:
      "A guided 50-day onboarding journey from pre-arrival to Week 7, connecting orientation to semester routine.",
    integration: "Extends O-Week into an engagement framework across all participating faculties.",
    tag: "Signature Journey",
  },
  {
    id: "orientation-companions",
    name: "Orientation Companions",
    category: "orientation",
    description:
      "Students connect with verified peers planning to attend the same official O-Week sessions or campus tours.",
    integration:
      "Integrates with O-Planner / orientation registration without exposing attendee lists.",
    tag: "Consent-Based",
  },
  {
    id: "fresh-start",
    name: "Fresh Start Re-Onboarding",
    category: "orientation",
    description:
      "Tailored discovery pathways for mid-year transfers, exchange students, and returning cohorts who missed O-Week.",
    integration: "Available year-round, relieving pressure on first-year-only programmes.",
    tag: "Year-Round",
  },

  // Social & Campus
  {
    id: "crosspoints",
    name: "CrossPoints Checkpoints",
    category: "social",
    description:
      "QR checkpoints at campus landmarks that unlock multimedia landmark stories, services, and challenges.",
    integration: "Turns physical campus infrastructure into active participation points.",
    tag: "QR Campus Layer",
  },
  {
    id: "crossquest",
    name: "CrossQuest Campus Challenges",
    category: "social",
    description:
      "Small cooperative teams complete faculty, sustainability, or library exploration challenges at CrossPoints.",
    integration: "Drives foot traffic to underutilised university services and facilities.",
    tag: "Cooperative Quest",
  },
  {
    id: "around-you",
    name: "Around You (Opt-In)",
    category: "social",
    description:
      "Opt-in discovery of peers in designated campus precincts without continuous GPS tracking.",
    integration: "Zero live location surveillance; operates solely within verified campus bounds.",
    tag: "Privacy By Design",
  },
  {
    id: "second-hello",
    name: "Second Hello Follow-Ups",
    category: "social",
    description:
      "Low-pressure follow-up mechanisms after an initial event (e.g. meet for coffee again, study together).",
    integration: "Works across departments, clubs, and mentoring groups.",
    tag: "Retention Layer",
  },
  {
    id: "thirty-minute-cross",
    name: "The 30-Minute Cross",
    category: "social",
    description:
      "Short structured activities (campus photography walks, language practice) fitting timetable gaps.",
    integration: "Perfect for commuter students with tight schedules between classes.",
    tag: "Timetable-Friendly",
  },

  // Skills
  {
    id: "skill-circle",
    name: "Skill Circle Short Courses",
    category: "skills",
    description:
      "Find course cohorts for certified short courses (RSA, Barista, First Aid, Food Safety, Code).",
    integration:
      "Directs enrolment to student association & official providers while forming practice groups.",
    tag: "Certified Training",
  },
  {
    id: "skill-swap",
    name: "SkillSwap Peer Exchange",
    category: "skills",
    description:
      "Structured peer-to-peer exchanges of non-regulated skills (e.g. Photography for Python, Public Speaking for Excel).",
    integration: "Clearly separated from accredited training; safe campus meeting standards.",
    tag: "Peer Exchange",
  },
  {
    id: "career-circles",
    name: "Career & Interview Practice",
    category: "skills",
    description:
      "Peer mock interviews, portfolio critiques, and interest communities exploring specific industries.",
    integration: "Complements central career development services with active peer practice.",
    tag: "Career Readiness",
  },

  // Alumni
  {
    id: "graduation-circles",
    name: "Graduation Circles",
    category: "alumni",
    description:
      "Student friend cohorts and project teams automatically persist as alumni circles after graduation.",
    integration: "Prevents loss of student networks when university email addresses expire.",
    tag: "Community Continuity",
  },
  {
    id: "university-bridge",
    name: "University Bridge to Pro",
    category: "alumni",
    description:
      "Selective, user-governed transfer of verified credentials and trusted relationships into CircleCross Pro.",
    integration:
      "Provides graduates with a professional identity anchored in verified degree data.",
    tag: "Pro Transition",
  },
  {
    id: "alumni-mentor-match",
    name: "Opt-In Alumni Mentoring",
    category: "alumni",
    description:
      "Connects current students with verified graduates in their discipline or desired career path.",
    integration: "Feeds interested graduates into official university alumni mentoring programmes.",
    tag: "Lifelong Network",
  },
];

const CATEGORIES: Array<{ id: CategoryId; label: string; icon: typeof Compass }> = [
  { id: "all", label: "All Capabilities", icon: Sparkles },
  { id: "academic", label: "Academic & Study", icon: BookOpen },
  { id: "orientation", label: "Orientation & First 50", icon: Compass },
  { id: "social", label: "Campus & Encounters", icon: MapPin },
  { id: "skills", label: "Skills & Employability", icon: Award },
  { id: "alumni", label: "Alumni & Bridge", icon: GraduationCap },
];

export function FeatureCatalogue() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [search, setSearch] = useState("");

  const filtered = FEATURES.filter((f) => {
    const matchesCategory = activeCategory === "all" || f.category === activeCategory;
    const matchesSearch =
      search === "" ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase()) ||
      f.integration.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className={`${pageInset} ${pyDense} border-t border-border bg-[#ece8de]/30`}
      id="catalogue"
    >
      <div className="max-w-[700px]">
        <p className={eyebrow}>Master Feature Catalogue</p>
        <h2 className={`${hSection} mb-6 max-w-[16ch]`}>
          Engineered for university <em>scale and trust.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Browse the complete matrix of capabilities designed for students, faculties, student
          associations, and university leadership.
        </p>
      </div>

      {/* Category Pills & Search */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div className="flex flex-wrap gap-2" role="tablist">
          {CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategory;
            const Icon = cat.icon;
            return (
              <button
                type="button"
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-[500] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
                  isSelected
                    ? "bg-ink text-paper"
                    : "border border-line bg-paper text-soft hover:bg-[#e4dfd1] hover:text-ink"
                }`}
              >
                <Icon className="size-3.5" aria-hidden="true" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Filter */}
        <div className="relative min-w-[240px] max-md:w-full">
          <Search className="absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-soft" />
          <input
            type="text"
            placeholder="Search features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-line bg-paper py-2 pr-4 pl-9 text-xs text-ink placeholder:text-soft focus:border-copper focus:outline-none"
          />
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mt-10 grid grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-[16px] border border-line bg-paper p-6 shadow-[0_2px_12px_rgba(41,42,36,0.03)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#626c4d]/10 px-2.5 py-0.5 text-[10px] font-[550] text-[#373d2b] uppercase">
                  {item.tag}
                </span>
                <ShieldCheck className="size-3.5 text-copper" aria-hidden="true" />
              </div>

              <h3 className="mt-4 text-base font-[550] text-ink">{item.name}</h3>
              <p className="mt-2 text-xs leading-[1.7] text-soft">{item.description}</p>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3 text-[11px] leading-[1.6] text-[#414833]">
              <span className="font-[600]">Integration: </span>
              {item.integration}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-sm text-soft">
          No features matched your search criteria. Try a different search term.
        </div>
      )}
    </section>
  );
}
