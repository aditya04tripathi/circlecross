"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { otherWorlds, type World } from "../content/worlds";
import { writeWorldPreference } from "../lib/world-preference";
import { ProductChapter } from "./product-chapter";
import { SiteButton } from "./site-button";
import { SiteFooter } from "./site-footer";
import {
  eyebrow,
  hHero,
  hSection,
  hSubsection,
  pageInset,
  pyDense,
} from "./styles";
import { Arrow } from "./ui";

type ProductPageViewProps = {
  world: World;
};

export function ProductPageView({ world }: ProductPageViewProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "unavailable">("idle");
  const others = otherWorlds(world.id);

  const choose = async () => {
    const ok = await writeWorldPreference(world.name);
    if (!ok) {
      setStatus("unavailable");
      return;
    }
    router.push("/#start");
  };

  return (
    <>
      <main id="main">
        <section
          className={`${pageInset} relative isolate min-h-[min(920px,100dvh)] overflow-hidden pt-[145px] pb-16 max-md:min-h-[720px] max-md:pt-[112px] max-md:pb-12`}
        >
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-35 saturate-[0.35] brightness-[1.08]"
            style={{ backgroundImage: `url(${world.image})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#f4f1e9_0%,#f4f1e9f0_38%,#f4f1e9a8_62%,#f4f1e9d4_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f4f1e9cc_0%,transparent_28%,transparent_72%,#f4f1e9_100%)]"
            aria-hidden="true"
          />
          <p className={eyebrow}>CircleCross {world.name}</p>
          <h1 className={`${hHero} mb-8 max-w-[14ch] text-[clamp(56px,8vw,120px)]`}>
            {world.name}
          </h1>
          <p className="max-w-[22ch] text-[clamp(28px,3.2vw,44px)] leading-[1.15] tracking-[-0.04em]">
            {world.headline}
          </p>
          <p className="mt-8 max-w-[42ch] text-base leading-[1.8] text-soft max-md:text-sm">
            {world.description}
          </p>
          <div className="mt-12">
            <SiteButton variant="primary" href="#choose">
              Choose {world.name}
            </SiteButton>
          </div>
        </section>

        <section className={`${pageInset} ${pyDense} border-t border-border`}>
          <p className={eyebrow}>The story</p>
          <div className="grid grid-cols-[1fr_1.15fr] items-start gap-[8%] max-md:grid-cols-1 max-md:gap-8">
            <h2 className={`${hSection} max-w-[12ch]`}>Why {world.name} exists.</h2>
            <p className="max-w-[54ch] pt-2 text-base leading-[1.85] text-soft max-md:pt-0 max-md:text-sm">
              {world.story}
            </p>
          </div>
        </section>

        <section className={`${pageInset} ${pyDense} border-t border-line`}>
          <p className={eyebrow}>In this world</p>
          <h2 className={`${hSubsection} mb-10 max-w-[16ch]`}>What you will find.</h2>
          <ul className="flex flex-wrap gap-x-0 border-t border-line max-md:flex-col">
            {world.features.map((feature) => (
              <li
                key={feature}
                className="min-w-0 flex-1 border-r border-line px-6 py-5 text-sm leading-[1.6] first:pl-0 last:border-r-0 last:pr-0 max-md:border-r-0 max-md:border-b max-md:px-0 max-md:last:border-b-0"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className={`${pageInset} ${pyDense} border-t border-line`}>
          <ProductChapter
            world={world}
            cta={
              <SiteButton variant="link" href="#choose">
                Choose CircleCross {world.name}
                <Arrow diagonal />
              </SiteButton>
            }
          />
        </section>

        <section className={`${pageInset} ${pyDense} border-t border-line`}>
          <div className="mb-10 flex items-end justify-between gap-10 max-md:mb-8 max-md:flex-col max-md:items-start max-md:gap-4">
            <div>
              <p className={eyebrow}>Other worlds</p>
              <h2 className={`${hSubsection} max-w-[16ch]`}>Every chapter stays open.</h2>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-8">
            {others.map((entry) => (
              <li key={entry.id} className="border-t border-line pt-6">
                <SiteButton variant="link" href={`/${entry.id}`}>
                  CircleCross {entry.name}
                  <Arrow diagonal />
                </SiteButton>
                <p className="mt-3 max-w-[36ch] text-sm leading-[1.7] text-soft">{entry.hint}</p>
                <p className="mt-4 max-w-[40ch] text-sm leading-[1.7] text-soft">{entry.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={`${pageInset} ${pyDense} scroll-mt-10 border-t border-border bg-start text-start-cream`}
          id="choose"
        >
          <p className={`${eyebrow} text-start-cream`}>Your next step</p>
          <div className="flex items-end justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-10">
            <div className="min-w-0 max-w-[34ch]">
              <h2 className={`${hSection} mb-5 text-start-cream`}>Choose {world.name}.</h2>
              <p className="text-sm leading-[1.8] text-[#f6e1d3]">
                We save your world preference on this device, then take you to Find your circle on
                the homepage.
              </p>
            </div>
            <div className="shrink-0">
              <SiteButton variant="primary" light onClick={choose}>
                Choose {world.name} and continue
              </SiteButton>
              <p
                className="mt-6 min-h-[35px] max-w-[320px] text-[10px] leading-[1.7] text-[#f6e1d3]"
                role="status"
              >
                {status === "unavailable"
                  ? `You chose ${world.name}. Your browser could not save this preference. You can still explore every CircleCross world.`
                  : null}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
