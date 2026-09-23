import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import { eyebrow, hSection, pageInset, pyDense } from "../styles";

const INTEGRATION_ROWS = [
  {
    domain: "Orientation & Transition",
    system: "O-Planner / Orientation Portals",
    whatSystemDoes: "Publishes schedules and venue maps for O-Week.",
    circleCrossLayer: "First 50 & Orientation Companions",
    howCircleCrossHelps:
      "Extends orientation beyond Week 1 into a 50-day journey. Connects incoming students with verified peers attending the same sessions, plus CrossQuest campus trails.",
    icon: Compass,
    accent: "text-olive",
    bgAccent: "bg-olive/10",
  },
  {
    domain: "Teaching & LMS Units",
    system: "Moodle / Canvas / Blackboard",
    whatSystemDoes: "Delivers syllabus, lecture recordings, grades, and administrative forums.",
    circleCrossLayer: "Unit Circles & Study Match",
    howCircleCrossHelps:
      "Opt-in peer communities for individual units. Enables students to find study partners based on study habits and schedule spontaneous Study Now sessions in public libraries.",
    icon: BookOpen,
    accent: "text-copper",
    bgAccent: "bg-copper/10",
  },
  {
    domain: "Academic Support",
    system: "PASS / Faculty Peer Mentoring",
    whatSystemDoes: "Authoritative academic facilitation and mentor allocations.",
    circleCrossLayer: "PASS Companions & Mentoring Companion",
    howCircleCrossHelps:
      "Preserves programme leadership while giving students companion discovery for scheduled sessions, group coordination, and Second Hello follow-ups.",
    icon: Layers,
    accent: "text-olive",
    bgAccent: "bg-olive/10",
  },
  {
    domain: "Skills & Training",
    system: "Student Association Short Courses",
    whatSystemDoes: "Authorised enrolment for RSA, Barista, First Aid, and food safety.",
    circleCrossLayer: "Skill Circle & SkillSwap",
    howCircleCrossHelps:
      "Aggregates certified course cohorts so learners practice together, plus non-regulated peer skill trades (e.g. photography for coding basics).",
    icon: Sparkles,
    accent: "text-copper",
    bgAccent: "bg-copper/10",
  },
  {
    domain: "Campus Precincts & Tours",
    system: "Campus Tours / Pocket Explorer",
    whatSystemDoes: "Static signage and web descriptions of major buildings.",
    circleCrossLayer: "CrossPoints & CrossQuest",
    howCircleCrossHelps:
      "Physical QR checkpoints at Campus Centre and libraries unlocking interactive stories, collaborative team quests, and service referrals.",
    icon: MapPin,
    accent: "text-olive",
    bgAccent: "bg-olive/10",
  },
  {
    domain: "Graduation & Careers",
    system: "Alumni Directory & Career Portals",
    whatSystemDoes: "Central database of university graduates and career events.",
    circleCrossLayer: "Graduation Circles & University Bridge",
    howCircleCrossHelps:
      "Preserves consenting student-era circles into alumni life, enabling a smooth, user-controlled bridge to CircleCross Pro without rebuilding your network.",
    icon: GraduationCap,
    accent: "text-copper",
    bgAccent: "bg-copper/10",
  },
];

export function ConnectOsGrid() {
  return (
    <section
      className={`${pageInset} ${pyDense} border-t border-border bg-[#ece8de]/40`}
      id="connectos"
    >
      <div className="max-w-[700px]">
        <p className={eyebrow}>ConnectOS Architecture</p>
        <h2 className={`${hSection} mb-6 max-w-[16ch]`}>
          Connecting institutional systems to <em>real-world participation.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Existing university systems remain authoritative. CircleCross provides the optional,
          consensual engagement and participation layer around them.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 max-[1100px]:grid-cols-1">
        {INTEGRATION_ROWS.map((row) => {
          const Icon = row.icon;
          return (
            <article
              key={row.domain}
              className="flex flex-col justify-between rounded-[18px] border border-line bg-paper p-8 shadow-[0_4px_20px_rgba(41,42,36,0.04)] max-md:p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line/70 pb-4">
                  <span className="text-[11px] font-[550] tracking-[0.08em] text-[#373d2b] uppercase">
                    {row.domain}
                  </span>
                  <span
                    className={`grid size-8 place-items-center rounded-full ${row.bgAccent} ${row.accent}`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>

                {/* University Authoritative System */}
                <div className="mt-5 rounded-[10px] bg-white/60 p-4">
                  <span className="text-[10px] font-[600] tracking-[0.06em] text-soft uppercase">
                    Official System
                  </span>
                  <h3 className="mt-1 text-sm font-[550] text-ink">{row.system}</h3>
                  <p className="mt-1.5 text-xs leading-[1.6] text-soft">{row.whatSystemDoes}</p>
                </div>

                {/* CircleCross ConnectOS Layer */}
                <div className="mt-4 rounded-[10px] border border-line/60 bg-[#e8e9df]/70 p-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-[600] tracking-[0.06em] text-[#373d2b] uppercase">
                      CircleCross Layer
                    </span>
                    <ArrowRight className="size-3 text-copper" aria-hidden="true" />
                  </div>
                  <h4 className="mt-1 text-sm font-[550] text-ink">{row.circleCrossLayer}</h4>
                  <p className="mt-1.5 text-xs leading-[1.7] text-[#35392e]">
                    {row.howCircleCrossHelps}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-line/60 pt-4 text-[11px] text-soft">
                <span className="font-[550] text-ink">Institutional Value:</span> No credential
                replication, delegated programme ownership, and aggregated engagement insights.
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
