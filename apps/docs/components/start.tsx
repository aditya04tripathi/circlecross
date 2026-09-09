"use client";
import { useEffect, useState } from "react";
import { Arrow, Mark } from "./ui";
export function Start() {
  const [choice, setChoice] = useState("Go");
  const [saved, setSaved] = useState<"idle" | "saved" | "unavailable">("idle");
  useEffect(() => {
    const choose = (event: Event) => {
      if (
        event instanceof CustomEvent &&
        typeof event.detail === "string" &&
        ["Go", "Uni", "Pro"].includes(event.detail)
      ) {
        setChoice(event.detail);
        setSaved("idle");
      }
    };
    window.addEventListener("circlecross:choose", choose);
    return () => window.removeEventListener("circlecross:choose", choose);
  }, []);
  return (
    <section className="start section-space" id="start">
      <div className="start-top">
        <p className="eyebrow">Your next chapter starts with a hello.</p>
        <Mark />
      </div>
      <h2>
        Your people
        <br />
        are <em>out there.</em>
      </h2>
      <div className="start-bottom">
        <p>
          A friend you haven&apos;t met.
          <br />
          An idea you haven&apos;t shared.
          <br />A circle you haven&apos;t found. Yet.
        </p>
        <div className="start-action">
          <label htmlFor="world-choice">Where will your story go?</label>
          <div className="choice-row">
            <select
              id="world-choice"
              value={choice}
              onChange={(event) => {
                setChoice(event.target.value);
                setSaved("idle");
              }}
            >
              <option value="Go">CircleCross Go</option>
              <option value="Uni">CircleCross Uni</option>
              <option value="Pro">CircleCross Pro</option>
            </select>
            <button
              type="button"
              className="button button-light"
              onClick={() => {
                try {
                  localStorage.setItem("circlecross-world", choice);
                  setSaved("saved");
                } catch {
                  setSaved("unavailable");
                }
              }}
            >
              Choose your circle
              <span className="button-icon">
                <Arrow diagonal />
              </span>
            </button>
          </div>
          <p className="start-status" role="status">
            {saved === "saved"
              ? `Your ${choice} preference is saved on this device. CircleCross is taking shape—come back for launch updates.`
              : saved === "unavailable"
                ? `You chose ${choice}. Your browser could not save this preference. You can still explore every CircleCross world.`
                : "A new way to connect is taking shape. Explore your world today."}
          </p>
        </div>
      </div>
    </section>
  );
}
