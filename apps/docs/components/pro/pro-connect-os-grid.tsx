import {
  ArrowRight,
  Briefcase,
  Coffee,
  Compass,
  GraduationCap,
  Layers,
  MapPin,
} from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";

const PRO_INTEGRATIONS = [
  {
    domain: "Onboarding & Internal Mobility",
    system: "HRIS / Workday / SuccessFactors",
    whatSystemDoes:
      "Publishes organizational charts, role profiles, and mandatory compliance checklists.",
    circleCrossLayer: "First 90 Pro & Cross-Functional Buddy",
    howCircleCrossHelps:
      "Connects new hires with cross-department peers, mentors, and cohort companions for mutual acclimation beyond team silos.",
    icon: Compass,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    domain: "Collaboration & Comms",
    system: "Microsoft Teams / Slack / Viva",
    whatSystemDoes:
      "Hosts asynchronous team chats, official announcements, and departmental channels.",
    circleCrossLayer: "Pro Circles & Spontaneous Syncs",
    howCircleCrossHelps:
      "Opt-in interest and craft circles across departments. Turns digital channel fatigue into focused, real-world coffee and working sessions.",
    icon: Layers,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    domain: "Professional Networking",
    system: "LinkedIn / Corporate Directories",
    whatSystemDoes:
      "Static broadcast resumes, corporate endorsements, and public employment records.",
    circleCrossLayer: "Consent-Based Real-World Synapse",
    howCircleCrossHelps:
      "Deepens superficial digital connections into real-world encounters with mutual opt-in consent and context disclosure controls.",
    icon: Briefcase,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    domain: "Conferences & Summits",
    system: "Brella / Whova / Eventbrite",
    whatSystemDoes: "Publishes speaker schedules, badge printing, and generic attendee lists.",
    circleCrossLayer: "Conference CrossPoints & Companions",
    howCircleCrossHelps:
      "Physical QR checkpoints at summit stages and lounges unlocking curated small-group discussions and interest-matched walking 1:1s.",
    icon: MapPin,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    domain: "Mentoring & Leadership",
    system: "Donut / MentorCliq / Internal Programmes",
    whatSystemDoes: "Automates rigid calendar pairings often leading to awkward, scripted 1:1s.",
    circleCrossLayer: "CrossCoffee & Organic Mentorship",
    howCircleCrossHelps:
      "Organic peer-to-peer mentoring and low-pressure Second Hello follow-ups driven by shared challenges and authentic chemistry.",
    icon: Coffee,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    domain: "Alumni & Talent Networks",
    system: "Enterprise Alumni Portals",
    whatSystemDoes: "Dispatches quarterly newsletters and passive job board announcements.",
    circleCrossLayer: "Lifelong Professional Graph",
    howCircleCrossHelps:
      "Preserves personal relationships across job moves. The professional retains full ownership of their network independently of their employer.",
    icon: GraduationCap,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

export function ProConnectOsGrid() {
  return (
    <section
      className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/40`}
      id="connectos"
    >
      <div className="max-w-[760px]">
        <p className={eyebrow}>ConnectOS Enterprise Architecture</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Connecting enterprise software to <em>real-world collaboration.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Existing enterprise tools remain authoritative for operational governance, security, and
          HR recordkeeping. CircleCross operates as a consent-based human relationship layer that
          empowers individuals to connect meaningfully without employer surveillance.
        </p>
      </div>

      <div className="mt-16 grid grid-flow-dense grid-cols-12 gap-6 max-md:gap-5">
        {PRO_INTEGRATIONS.map((row) => {
          const Icon = row.icon;
          return (
            <article
              key={row.domain}
              className="col-span-12 lg:col-span-6 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-paper p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] max-md:p-6">
                <div>
                  <div className="flex items-center justify-between border-b border-line/70 pb-4">
                    <span className="text-[11px] font-[600] tracking-[0.08em] text-[#343547] uppercase">
                      {row.domain}
                    </span>
                    <span
                      className={`grid size-8 place-items-center rounded-full ${row.bgAccent} ${row.accent}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Existing Corporate Tool */}
                  <div className="mt-5 rounded-[14px] bg-[#fdfbf8] p-4.5 ring-1 ring-black/5">
                    <span className="text-[10px] font-[600] tracking-[0.06em] text-soft uppercase">
                      Official Tool
                    </span>
                    <h3 className="mt-1 text-sm font-[600] text-ink">{row.system}</h3>
                    <p className="mt-1.5 text-xs leading-[1.65] text-soft">{row.whatSystemDoes}</p>
                  </div>

                  {/* CircleCross ConnectOS Layer */}
                  <div className="mt-4 rounded-[14px] border border-pro/20 bg-[#eef0f7]/75 p-4.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-[650] tracking-[0.06em] text-[#343547] uppercase">
                        CircleCross Layer
                      </span>
                      <ArrowRight className="size-3 text-copper" aria-hidden="true" />
                    </div>
                    <h4 className="mt-1 text-sm font-[600] text-ink">{row.circleCrossLayer}</h4>
                    <p className="mt-1.5 text-xs leading-[1.7] text-[#343547]">
                      {row.howCircleCrossHelps}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4 text-[11px] text-soft">
                  <span className="font-[600] text-ink">Enterprise Value:</span> Decreased
                  cross-functional silos, accelerated time-to-productivity, and portable employee
                  graphs.
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
