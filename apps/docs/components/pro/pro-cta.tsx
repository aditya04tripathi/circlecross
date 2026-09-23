"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { writeWorldPreference } from "../../lib/world-preference";
import { eyebrow, hSection, pageInset } from "../styles";
import { Arrow } from "../ui";

export function ProCta() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saved" | "unavailable">("idle");

  const choosePro = async () => {
    const ok = await writeWorldPreference("Professional");
    if (!ok) {
      setStatus("unavailable");
      return;
    }
    setStatus("saved");
    router.push("/#start");
  };

  return (
    <section
      className={`${pageInset} py-28 md:py-36 border-t border-border bg-start text-start-cream`}
      id="choose"
    >
      <div className="flex items-end justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-10">
        <div className="min-w-0 max-w-[44ch]">
          <p className={`${eyebrow} text-start-cream font-[600]`}>Empower your career network</p>
          <h2 className={`${hSection} mb-5 text-start-cream`}>Choose CircleCross Pro.</h2>
          <p className="text-sm leading-[1.8] text-[#f6e1d3]">
            Save your world preference on this device to orient your experience around industry
            cohorts, executive mentoring, and cross-functional circles.
          </p>
        </div>

        <div className="shrink-0">
          {/* Button-in-button nested architecture */}
          <button
            type="button"
            onClick={choosePro}
            className="group flex items-center justify-between gap-4 rounded-full bg-paper px-6 py-4 text-xs font-[600] tracking-[0.04em] text-ink shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#fffdf9] active:scale-[0.98]"
          >
            <span>Set Pro as My World Preference</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-ink/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[0.5px] group-hover:scale-105">
              <Arrow />
            </span>
          </button>

          <p
            className="mt-4 min-h-[30px] max-w-[340px] text-xs leading-[1.7] text-[#f6e1d3]"
            role="status"
          >
            {status === "saved"
              ? "Your preference for CircleCross Pro is saved. Heading to your circle on the homepage..."
              : status === "unavailable"
                ? "Your browser could not save this preference locally, but you can explore freely."
                : null}
          </p>

          <div className="mt-5 border-t border-white/20 pt-4">
            <span className="text-xs text-white/80">Exploring campus life? </span>
            <a
              href="/uni"
              className="inline-flex items-center gap-1.5 text-xs font-[600] text-white hover:underline"
            >
              <span>Explore CircleCross University</span>
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
