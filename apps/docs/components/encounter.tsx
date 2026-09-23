"use client";

import { Toggle } from "@circlecross/ui/components/toggle";
import { useGSAP } from "@gsap/react";
import { cn } from "cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { encounterToggle, eyebrow, hSection, pageInset, pyDense } from "./styles";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const encounters = [
  {
    name: "The same curiosity.",
    place: "At a weekend photo walk",
    you: "You",
    other: "A fellow wanderer",
    meet: "Walking together",
    detail: "A shared interest gets you talking. A mutual invitation keeps the conversation going.",
    youPath: "M 72 330 C 130 300 210 250 300 210",
    otherPath: "M 528 78 C 470 110 390 170 300 210",
  },
  {
    name: "The same campus.",
    place: "After the afternoon lecture",
    you: "You",
    other: "Your next study partner",
    meet: "Studying together",
    detail:
      "Turn a familiar face into a study group, a new club, or a friendship beyond the lecture hall.",
    youPath: "M 88 70 C 100 160 180 210 300 210",
    otherPath: "M 512 350 C 500 260 420 210 300 210",
  },
  {
    name: "The next possibility.",
    place: "Between sessions at an event",
    you: "You",
    other: "A thoughtful mentor",
    meet: "In conversation",
    detail:
      "Find the people behind the job titles. Build relationships around ideas you both care about.",
    youPath: "M 70 110 C 160 150 230 195 300 210",
    otherPath: "M 530 110 C 440 150 370 195 300 210",
  },
] as const;

const worlds = ["Out in the world", "On campus", "At work"] as const;

function pointOnPath(path: SVGPathElement | null, progress: number) {
  if (!path) return { x: 300, y: 210 };
  const length = path.getTotalLength();
  const point = path.getPointAtLength(length * Math.min(1, Math.max(0, progress)));
  return { x: point.x, y: point.y };
}

