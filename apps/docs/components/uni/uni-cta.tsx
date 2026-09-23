"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { writeWorldPreference } from "../../lib/world-preference";
import { SiteButton } from "../site-button";
import { eyebrow, hSection, pageInset, pyDense } from "../styles";
import { Arrow } from "../ui";

export function UniCta() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saved" | "unavailable">("idle");

  const chooseUni = async () => {
    const ok = await writeWorldPreference("University");
    if (!ok) {
      setStatus("unavailable");
      return;
    }
    setStatus("saved");
    router.push("/#start");
  };

  return (
    <section
      className={`${pageInset} ${pyDense} border-t border-border bg-start text-start-cream`}
      id="choose"
    >
      <div className="flex items-end justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-10">
        <div className="min-w-0 max-w-[42ch]">
          <p className={`${eyebrow} text-start-cream`}>Begin your campus journey</p>
          <h2 className={`${hSection} mb-5 text-start-cream`}>Choose CircleCross Uni.</h2>
          <p className="text-sm leading-[1.8] text-[#f6e1d3]">
            Save your world preference on this device to orient your experience around campus life,
            academic cohorts, and real-world circles.
          </p>
        </div>

        <div className="shrink-0">
          <SiteButton variant="primary" light onClick={chooseUni}>
            Set Uni as My World Preference
          </SiteButton>

          <p
            className="mt-4 min-h-[30px] max-w-[320px] text-[10px] leading-[1.7] text-[#f6e1d3]"
            role="status"
          >
            {status === "saved"
              ? "Your preference for CircleCross Uni is saved. Heading to your circle on the homepage..."
              : status === "unavailable"
                ? "Your browser could not save this preference locally, but you can explore freely."
                : null}
          </p>

          <div className="mt-4 border-t border-white/20 pt-4">
            <span className="text-[11px] text-white/70">Also building your career? </span>
            <SiteButton variant="link" href="/pro" className="text-white hover:text-white/90">
              Explore CircleCross Professional <Arrow diagonal />
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
