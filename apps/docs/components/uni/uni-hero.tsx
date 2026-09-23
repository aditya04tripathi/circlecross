import { Compass, GraduationCap, QrCode, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteButton } from "../site-button";
import { hHero, pageInset } from "../styles";
import { Arrow } from "../ui";

export function UniHero() {
  return (
    <section
      className={`${pageInset} relative isolate overflow-hidden pt-[145px] pb-20 max-md:pt-[112px] max-md:pb-14`}
      id="hero"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute top-[-100px] right-[-120px] -z-10 size-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(98,108,77,0.14)_0%,transparent_70%)] blur-2xl max-md:size-[400px]"
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-[#626c4d]/10 px-3.5 py-1 text-[11px] font-[550] tracking-[0.08em] text-[#373d2b] uppercase">
          <GraduationCap className="size-3.5 text-olive" aria-hidden="true" />
          CircleCross Uni · ConnectOS
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-[10px] text-soft">
          <ShieldCheck className="size-3 text-copper" aria-hidden="true" />
          Monash-First & Go8-Ready Architecture
        </span>
      </div>

      <h1 className={`${hHero} mt-8 mb-6 max-w-[15ch] text-[clamp(52px,7.5vw,112px)]`}>
        The relationship and <em>participation layer</em> for university life.
      </h1>

      <p className="max-w-[34ch] text-[clamp(24px,2.8vw,38px)] leading-[1.2] tracking-[-0.035em] text-[#35392e]">
        Students discover institutional opportunities, participate in real-world experiences, and
        voluntarily return to participate again.
      </p>

      <p className="mt-8 max-w-[58ch] text-base leading-[1.8] text-soft max-md:text-sm">
        ConnectOS wraps around official university systems — from orientation and peer mentoring to
        LMS units, PASS, campus landmarks, skills training, and alumni networks. It turns
        institutional silos into real-world belonging without social surveillance.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-stretch">
        <SiteButton variant="primary" href="#programmes">
          Explore Signature Programmes
        </SiteButton>
        <SiteButton variant="secondary" href="#connectos">
          How ConnectOS Integrates <Arrow diagonal />
        </SiteButton>
      </div>

      {/* Feature Pillar Badges Grid */}
      <div className="mt-16 grid grid-cols-4 gap-4 border-t border-line pt-10 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        <div className="rounded-[14px] border border-line/80 bg-white/40 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-olive/15 text-olive">
              <Compass className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-[550] tracking-[0.06em] text-ink uppercase">
              First 50 Journey
            </span>
          </div>
          <p className="mt-3 text-xs leading-[1.7] text-soft">
            50-day onboarding from pre-arrival to Week 7, turning O-Week into lasting connections.
          </p>
        </div>

        <div className="rounded-[14px] border border-line/80 bg-white/40 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-copper/15 text-copper">
              <QrCode className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-[550] tracking-[0.06em] text-ink uppercase">
              CrossPoints & Quests
            </span>
          </div>
          <p className="mt-3 text-xs leading-[1.7] text-soft">
            QR checkpoints at campus landmarks unlocking stories, challenges, and companion
            discovery.
          </p>
        </div>

        <div className="rounded-[14px] border border-line/80 bg-white/40 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-olive/15 text-olive">
              <Users className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-[550] tracking-[0.06em] text-ink uppercase">
              Unit Circles & PASS
            </span>
          </div>
          <p className="mt-3 text-xs leading-[1.7] text-soft">
            Opt-in CourseMates, study matching, and companions for official peer-assisted study.
          </p>
        </div>

        <div className="rounded-[14px] border border-line/80 bg-white/40 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-copper/15 text-copper">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-[550] tracking-[0.06em] text-ink uppercase">
              Skill Circle & Swaps
            </span>
          </div>
          <p className="mt-3 text-xs leading-[1.7] text-soft">
            Short-course cohorts for RSA, barista, and first aid, plus non-regulated peer skill
            exchanges.
          </p>
        </div>
      </div>
    </section>
  );
}
