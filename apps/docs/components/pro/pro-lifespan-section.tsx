import { ShieldCheck } from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";
import { Arrow } from "../ui";

export function ProLifespanSection() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border bg-[#ece8de]/30`}>
      <div className="max-w-[760px]">
        <p className={eyebrow}>Career Lifespan Architecture</p>
        <h2 className={`${hSection} mb-6 max-w-[17ch]`}>
          A relationship graph that outlasts <em>any single employer.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-md:text-sm">
          Corporate tools like Slack, Teams, and internal directories deactivate the minute you hand
          back your laptop. CircleCross Pro gives you sovereign ownership of your professional
          network. Every trusted colleague, mentor, and collaborator remains in your constellation
          forever.
        </p>
      </div>

      {/* Double-Bezel Hardware Enclosure for Career Lifespan Continuum */}
      <div className="mt-16 rounded-[2.25rem] bg-black/5 p-1.5 ring-1 ring-black/5 shadow-[0_8px_30px_rgba(41,42,36,0.06)]">
        <div className="rounded-[calc(2.25rem-0.375rem)] bg-paper p-10 max-md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
          <div className="grid grid-cols-12 gap-6 max-md:gap-4">
            {/* Career Stage 01: Graduate */}
            <div className="col-span-12 md:col-span-4 rounded-[1.5rem] border border-pro/20 bg-[#eff1f8]/75 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <span className="text-[10px] font-[650] tracking-[0.08em] text-pro uppercase">
                Foundation
              </span>
              <h3 className="mt-2 text-base font-[650] text-ink">University to First Role</h3>
              <p className="mt-2 text-xs leading-[1.7] text-[#343547]">
                Graduate circles and project teams transition directly from Uni into your early
                career network, giving you instant peer sounding boards.
              </p>
            </div>

            {/* Career Stage 02: Scale */}
            <div className="col-span-12 md:col-span-4 rounded-[1.5rem] border border-copper/25 bg-[#faf0ea]/75 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <span className="text-[10px] font-[650] tracking-[0.08em] text-copper uppercase">
                Expansion
              </span>
              <h3 className="mt-2 text-base font-[650] text-ink">Cross-Functional Leadership</h3>
              <p className="mt-2 text-xs leading-[1.7] text-soft">
                First 90 Pro onboarding, Lunch Across Teams, and conference CrossPoints link you
                with peers across departments, industries, and continents.
              </p>
            </div>

            {/* Career Stage 03: Executive / Advisory */}
            <div className="col-span-12 md:col-span-4 rounded-[1.5rem] border border-pro/20 bg-[#eff1f8]/75 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <span className="text-[10px] font-[650] tracking-[0.08em] text-pro uppercase">
                Sovereignty
              </span>
              <h3 className="mt-2 text-base font-[650] text-ink">Advisory & Ventures</h3>
              <p className="mt-2 text-xs leading-[1.7] text-[#343547]">
                When you move between firms or launch new ventures, your verified professional graph
                persists with 100% cryptographic sovereignty.
              </p>
            </div>
          </div>

          {/* Call to Action Footer inside enclosure */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-8 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-2 text-xs font-[500] text-soft">
              <ShieldCheck className="size-4 text-copper" />
              <span>Full privacy control: your employer never sees your independent graph.</span>
            </div>
            <a
              href="#choose"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-xs font-[550] tracking-[0.04em] text-paper shadow-md transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#383a31] active:scale-[0.98]"
            >
              <span>Set Pro as My World Preference</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
