"use client";

import {
  Briefcase,
  Coffee,
  Compass,
  GraduationCap,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { eyebrow, hSection, pageInset } from "../styles";

type ProCategoryId = "all" | "enterprise" | "onboarding" | "networking" | "events" | "mobility";

type ProFeatureItem = {
  id: string;
  name: string;
  category: ProCategoryId;
  description: string;
  integration: string;
  tag: string;
};

const PRO_FEATURES: ProFeatureItem[] = [
  // Enterprise & Workplaces
  {
    id: "pro-circles",
    name: "Pro Circles & Craft Guilds",
    category: "enterprise",
    description:
      "Opt-in communities for functional crafts (e.g. Design Systems, Data Engineering, Product Strategy) cutting across business units.",
    integration:
      "Connects employees across departments without cluttering Slack or Teams channels.",
    tag: "Cross-Functional Guild",
  },
  {
    id: "cross-lab-pro",
    name: "CrossLab Problem Sprints",
    category: "enterprise",
    description:
      "Internal hackathons and cross-functional problem sprints where cross-departmental teams solve strategic bottlenecks.",
    integration:
      "Executive sponsors submit problem briefs; CircleCross orchestrates team formation.",
    tag: "Internal Innovation",
  },
  {
    id: "alumni-talent",
    name: "Corporate Alumni Communities",
    category: "enterprise",
    description:
      "Preserves voluntary connection with former employees, turning alumni into advocates, clients, and future hires.",
    integration: "Operates independently of corporate directory de-provisioning cycles.",
    tag: "Talent Mobility",
  },

  // Onboarding
  {
    id: "first-90-pro",
    name: "First 90 Pro Journey",
    category: "onboarding",
    description:
      "A guided 90-day onboarding journey from contract signing to first-quarter review, connecting new hires across silos.",
    integration: "Complements HRIS onboarding checklists with organic relationship building.",
    tag: "Executive Onboarding",
  },
  {
    id: "onboarding-buddies",
    name: "Cross-Department Peer Buddy",
    category: "onboarding",
    description:
      "Connects new starters with a verified peer from another department for informal acclimation and perspective.",
    integration: "Relieves single-team manager burden while broadening organizational context.",
    tag: "Peer Acclimation",
  },
  {
    id: "re-onboarding",
    name: "Internal Mobility Re-Orientation",
    category: "onboarding",
    description:
      "Structured re-orientation pathways for employees transitioning into new departments, roles, or global offices.",
    integration: "Accelerates internal promotion and transfer productivity.",
    tag: "Career Transitions",
  },

  // Networking & Culture
  {
    id: "pro-crosspoints",
    name: "Pro CrossPoints",
    category: "networking",
    description:
      "Physical QR checkpoints situated in office receptions, collaboration hubs, and partner co-working spaces.",
    integration: "Turns real estate into dynamic relationship discovery points.",
    tag: "Physical Workplace",
  },
  {
    id: "cross-coffee",
    name: "CrossCoffee & CrossWalk",
    category: "networking",
    description:
      "Low-friction 20-minute coffee catch-ups and walking meetings between busy leaders and team members.",
    integration: "Seamlessly aligns with calendar availability without rigid meeting overhead.",
    tag: "Human Frictionless",
  },
  {
    id: "lunch-across-teams",
    name: "Lunch Across Teams",
    category: "networking",
    description:
      "Curated small-group lunch pods matching colleagues from different divisions based on shared passions.",
    integration: "Eliminates departmental silos and stimulates serendipitous product synergies.",
    tag: "Social Belonging",
  },
  {
    id: "second-hello-pro",
    name: "Second Hello Reconnections",
    category: "networking",
    description:
      "Effortless, low-pressure reconnection loops after an all-hands, conference, or committee presentation.",
    integration: "Prevents high-value one-off interactions from fading into digital oblivion.",
    tag: "Network Retention",
  },

  // Events & Conferences
  {
    id: "conference-companions",
    name: "Conference CrossPoints & Companions",
    category: "events",
    description:
      "Physical QR checkpoints at summit stages and lounges unlocking curated small-group discussions and interest-matched walking 1:1s.",
    integration:
      "Replaces clunky conference attendee spreadsheets with privacy-first real-world discovery.",
    tag: "Event Intelligence",
  },
  {
    id: "offsite-trails",
    name: "Offsite & Summit Trails",
    category: "events",
    description:
      "Collaborative team challenges and discovery quests designed for corporate retreats and strategy summits.",
    integration: "Drives organic mingling between distributed and remote team members.",
    tag: "Team Cohesion",
  },

  // Mobility & Bridge
  {
    id: "uni-pro-bridge",
    name: "University-to-Industry Bridge",
    category: "mobility",
    description:
      "Graduates preserve student relationships, project teams, and verified degree data as they transition into industry.",
    integration: "Bridges campus talent directly into corporate innovation hubs.",
    tag: "Graduate Pathway",
  },
  {
    id: "independent-graph",
    name: "Portable Professional Graph",
    category: "mobility",
    description:
      "Your relationships belong to you. When you switch employers, your relationship graph remains completely intact.",
    integration:
      "Strict cryptographic user sovereignty; employers never own your personal connections.",
    tag: "Data Sovereignty",
  },
  {
    id: "mentor-network",
    name: "Reciprocal Mentorship Match",
    category: "mobility",
    description:
      "Pairings based on modern mutual value: junior specialists sharing cutting-edge skills while executives offer strategic guidance.",
    integration:
      "Replaces one-way corporate mentorship programmes with reciprocal value exchanges.",
    tag: "Two-Way Mentoring",
  },
];

const PRO_CATEGORIES: Array<{ id: ProCategoryId; label: string; icon: typeof Compass }> = [
  { id: "all", label: "All Capabilities", icon: Sparkles },
  { id: "enterprise", label: "Enterprise & Guilds", icon: Briefcase },
  { id: "onboarding", label: "First 90 Onboarding", icon: Compass },
  { id: "networking", label: "Workplace & Coffee", icon: Coffee },
  { id: "events", label: "Conferences & Summits", icon: MapPin },
  { id: "mobility", label: "Career Sovereignty", icon: GraduationCap },
];

export function ProFeatureCatalogue() {
  const [activeCategory, setActiveCategory] = useState<ProCategoryId>("all");
  const [search, setSearch] = useState("");

  const filtered = PRO_FEATURES.filter((f) => {
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
      className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/30`}
      id="catalogue"
    >
      <div className="max-w-[760px]">
        <p className={eyebrow}>Enterprise Capability Matrix</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Engineered for corporate <em>scale, governance, and autonomy.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Browse the complete matrix of capabilities designed for professionals, teams, People &
          Culture leaders, and enterprise executives.
        </p>
      </div>

      {/* Category Pills & Search */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-line/80 pb-6">
        <div className="flex flex-wrap gap-2" role="tablist">
          {PRO_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategory;
            const Icon = cat.icon;
            return (
              <button
                type="button"
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-[550] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper active:scale-[0.98] ${
                  isSelected
                    ? "bg-ink text-paper shadow-sm"
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
        <div className="relative min-w-[260px] max-md:w-full">
          <Search className="absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-soft" />
          <input
            type="text"
            placeholder="Search enterprise capabilities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-line bg-paper py-2.5 pr-4 pl-9.5 text-xs text-ink placeholder:text-soft focus:border-copper focus:outline-none"
          />
        </div>
      </div>

      {/* Double-Bezel Feature Grid with grid-flow-dense */}
      <div className="mt-12 grid grid-flow-dense grid-cols-12 gap-6 max-md:gap-5">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[1.75rem] bg-black/5 p-1.5 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
          >
            <div className="flex h-full flex-col justify-between rounded-[calc(1.75rem-0.375rem)] bg-paper p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <span className="rounded-full bg-pro/15 px-2.5 py-0.5 text-[10px] font-[650] text-[#343547] uppercase">
                    {item.tag}
                  </span>
                  <ShieldCheck className="size-3.5 text-copper" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-base font-[600] text-ink">{item.name}</h3>
                <p className="mt-2 text-xs leading-[1.7] text-soft">{item.description}</p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-3 text-[11px] leading-[1.65] text-[#343547]">
                <span className="font-[650]">Integration: </span>
                {item.integration}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-14 text-center text-sm text-soft">
          No capabilities matched your search criteria. Try a different search term.
        </div>
      )}
    </section>
  );
}
