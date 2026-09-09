"use client";

import {
  Collapsible,
  CollapsibleTrigger,
} from "@circlecross/ui/components/collapsible";
import { cn } from "cn";
import { useState } from "react";
import { worlds } from "../content/worlds";
import { ProductChapter } from "./product-chapter";
import { SiteButton } from "./site-button";
import { chapterTrigger, eyebrow, hSection, pageInset, pyDense } from "./styles";
import { Arrow } from "./ui";

export function Worlds() {
  const [active, setActive] = useState("go");

  return (
    <section
      className={cn(pageInset, pyDense, "scroll-mt-10 border-t border-border pt-[70px] max-md:pt-[35px]")}
      id="worlds"
      data-worlds
    >
      <div className="relative mb-20 max-md:mb-[45px]" data-worlds-heading>
        <p className={eyebrow}>One life. Many circles.</p>
        <h2 className={cn(hSection, "max-w-[18ch] max-md:text-[39px]")}>
          A world for <em>every version of you.</em>
        </h2>
        <p className="absolute right-[1%] bottom-2 text-sm leading-[1.8] text-soft max-[1100px]:text-xs max-md:static max-md:mt-[25px]">
          You change. Your world opens up.
          <br />
          Your connections come with you.
        </p>
      </div>
      <div className="border-b border-line" data-world-chapters>
        {worlds.map((world) => {
          const open = active === world.id;
          return (
            <Collapsible
              key={world.id}
              open={open}
              onOpenChange={(nextOpen: boolean) => {
                if (nextOpen) setActive(world.id);
              }}
              className="group/chapter border-t border-line"
              id={world.id}
            >
              <CollapsibleTrigger
                render={<button type="button" className={chapterTrigger} />}
                aria-controls={`world-${world.id}`}
              >
                <span className="text-[36px] font-normal tracking-[-1.7px] max-[1100px]:text-[30px] max-md:text-[28px]">
                  CircleCross{" "}
                  <strong className={cn("font-[450]", world.accent)}>{world.name}</strong>
                </span>
                <span className="ml-auto text-xs text-soft max-md:hidden">{world.hint}</span>
                <span
                  className={cn(
                    "grid size-[45px] place-items-center rounded-full shadow-[inset_0_0_0_1px_var(--line)] transition-[transform,background] duration-500 ease-editorial group-hover/chapter:rotate-45 group-hover/chapter:bg-[#e5dece] motion-reduce:transition-none max-md:ml-auto max-md:size-10 [&_svg]:w-5",
                    open &&
                      "rotate-90 bg-ink text-paper group-hover/chapter:rotate-90 group-hover/chapter:bg-ink",
                  )}
                >
                  <Arrow diagonal />
                </span>
              </CollapsibleTrigger>
              {open ? (
                <div className="animate-chapter-in motion-reduce:animate-none">
                  <ProductChapter
                    world={world}
                    cta={
                      <SiteButton variant="link" href={`/${world.id}`}>
                        Explore CircleCross {world.name}
                        <Arrow diagonal />
                      </SiteButton>
                    }
                  />
                </div>
              ) : null}
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
}
