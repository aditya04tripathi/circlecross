import Image from "next/image";
import type { ReactNode } from "react";
import type { World } from "../content/worlds";
import { SiteCard } from "./site-card";

type ProductChapterProps = {
  world: World;
  cta: ReactNode;
};

export function ProductChapter({ world, cta }: ProductChapterProps) {
  return (
    <div
      className="grid grid-cols-[0.85fr_1.15fr] gap-[9%] py-5 pb-[55px] max-md:flex max-md:flex-col max-md:gap-[30px] max-md:py-0 max-md:pb-8"
      id={`world-${world.id}`}
    >
      <SiteCard
        eyebrow={`CircleCross ${world.name}`}
        title={world.headline}
        body={world.description}
        features={world.features}
        cta={cta}
      />
      <div className="group rounded-[9px] bg-[#ded9cc] p-1.5 shadow-[inset_0_0_0_1px_#fdfbf899]">
        {/* TODO(asset): world-{world.id} */}
        <div className="relative h-[350px] overflow-hidden rounded-[5px] max-[1100px]:h-[320px] max-md:h-[260px]">
          <Image
            className="size-full saturate-[0.6] transition-transform duration-1000 ease-editorial group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            src={world.image}
            alt={world.alt}
            width={1000}
            height={700}
            sizes="(max-width: 767px) 90vw, 48vw"
          />
          <span className="absolute bottom-5 left-5 rounded-[20px] bg-[#272b24b0] px-[13px] py-2 text-[11px] text-white">
            Life, with your people.
          </span>
        </div>
      </div>
    </div>
  );
}
