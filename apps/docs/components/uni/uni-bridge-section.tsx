import { Briefcase, ChevronRight, GraduationCap, ShieldCheck } from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";
import { Arrow } from "../ui";

export function UniBridgeSection() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/30`}>
      <div className="max-w-[760px]">
        <p className={eyebrow}>The Lifecycle Continuum</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          From lecture theatres to boardrooms. <em>One continuous graph.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Unlike institutional portals that deactivate your student account six months after
          graduation, CircleCross preserves your consenting relationships. Your study groups,
          project collaborators, and campus circles bridge smoothly into verified professional
          networks.
        </p>
      </div>

      {/* Double-Bezel Hardware Enclosure for Bridge Experience */}
      <div className="mt-16 rounded-[2.25rem] bg-black/5 p-1.5 ring-1 ring-black/5 shadow-[0_8px_30px_rgba(41,42,36,0.06)]">
        <div className="rounded-[calc(2.25rem-0.375rem)] bg-paper p-10 max-md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
          <div className="grid grid-cols-12 items-center gap-8 max-[1100px]:gap-6">
            {/* Campus Identity */}
            <div className="col-span-12 md:col-span-5 rounded-[1.5rem] border border-olive/25 bg-[#eef1e6]/80 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-olive/20 text-[#343a29]">
                  <GraduationCap className="size-4.5" />
                </span>
                <div>
                  <span className="text-[10px] font-[650] tracking-[0.08em] text-olive uppercase">
                    Stage 01
                  </span>
                  <h3 className="text-sm font-[650] text-ink">CircleCross Uni</h3>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-xs leading-[1.65] text-[#3f4334]">
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

            {/* The Bridge Indicator */}
            <div className="col-span-12 md:col-span-2 flex flex-col items-center justify-center text-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-ink text-paper shadow-md max-md:rotate-90">
                <ChevronRight className="size-5" />
              </span>
              <span className="mt-2 text-[10px] font-[650] tracking-[0.08em] text-soft uppercase">
                University Bridge
              </span>
            </div>

            {/* Professional Identity */}
            <div className="col-span-12 md:col-span-5 rounded-[1.5rem] border border-pro/25 bg-[#eef0f7]/80 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-pro/20 text-[#343547]">
                  <Briefcase className="size-4.5 text-pro" />
                </span>
                <div>
                  <span className="text-[10px] font-[650] tracking-[0.08em] text-pro uppercase">
                    Stage 02
                  </span>
                  <h3 className="text-sm font-[650] text-ink">CircleCross Pro</h3>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-xs leading-[1.65] text-[#343547]">
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

          {/* Call to Explore Pro */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-8 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-2 text-xs font-[500] text-soft">
              <ShieldCheck className="size-4 text-copper" />
              <span>Full cryptographic consent: you choose which relationships carry forward.</span>
            </div>
            <a
              href="/pro"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-xs font-[550] tracking-[0.04em] text-paper shadow-md transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#383a31] active:scale-[0.98]"
            >
              <span>Explore CircleCross Pro</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <Arrow diagonal />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
