"use client";

import { cn } from "cn";
import { useId } from "react";
import { worlds } from "../content/worlds";
import type { WorldChoice } from "../lib/world-preference";

export type { WorldChoice };

const OPTIONS = worlds.map((world) => world.name);

type WorldRowsProps = {
  value: WorldChoice;
  onActivate: (value: WorldChoice) => void;
  labelledBy?: string;
  className?: string;
};

export function WorldRows({ value, onActivate, labelledBy, className }: WorldRowsProps) {
  const fallbackId = useId();
  const groupName = labelledBy ?? fallbackId;
  const index = Math.max(0, OPTIONS.indexOf(value));

  const move = (delta: number) => {
    const next = OPTIONS[Math.min(OPTIONS.length - 1, Math.max(0, index + delta))];
    if (next) onActivate(next);
  };

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      className={cn("flex w-full max-w-[400px] flex-col max-md:max-w-none", className)}
      onKeyDown={(event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      {worlds.map((world) => {
        const active = world.name === value;
        const optionId = `${groupName}-${world.name}`;
        return (
          <label
            key={world.id}
            htmlFor={optionId}
            className={cn(
              "flex w-full cursor-pointer items-center rounded-[18px] px-5 py-[18px] text-left text-[22px] font-[450] tracking-[-0.04em] text-start-cream transition-[color,background] duration-300 ease-editorial has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white max-md:text-[20px]",
              active ? "bg-white/12" : "bg-transparent hover:bg-white/6",
            )}
          >
            <input
              type="radio"
              name={groupName}
              id={optionId}
              value={world.name}
              checked={active}
              className="sr-only"
              onChange={() => onActivate(world.name)}
            />
            <span>
              CircleCross{" "}
              <em className={cn("not-italic", active ? "text-copper-deep" : "text-start-cream")}>
                {world.name}
              </em>
            </span>
          </label>
        );
      })}
    </div>
  );
}
