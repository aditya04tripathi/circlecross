import { ShieldCheck } from "lucide-react";
import { eyebrow, hSection, pageInset } from "../styles";

export function ProLifespanSection() {
  return (
    <section className={`${pageInset} py-28 md:py-36 border-t border-border`}>
      <div className="w-full lg:w-3/4 max-w-5xl">
        <p className={eyebrow}>Career Lifespan Architecture</p>
        <h2 className={`${hSection} mb-6 w-full`}>
          A relationship graph that outlasts <em>any single employer.</em>
        </h2>
        <p className="text-base leading-[1.8] text-soft max-w-[65ch]">
          Corporate tools like Slack, Teams, and internal directories deactivate the minute you hand
          back your laptop. CircleCross Pro gives you sovereign ownership of your professional
          network. Every trusted colleague, mentor, and collaborator remains in your constellation
          forever.
        </p>
      </div>

      {/* Clean Horizontal Career Continuum (Zero Card Inception) */}
      <div className="mt-16 grid grid-cols-12 gap-8 border-y border-line/70 py-12 max-md:gap-8">
        {/* Career Stage 01: Graduate */}
        <div className="col-span-12 md:col-span-4 border-l-2 border-pro pl-4">
          <span className="text-[10px] font-mono font-[650] tracking-[0.08em] text-pro uppercase">
            01 · Foundation
          </span>
          <h3 className="mt-2 text-base font-[650] text-ink">University to First Role</h3>
          <p className="mt-2 text-xs leading-[1.7] text-soft">
            Graduate circles and project teams transition directly from Uni into your early career
            network, giving you instant peer sounding boards.
          </p>
        </div>

        {/* Career Stage 02: Scale */}
        <div className="col-span-12 md:col-span-4 border-l-2 border-copper pl-4">
          <span className="text-[10px] font-mono font-[650] tracking-[0.08em] text-copper uppercase">
            02 · Expansion
          </span>
          <h3 className="mt-2 text-base font-[650] text-ink">Cross-Functional Leadership</h3>
          <p className="mt-2 text-xs leading-[1.7] text-soft">
            First 90 Pro onboarding, Lunch Across Teams, and conference CrossPoints link you with
            peers across departments, industries, and continents.
          </p>
        </div>

        {/* Career Stage 03: Executive / Advisory */}
        <div className="col-span-12 md:col-span-4 border-l-2 border-pro pl-4">
          <span className="text-[10px] font-mono font-[650] tracking-[0.08em] text-pro uppercase">
            03 · Sovereignty
          </span>
          <h3 className="mt-2 text-base font-[650] text-ink">Advisory & Ventures</h3>
          <p className="mt-2 text-xs leading-[1.7] text-soft">
            When you move between firms or launch new ventures, your verified professional graph
            persists with 100% cryptographic sovereignty.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs font-[500] text-soft">
        <ShieldCheck className="size-4 text-copper" />
        <span>Full privacy control: your employer never sees your independent graph.</span>
      </div>
    </section>
  );
}
