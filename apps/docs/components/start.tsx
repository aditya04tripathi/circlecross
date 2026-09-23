"use client";

import { Label } from "@circlecross/ui/components/label";
import { cn } from "cn";
import { useEffect, useEffectEvent, useId, useState } from "react";
import {
  readWorldPreference,
  type WorldChoice,
  writeWorldPreference,
} from "../lib/world-preference";
import { Logo } from "./logo";
import { eyebrow, pageInset } from "./styles";
import { WorldRows } from "./world-rows";

const VALID: WorldChoice[] = ["University", "Professional"];

export function Start() {
  const [choice, setChoice] = useState<WorldChoice>("University");
  const [saved, setSaved] = useState<"idle" | "saved" | "unavailable">("idle");
  const labelId = useId();

  const activate = useEffectEvent(async (next: WorldChoice) => {
    setChoice(next);
    if (await writeWorldPreference(next)) {
      setSaved("saved");
    } else {
      setSaved("unavailable");
    }
  });

  useEffect(() => {
    const stored = readWorldPreference();
    if (stored) {
      setChoice(stored);
      setSaved("saved");
    }
  }, []);

  useEffect(() => {
    const choose = (event: Event) => {
      if (
        event instanceof CustomEvent &&
        typeof event.detail === "string" &&
        VALID.includes(event.detail as WorldChoice)
      ) {
        activate(event.detail as WorldChoice);
      }
    };
    window.addEventListener("circlecross:choose", choose);
    return () => window.removeEventListener("circlecross:choose", choose);
  }, []);

  return (
    <section
      className={cn(
        pageInset,
        "relative scroll-mt-10 overflow-hidden bg-start py-[70px] text-center text-start-cream max-[1100px]:py-16 max-[1100px]:[&_[data-start-action]]:min-w-[40%] max-md:py-14 [&_a:focus-visible]:outline-white [&_button:focus-visible]:outline-white",
      )}
      id="start"
    >
      <div className="flex items-center justify-between text-left">
        <p className={cn(eyebrow, "mb-6 max-md:mb-0 max-md:max-w-[220px] max-md:leading-[1.7]")}>
          Your next chapter starts with a hello.
        </p>
        <Logo type="mark" className="h-auto w-[65px] text-start-cream max-md:w-10" />
      </div>
      <h2 className="mt-2 text-[clamp(64px,9.5vw,140px)] leading-[1.02] tracking-[-0.07em] max-md:mt-6 max-md:text-[15vw] [&_em]:tracking-[-0.06em] [&_em]:text-start-cream">
        Your people
        <br />
        are{" "}
        <u>
          <em>out there</em>
        </u>
      </h2>
      <div className="mt-6 flex items-center justify-between gap-16 text-left max-md:mt-6 max-md:flex-col max-md:items-start max-md:gap-8">
        <p className="max-w-[28ch] text-sm leading-[1.8] max-md:text-xs">
          A friend you haven't met.
          <br />
          An idea you haven't shared.
          <br />A circle you haven't found. Yet.
        </p>
        <div
          className="min-w-0 max-w-[400px] shrink-0 max-md:w-full max-md:max-w-none"
          data-start-action
        >
          <Label id={labelId} className="mb-[15px] block text-[11px]">
            Where will your story go?
          </Label>
          <WorldRows labelledBy={labelId} value={choice} onActivate={activate} />
          <p
            className="mt-[15px] min-h-[35px] max-w-[465px] text-[10px] leading-[1.7] text-[#f6e1d3]"
            role="status"
          >
            {saved === "saved"
              ? `Your ${choice} preference is saved on this device. CircleCross is taking shape. Come back for launch updates.`
              : saved === "unavailable"
                ? `You chose ${choice}. Your browser could not save this preference. You can still explore every CircleCross world.`
                : null}
          </p>
        </div>
      </div>
    </section>
  );
}
