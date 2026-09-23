import { Briefcase, ChevronRight, GraduationCap, ShieldCheck } from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";

export function UniBridgeSection() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 w-full">
        <div className="w-full lg:w-3/4 max-w-4xl">
          <p className={eyebrow}>The Lifecycle Continuum</p>
          <h2 className={`${hSection} w-full`}>
            From lecture theatres to boardrooms. <em>One continuous graph.</em>
          </h2>
        </div>
        <p className="text-base leading-[1.8] text-soft max-w-[48ch] lg:text-right shrink-0">
          Unlike institutional portals that deactivate your student account six months after
          graduation, CircleCross preserves your consenting relationships into verified professional
          networks.
        </p>
      </div>

      {/* Clean Horizontal Continuum Track (Left & Right Aligned) */}
      <div className="mt-16 grid grid-cols-12 items-center gap-8 border-y border-line/70 py-12 max-[1100px]:gap-6">
        {/* Stage 01: Campus (Left-Aligned) */}
        <div className="col-span-12 md:col-span-5 text-left">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-olive/15 text-[#343a29]">
              <GraduationCap className="size-4.5" />
            </span>
            <div>
              <span className="text-[10px] font-[650] tracking-[0.08em] text-olive uppercase">
                Stage 01
              </span>
              <h3 className="text-base font-[650] text-ink">CircleCross Uni</h3>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5 text-xs leading-[1.7] text-soft">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-olive shrink-0" />
              <span>Unit Circles & CourseMate study partners</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-olive shrink-0" />
              <span>Faculty societies, hackathons & makerspaces</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-olive shrink-0" />
              <span>Verified degree credentials & short courses</span>
            </li>
          </ul>
        </div>

        {/* Transition Bridge */}
        <div className="col-span-12 md:col-span-2 flex flex-col items-center justify-center text-center">
          <span className="flex size-9 items-center justify-center rounded-full bg-ink text-paper shadow-sm max-md:rotate-90">
            <ChevronRight className="size-4" />
          </span>
          <span className="mt-2 text-[10px] font-[650] tracking-[0.08em] text-soft uppercase">
            University Bridge
          </span>
        </div>

        {/* Stage 02: Career (Right-Aligned) */}
        <div className="col-span-12 md:col-span-5 flex flex-col md:items-end text-left md:text-right">
          <div className="flex items-center gap-3 md:flex-row-reverse">
            <span className="grid size-9 place-items-center rounded-full bg-pro/15 text-[#343547]">
              <Briefcase className="size-4.5 text-pro" />
            </span>
            <div>
              <span className="text-[10px] font-[650] tracking-[0.08em] text-pro uppercase">
                Stage 02
              </span>
              <h3 className="text-base font-[650] text-ink">CircleCross Pro</h3>
            </div>
          </div>
          <ul className="mt-4 space-y-2.5 text-xs leading-[1.7] text-soft">
            <li className="flex items-center gap-2 md:flex-row-reverse">
              <span className="size-1.5 rounded-full bg-pro shrink-0" />
              <span>Alumni cohorts in target industries & firms</span>
            </li>
            <li className="flex items-center gap-2 md:flex-row-reverse">
              <span className="size-1.5 rounded-full bg-pro shrink-0" />
              <span>First 90 Pro cross-functional onboarding</span>
            </li>
            <li className="flex items-center gap-2 md:flex-row-reverse">
              <span className="size-1.5 rounded-full bg-pro shrink-0" />
              <span>Independent graph: owned by you, not HR</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-[500] text-soft">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-copper" />
          <span>Full cryptographic consent: you choose which relationships carry forward.</span>
        </div>
        <span className="font-mono text-[11px] text-soft/80">Sovereignty Protocol v2.4</span>
      </div>
    </section>
  );
}
