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
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

const PACKAGES = [
  {
    name: "CircleCross Welcome",
    focus: "O-Week to Week 7 Transition",
    description:
      "Includes First 50 journey, orientation companions, CrossPoints landmark checkpoints, and CrossQuest team challenges.",
    value: "Increases orientation reach and keeps students engaged well past Week 1.",
    icon: Compass,
    accent: "text-olive",
    bgAccent: "bg-olive/15",
  },
  {
    name: "CircleCross Connect",
    focus: "Belonging & Academic Identity",
    description:
      "Academic classification, Unit Circles, Study Match, consent-based messaging, and continuing friendship circles.",
    value: "Combats student isolation and supports persistent cohort retention.",
    icon: Users,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    name: "CircleCross Campus",
    focus: "Student Life & Societies",
    description:
      "Verified club profiles, event companions, volunteer discovery, interclub collaborations, and Campus Pulse.",
    value: "Drives foot traffic and attendance to existing university and club activities.",
    icon: Layers,
    accent: "text-olive",
    bgAccent: "bg-olive/15",
  },
  {
    name: "CircleCross Skills",
    focus: "Employability & Training",
    description:
      "Skill Circle short course cohorts (RSA, Barista, First Aid), SkillSwap peer exchanges, and verified credentials.",
    value: "Connects students with university and student union training investments.",
    icon: Award,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    name: "CircleCross Alumni",
    focus: "Lifelong Community",
    description:
      "Graduation Circles, alumni mentor discovery, career transition pathways, and the University Bridge to CircleCross Pro.",
    value: "Extends voluntary engagement beyond graduation without losing connection cohorts.",
    icon: GraduationCap,
    accent: "text-olive",
    bgAccent: "bg-olive/15",
  },
  {
    name: "CircleCross Insights",
    focus: "Institutional Analytics & Evaluation",
    description:
      "Programme referral tracking, aggregate participation metrics, and anonymous student belonging feedback.",
    value: "Provides evidence-based reporting without encroaching on student privacy.",
    icon: PieChart,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

export function InstitutionalTrust() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="institutional">
      <div className="max-w-[760px]">
        <p className={eyebrow}>Institutional Partnership & Packaging</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Engineered for governance, <em>privacy by design,</em> and proven reach.
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          CircleCross Uni scales across multi-campus institutions with modular packaging, delegated
          permissions for student associations, and rigorous Australian Privacy Principles (APP)
          compliance.
        </p>
      </div>

      {/* Commercial Packages Double-Bezel Grid */}
      <div className="mt-16 grid grid-flow-dense grid-cols-12 gap-6 max-md:gap-5">
        {PACKAGES.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <article
              key={pkg.name}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-paper p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div>
                  <div className="flex items-center justify-between border-b border-line/70 pb-4">
                    <span className="text-[10px] font-[650] tracking-[0.08em] text-[#343a29] uppercase">
                      {pkg.focus}
                    </span>
                    <span
                      className={`grid size-7 place-items-center rounded-full ${pkg.bgAccent} ${pkg.accent}`}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-[600] text-ink">{pkg.name}</h3>
                  <p className="mt-2 text-xs leading-[1.7] text-soft">{pkg.description}</p>
                </div>

                <div className="mt-6 border-t border-line/60 pt-3.5">
                  <span className="text-[11px] font-[600] text-ink">Institutional Value: </span>
                  <span className="text-[11px] leading-[1.65] text-soft">{pkg.value}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Double-Bezel Trust & Safeguarding Principles Enclosure */}
      <div className="mt-16 rounded-[2.25rem] bg-olive/15 p-1.5 ring-1 ring-olive/30 shadow-[0_8px_30px_rgba(98,108,77,0.08)]">
        <div className="rounded-[calc(2.25rem-0.375rem)] bg-[#eef1e6] p-10 max-md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-olive/20 text-[#343a29]">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <h3 className={`${hSubsection} text-[#292a24]`}>The CircleCross Trust Guarantee</h3>
          </div>

          <p className="mt-4 max-w-[68ch] text-sm leading-[1.8] text-[#424735]">
            Universities partner with CircleCross because we maintain an inviolable boundary between
            institutional opportunity discovery and student privacy.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-olive/20 pt-8 max-md:grid-cols-1">
            <div className="rounded-[1.25rem] bg-white/60 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-olive shrink-0" />
                Zero Social Surveillance
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#424735]">
                Institutions receive aggregated programme reach and confirmed participation metrics,
                never individual student chats, friendship maps, or private relationship graphs.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/60 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-olive shrink-0" />
                No Continuous GPS Tracking
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#424735]">
                Around You and CrossPoints rely strictly on voluntary, opt-in proximity within
                approved campus hubs. Student movement paths are never recorded or mapped.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/60 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-olive shrink-0" />
                SSO & Identity Sovereignty
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#424735]">
                Students authenticate through official university SSO without copying institutional
                passwords. Profile disclosure across degree, interests, and background is 100%
                user-controlled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
