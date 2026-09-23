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
import { eyebrow, hSection, hSubsection, pageInset, pyDense } from "../styles";

const PACKAGES = [
  {
    name: "CircleCross Welcome",
    focus: "O-Week to Week 7 Transition",
    description:
      "Includes First 50 journey, orientation companions, CrossPoints landmark checkpoints, and CrossQuest team challenges.",
    value: "Increases orientation reach and keeps students engaged well past Week 1.",
    icon: Compass,
    accent: "text-olive",
  },
  {
    name: "CircleCross Connect",
    focus: "Belonging & Academic Identity",
    description:
      "Academic classification, Unit Circles, Study Match, consent-based messaging, and continuing friendship circles.",
    value: "Combats student isolation and supports persistent cohort retention.",
    icon: Users,
    accent: "text-copper",
  },
  {
    name: "CircleCross Campus",
    focus: "Student Life & Societies",
    description:
      "Verified club profiles, event companions, volunteer discovery, interclub collaborations, and Campus Pulse.",
    value: "Drives foot traffic and attendance to existing university and club activities.",
    icon: Layers,
    accent: "text-olive",
  },
  {
    name: "CircleCross Skills",
    focus: "Employability & Training",
    description:
      "Skill Circle short course cohorts (RSA, Barista, First Aid), SkillSwap peer exchanges, and verified credentials.",
    value: "Connects students with university and student union training investments.",
    icon: Award,
    accent: "text-copper",
  },
  {
    name: "CircleCross Alumni",
    focus: "Lifelong Community",
    description:
      "Graduation Circles, alumni mentor discovery, career transition pathways, and the University Bridge to CircleCross Pro.",
    value: "Extends voluntary engagement beyond graduation without losing connection cohorts.",
    icon: GraduationCap,
    accent: "text-olive",
  },
  {
    name: "CircleCross Insights",
    focus: "Institutional Analytics & Evaluation",
    description:
      "Programme referral tracking, aggregate participation metrics, and anonymous student belonging feedback.",
    value: "Provides evidence-based reporting without encroaching on student privacy.",
    icon: PieChart,
    accent: "text-copper",
  },
];

export function InstitutionalTrust() {
  return (
    <section className={`${pageInset} ${pyDense} border-t border-border`} id="institutional">
      <div className="max-w-[720px]">
        <p className={eyebrow}>Institutional Partnership & Packaging</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Built for governance, <em>privacy by design,</em> and proven reach.
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          CircleCross Uni scales across Go8 and multi-campus universities with modular packaging,
          delegated permissions for student unions, and rigorous privacy standards.
        </p>
      </div>

      {/* Commercial Packages Grid */}
      <div className="mt-14 grid grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {PACKAGES.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <article
              key={pkg.name}
              className="flex flex-col justify-between rounded-[18px] border border-line bg-paper p-6 shadow-[0_4px_16px_rgba(41,42,36,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-[600] tracking-[0.06em] text-[#373d2b] uppercase">
                    {pkg.focus}
                  </span>
                  <Icon className={`size-4 ${pkg.accent}`} aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-base font-[550] text-ink">{pkg.name}</h3>
                <p className="mt-2 text-xs leading-[1.7] text-soft">{pkg.description}</p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-3">
                <span className="text-[11px] font-[550] text-ink">Institutional ROI: </span>
                <span className="text-[11px] leading-[1.6] text-soft">{pkg.value}</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Trust & Safeguarding Principles Banner */}
      <div className="mt-16 rounded-[22px] border border-[#626c4d]/30 bg-[#e8e9df] p-10 max-md:p-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-6 text-[#373d2b]" aria-hidden="true" />
          <h3 className={`${hSubsection} text-[#292a24]`}>The CircleCross Trust Guarantee</h3>
        </div>

        <p className="mt-3 max-w-[65ch] text-sm leading-[1.8] text-[#4a4d3e]">
          Universities partner with CircleCross because we maintain a strict boundary between
          institutional opportunity discovery and student privacy.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#626c4d]/20 pt-6 max-md:grid-cols-1">
          <div>
            <h4 className="flex items-center gap-2 text-xs font-[600] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive" />
              Zero Social Surveillance
            </h4>
            <p className="mt-2 text-xs leading-[1.7] text-[#4a4d3e]">
              Institutions receive aggregate programme reach and confirmed participation metrics,
              never individual student chat logs or private relationship graphs.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-[600] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive" />
              No Continuous GPS Tracking
            </h4>
            <p className="mt-2 text-xs leading-[1.7] text-[#4a4d3e]">
              Around You and CrossPoints rely on voluntary, opt-in proximity within approved campus
              precincts. Students' movement paths are never recorded or mapped.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-[600] tracking-[0.06em] text-ink uppercase">
              <CheckCircle2 className="size-3.5 text-olive" />
              SSO & Identity Sovereignty
            </h4>
            <p className="mt-2 text-xs leading-[1.7] text-[#4a4d3e]">
              Students authenticate through university email or SSO without copying institutional
              passwords. Profile disclosure across degree, interests, and background is 100% opt-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
