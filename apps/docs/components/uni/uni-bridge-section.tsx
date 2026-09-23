import { Briefcase, ChevronRight, GraduationCap, ShieldCheck } from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";

export function UniBridgeSection() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`}>
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>The Lifecycle Continuum</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          From lecture theatres to boardrooms. <em>One continuous graph.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Unlike institutional portals that deactivate your student account six months after
          graduation, CircleCross preserves your consenting relationships. Your study groups,
          project collaborators, and campus circles bridge smoothly into verified professional
          networks.
        </p>
      </div>

      {/* Clean Horizontal Continuum Track (Zero Card Inception) */}
      <div className="mt-16 grid grid-cols-12 items-center gap-8 border-y border-line/70 py-12 max-[1100px]:gap-6">
        {/* Stage 01: Campus */}
        <div className="col-span-12 md:col-span-5">
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
              <span className="size-1.5 rounded-full bg-olive" />
              Unit Circles & CourseMate study partners
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-olive" />
              Faculty societies, hackathons & makerspaces
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-olive" />
              Verified degree credentials & short courses
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

        {/* Stage 02: Career */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-end ">
          <div className="flex items-center gap-3">
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
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-pro" />
              Alumni cohorts in target industries & firms
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-pro" />
              First 90 Pro cross-functional onboarding
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-pro" />
              Independent graph: owned by you, not HR
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs font-[500] text-soft">
        <ShieldCheck className="size-4 text-copper" />
        <span>Full cryptographic consent: you choose which relationships carry forward.</span>
      </div>
    </section>
  );
}
