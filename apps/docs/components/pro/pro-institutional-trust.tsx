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
import { eyebrow, hSection, hSubsection, pageInset } from "../styles";

const ENTERPRISE_PACKAGES = [
  {
    name: "CircleCross Welcome Pro",
    focus: "New Starter Onboarding & Acclimation",
    description:
      "Includes First 90 Pro journey, cross-functional onboarding buddies, reception CrossPoints, and team discovery trails.",
    value: "Reduces ramp time and employee turnover in the critical first quarter.",
    icon: Compass,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    name: "CircleCross Connect Pro",
    focus: "Cross-Functional Belonging & Guilds",
    description:
      "Craft Guilds, Pro Circles, Lunch Across Teams, and spontaneous CrossCoffee pairing across distributed teams.",
    value: "Dismantles corporate department silos and builds cross-functional empathy.",
    icon: Users,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    name: "CircleCross Summits & Events",
    focus: "Conferences, Offsites & Summits",
    description:
      "Event CrossPoints, conference companions, interactive session discussions, and walking 1:1 scheduling.",
    value: "Maximises return on corporate offsites and trade show investments.",
    icon: MapPin,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    name: "CircleCross Growth & Mentoring",
    focus: "Peer Leadership & Skill Exchanges",
    description:
      "Two-way reciprocal mentoring, CrossLab challenges, skill exchange clinics, and organic leadership development.",
    value: "Accelerates internal promotion pipelines and peer knowledge transfer.",
    icon: Award,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
  {
    name: "CircleCross Talent & Alumni",
    focus: "Lifelong Alumni & Partner Networks",
    description:
      "Corporate alumni circles, contractor talent pools, and user-governed Uni-to-Pro graduate bridges.",
    value: "Transforms departing staff into lifelong commercial brand advocates.",
    icon: GraduationCap,
    accent: "text-pro",
    bgAccent: "bg-pro/15",
  },
  {
    name: "CircleCross Enterprise Insights",
    focus: "Network Density & Aggregated Analytics",
    description:
      "Departmental cross-pollination metrics, onboarding health signals, and anonymous organizational connectivity indices.",
    value: "Provides executive organizational health insights with zero surveillance.",
    icon: PieChart,
    accent: "text-copper",
    bgAccent: "bg-copper/15",
  },
];

export function ProInstitutionalTrust() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`} id="institutional">
      <div className="max-w-[760px]">
        <p className={eyebrow}>Enterprise Partnership & Deployment</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          Engineered for governance, <em>data sovereignty,</em> and privacy.
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          CircleCross Pro scales across global enterprises, distributed teams, and industry
          associations with SOC2-ready architecture, Okta/Azure SSO, and employee data sovereignty.
        </p>
      </div>

      {/* Commercial Packages Double-Bezel Grid */}
      <div className="mt-16 grid grid-flow-dense grid-cols-12 gap-6 max-md:gap-5">
        {ENTERPRISE_PACKAGES.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <article
              key={pkg.name}
              className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-paper p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div>
                  <div className="flex items-center justify-between border-b border-line/70 pb-4">
                    <span className="text-[10px] font-[650] tracking-[0.08em] text-[#343547] uppercase">
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
                  <span className="text-[11px] font-[600] text-ink">Enterprise ROI: </span>
                  <span className="text-[11px] leading-[1.65] text-soft">{pkg.value}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Double-Bezel Trust & Safeguarding Principles Enclosure */}
      <div className="mt-16 rounded-[2.25rem] bg-pro/15 p-1.5 ring-1 ring-pro/30 shadow-[0_8px_30px_rgba(99,100,124,0.08)]">
        <div className="rounded-[calc(2.25rem-0.375rem)] bg-[#eff1f8] p-10 max-md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-pro/20 text-[#343547]">
              <ShieldCheck className="size-5 text-pro" aria-hidden="true" />
            </span>
            <h3 className={`${hSubsection} text-[#292a24]`}>The Enterprise Trust Guarantee</h3>
          </div>

          <p className="mt-4 max-w-[68ch] text-sm leading-[1.8] text-[#343547]">
            Enterprises partner with CircleCross Pro because we strictly maintain human dignity and
            confidentiality: zero workplace surveillance, zero private message snooping.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-pro/20 pt-8 max-md:grid-cols-1">
            <div className="rounded-[1.25rem] bg-white/70 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-pro shrink-0" />
                Zero Social Surveillance
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#343547]">
                Leadership receives anonymised cross-functional interaction density signals, never
                individual chat transcripts, private calendars, or colleague graphs.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/70 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-pro shrink-0" />
                No Continuous Office Tracking
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#343547]">
                Workplace CrossPoints operate via voluntary, physical QR check-ins. Employees are
                never tracked through continuous beaconing, RFID, or GPS.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/70 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
              <h4 className="flex items-center gap-2 text-xs font-[650] tracking-[0.06em] text-ink uppercase">
                <CheckCircle2 className="size-3.5 text-pro shrink-0" />
                Individual Graph Sovereignty
              </h4>
              <p className="mt-2.5 text-xs leading-[1.7] text-[#343547]">
                Relationships cultivated on CircleCross remain personal intellectual property. When
                an employee transitions to a new role, their network stays with them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