export function Encounter() {
  const [selected, setSelected] = useState(0);
  const [crossed, setCrossed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const youPathRef = useRef<SVGPathElement>(null);
  const otherPathRef = useRef<SVGPathElement>(null);
  const youDotRef = useRef<SVGGElement>(null);
  const otherDotRef = useRef<SVGGElement>(null);
  const youLabelRef = useRef<HTMLSpanElement>(null);
  const otherLabelRef = useRef<HTMLSpanElement>(null);
  const meetLabelRef = useRef<HTMLSpanElement>(null);
  const meetRef = useRef<SVGCircleElement>(null);
  const progressRef = useRef(0.08);
  const crossedRef = useRef(false);
  const item = encounters[selected] ?? encounters[0];

  const placeTravelers = useEffectEvent((progress: number) => {
    progressRef.current = progress;
    const you = pointOnPath(youPathRef.current, progress);
    const other = pointOnPath(otherPathRef.current, progress);
    gsap.set(youDotRef.current, {
      attr: { transform: `translate(${you.x} ${you.y})` },
    });
    gsap.set(otherDotRef.current, {
      attr: { transform: `translate(${other.x} ${other.y})` },
    });
    gsap.set(youLabelRef.current, {
      left: `${(you.x / 600) * 100}%`,
      top: `${(you.y / 420) * 100}%`,
    });
    gsap.set(otherLabelRef.current, {
      left: `${(other.x / 600) * 100}%`,
      top: `${(other.y / 420) * 100}%`,
    });
    const atMeet = progress > 0.92;
    if (atMeet !== crossedRef.current) {
      crossedRef.current = atMeet;
      setCrossed(atMeet);
      gsap.to(meetRef.current, {
        opacity: atMeet ? 1 : 0,
        attr: { r: atMeet ? 26 : 14 },
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to([youLabelRef.current, otherLabelRef.current], {
        opacity: atMeet ? 0 : 1,
        scale: atMeet ? 0.92 : 1,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(meetLabelRef.current, {
        opacity: atMeet ? 1 : 0,
        scale: atMeet ? 1 : 0.92,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  });

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        placeTravelers(1);
        return;
      }

      placeTravelers(0.08);
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "center center",
        scrub: 0.65,
        onUpdate: (self) => placeTravelers(0.08 + self.progress * 0.92),
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    const youPath = youPathRef.current;
    const otherPath = otherPathRef.current;
    if (!youPath || !otherPath) return;
    youPath.setAttribute("d", item.youPath);
    otherPath.setAttribute("d", item.otherPath);
    placeTravelers(progressRef.current);
    ScrollTrigger.refresh();
  }, [item.otherPath, item.youPath]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        pageInset,
        pyDense,
        "scroll-mt-10 grid grid-cols-2 items-center gap-[4%] bg-encounter max-[1100px]:gap-[3%] max-md:grid-cols-1 max-md:items-start max-md:gap-8",
      )}
      id="connections"
    >
      <div>
        <p className={cn(eyebrow, "mb-5 max-md:mb-4")}>A moment. A possibility.</p>
        <h2 className={cn(hSection, "max-w-[14ch]")}>
          You already have something <em>in common.</em>
        </h2>
        <p className="mt-5 text-base leading-[1.7] text-[#5a6151] max-md:mt-4">
          Same place. Shared interest. A familiar face.
          <br />
          Sometimes, that's all a connection needs.
        </p>
        <fieldset className="mt-7 flex min-w-0 flex-wrap gap-[5px] border-0 p-0 max-md:mt-5 max-md:gap-1.5">
          <legend className="sr-only">Explore encounter scenarios</legend>
          {worlds.map((label, i) => (
            <Toggle
              key={label}
              pressed={selected === i}
              onPressedChange={(pressed) => {
                if (pressed) setSelected(i);
              }}
              size="lg"
              className={encounterToggle}
            >
              {label}
            </Toggle>
          ))}
        </fieldset>
        <h3 className="mt-6 text-lg font-[450] tracking-[-0.03em]">{item.name}</h3>
        <p className="mt-2 max-w-[360px] text-sm leading-[1.7] text-[#5a6151]">{item.detail}</p>
        <p className="mt-4 text-[10px] tracking-[0.06em] text-[#373d2b] uppercase max-md:mt-3">
          {crossed ? "Paths crossed" : "Scroll to cross paths"}
        </p>
      </div>
      <div className="min-w-0">
        <div className="relative aspect-[600/380] w-full" aria-hidden="true">
          <svg className="size-full overflow-visible" viewBox="0 0 600 420" focusable="false">
            <title>Paths crossing</title>
            <path
              ref={youPathRef}
              d={item.youPath}
              fill="none"
              stroke="#68734b"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.55"
            />
            <path
              ref={otherPathRef}
              d={item.otherPath}
              fill="none"
              stroke="#68734b"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.55"
            />
            <circle
              ref={meetRef}
              cx="300"
              cy="210"
              r="14"
              fill="none"
              stroke="#76844e"
              strokeWidth="1.2"
              opacity="0"
            />
            <circle cx="300" cy="210" r="3" fill="#76844e" opacity="0.35" />
            <g ref={youDotRef} transform="translate(72 330)">
              <circle r="8" fill="#424b33" stroke="#e8e9df" strokeWidth="3" />
            </g>
            <g ref={otherDotRef} transform="translate(528 78)">
              <circle r="8" fill="#76844e" stroke="#e8e9df" strokeWidth="3" />
            </g>
          </svg>
          <span
            ref={youLabelRef}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-[140%] rounded-full border border-[#525c3520] bg-[#f5f3e9] px-3.5 py-2 text-[11px] whitespace-nowrap shadow-[0_5px_20px_#34401b09] max-[1100px]:text-[9px]"
          >
            {item.you}
          </span>
          <span
            ref={otherLabelRef}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-[140%] rounded-full border border-[#525c3520] bg-[#f5f3e9] px-3.5 py-2 text-[11px] whitespace-nowrap shadow-[0_5px_20px_#34401b09] max-[1100px]:text-[9px]"
          >
            {item.other}
          </span>
          <span
            ref={meetLabelRef}
            className="pointer-events-none absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[160%] rounded-full border border-[#525c3535] bg-[#f5f3e9] px-4 py-2 text-[11px] whitespace-nowrap opacity-0 shadow-[0_5px_20px_#34401b12] max-[1100px]:text-[9px]"
          >
            {item.meet}
          </span>
          <span className="absolute bottom-0 left-0 text-[9px] tracking-[0.04em] text-olive">
            An encounter, illustrated
          </span>
        </div>
      </div>
    </section>
  );
}
