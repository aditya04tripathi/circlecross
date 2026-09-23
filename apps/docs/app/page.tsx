import { Button } from "@circlecross/ui/components/button";
import { cn } from "cn";
import Image from "next/image";
import { Encounter } from "../components/encounter";
import { JsonLd } from "../components/json-ld";
import { StoryMotion } from "../components/motion/story-motion";
import { Navigation } from "../components/navigation";
import { PresenceControlIllustration, PrincipleIcon } from "../components/principle-icons";
import { OrbitWorld } from "../components/scene/orbit-world";
import { ScrollProgress } from "../components/scroll-progress";
import { SiteButton } from "../components/site-button";
import { SiteCard } from "../components/site-card";
import { SiteFooter } from "../components/site-footer";
import { Start } from "../components/start";
import {
  eyebrow,
  ghostReset,
  hHero,
  hSubsection,
  pageInset,
  pyDense,
  pyStatement,
} from "../components/styles";
import { Arrow, LinkButton } from "../components/ui";
import { Worlds } from "../components/worlds";
import { principles } from "../content/principles";
import { generateSeo, getJsonLd } from "../content/seo";

export const metadata = generateSeo("/");

const manifesto =
  "The best things in life aren't things. They're the people we find along the way.";
const manifestoWords = manifesto.split(" ").map((word, position) => ({
  word,
  key: `${word}-${
    manifesto
      .split(" ")
      .slice(0, position)
      .filter((w) => w === word).length
  }`,
}));

export default function Home() {
  return (
    <>
      <JsonLd data={getJsonLd("/")} />
      <ScrollProgress />
      <Button
        nativeButton={false}
        variant="ghost"
        render={
          <a
            className="fixed top-[-80px] left-4 z-40 bg-ink px-5 py-3.5 text-white focus:top-[15px]"
            href="#main"
          />
        }
        className={ghostReset}
      >
        Skip to content
      </Button>
      <Navigation />
      <main id="main">
        <section
          className={cn(
            pageInset,
            "relative isolate overflow-hidden h-[min(1000px,100dvh)] min-h-[850px] pt-[145px] pb-[45px] max-[1100px]:h-auto max-[1100px]:min-h-[760px] max-[1100px]:pt-[130px] max-md:h-auto max-md:min-h-[850px] max-md:pt-[112px] max-md:pb-[35px]",
          )}
          id="hero"
        >
          <div className="relative z-[2] flex justify-between text-base text-primary text-bold max-md:text-[10px] max-md:[&>span:last-child]:hidden">
            <span>Different paths. Shared possibilities.</span>
          </div>
          <OrbitWorld />
          <h1
            className={cn(
              hHero,
              "pointer-events-none relative z-[2] mt-[72px] w-full max-w-[1600px] min-[1600px]:mt-[95px] max-[1100px]:mt-[95px] max-md:mt-[50px] max-md:max-w-full [&_em]:tracking-[-0.065em] max-md:[&_em]:block [&>span]:block [&>span+span]:mt-0.5 max-md:[&>span:last-child]:max-w-[95%]",
            )}
            data-hero-title
          >
            <span>Life happens</span>
            <span>
              where <em>circles cross.</em>
            </span>
          </h1>
          <div className="relative z-[2] mt-[62px] flex items-end gap-[9%] min-[1600px]:mt-20 max-[1100px]:mt-[90px] max-[1100px]:gap-[6%] max-md:mt-[260px] max-md:justify-between max-md:gap-5">
            <div className="relative z-[1] max-md:[&>p]:pt-2.5">
              <p className="mb-6 max-w-[28ch] text-[17px] leading-[1.6] tracking-[-0.025em] max-md:text-sm max-md:leading-[1.6]">
                Your world is full of people you haven't met.{" "}
                <span className="text-copper">Not yet.</span>
              </p>
              <LinkButton href="#worlds">Discover your world</LinkButton>
            </div>
            <Button
              nativeButton={false}
              variant="ghost"
              render={
                <a
                  className="group flex max-w-[330px] items-center gap-[18px] max-md:hidden"
                  href="#idea"
                />
              }
              className={ghostReset}
            >
              {/* TODO(asset): hero-supporting */}
              <Image
                className="-rotate-5 rounded shadow-[0_10px_30px_#3b332516] saturate-[0.55] transition-transform duration-700 ease-editorial group-hover:rotate-0 group-hover:scale-[1.04]"
                src="/images/together.jpg"
                alt="Friends enjoying time together outside"
                width={142}
                height={107}
                priority
                sizes="220px"
              />
              <span className="whitespace-nowrap text-xs leading-[1.6] [&_svg]:mt-2.5 [&_svg]:w-5">
                Less scrolling.
                <br />
                More living. <Arrow diagonal />
              </span>
            </Button>
            <Button
              nativeButton={false}
              variant="ghost"
              render={
                <a
                  className="ml-auto flex items-center gap-5 text-[10px] [writing-mode:vertical-rl] max-md:mb-2 max-md:gap-3 max-md:text-[9px]"
                  href="#idea"
                />
              }
              className={ghostReset}
            >
              <span>Scroll to cross paths</span>
              <span className="relative h-[62px] w-px bg-line before:absolute before:top-0 before:left-0 before:h-[22px] before:w-px before:animate-scrollhint before:bg-ink" />
            </Button>
          </div>
        </section>
        <section
          className={cn(pageInset, pyStatement, "scroll-mt-10 border-t border-line")}
          id="idea"
        >
          <p className={eyebrow} data-reveal>
            Built around life. Not a feed.
          </p>
          <div className="max-w-[1100px]" data-manifesto>
            <h2
              className={cn(
                hSubsection,
                "max-w-[22ch] text-[clamp(38px,5.1vw,78px)] max-md:text-[37px] max-md:leading-[1.23]",
              )}
              aria-label={manifesto}
            >
              {manifestoWords.map(({ word, key }) => (
                <span className="motion-safe:opacity-[0.65]" data-manifesto-word key={key}>
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
          <div
            className="mt-10 flex items-center gap-[30px] max-md:mt-8 max-md:flex-wrap max-md:gap-5"
            data-reveal
          >
            <span className="h-[75px] w-[145px] shrink-0 overflow-hidden rounded-[100px] max-md:h-[55px] max-md:w-[90px]">
              {/* TODO(asset): world-uni */}
              <Image
                className="size-full saturate-50"
                src="/images/uni.jpg"
                alt="Friends connecting on campus"
                width={180}
                height={90}
                sizes="(max-width: 767px) 90px, 145px"
              />
            </span>
            <p className="max-w-[420px] text-sm leading-[1.8] text-soft max-md:max-w-[calc(100%-110px)] max-md:text-xs max-md:leading-[1.8]">
              CircleCross brings the people, places and communities around you a little closer. So a
              chance encounter can become something that matters.
            </p>
            <SiteButton
              variant="link"
              className="ml-auto max-md:ml-[110px] max-md:gap-3.5 max-md:text-[10px]"
              href="#connections"
            >
              See how paths cross <Arrow diagonal />
            </SiteButton>
          </div>
        </section>
        <Encounter />
        <section
          className={cn(pageInset, "relative scroll-mt-10 py-20 text-center max-md:py-14")}
          aria-label="Our philosophy"
        >
          <p className="text-[clamp(32px,4.5vw,68px)] leading-[1.3] tracking-[-0.045em] text-[#76776a] max-md:text-[28px]">
            Less collecting contacts.
          </p>
          <p className="text-[clamp(32px,4.5vw,68px)] leading-[1.3] tracking-[-0.045em] max-md:text-[28px]">
            More <em>finding your people.</em>
          </p>
          <div
            className="mt-8 flex justify-center max-md:mt-6 [&>span]:size-[43px] [&>span]:rounded-full [&>span]:border [&>span]:border-[#8d8e79] max-md:[&>span]:size-[33px] [&>span+span]:-ml-[15px]"
            aria-hidden="true"
          >
            <span />
            <span />
          </div>
        </section>
        <Worlds />
        <section
          className={cn(
            pageInset,
            "relative isolate flex min-h-dvh scroll-mt-10 flex-col justify-between overflow-hidden bg-identity py-[100px] text-paper max-[1100px]:py-20 max-md:min-h-dvh max-md:py-16",
          )}
          data-identity
        >
          <div
            className="absolute top-[-50px] right-[-80px] -z-10 size-[650px] max-md:top-[50px] max-md:right-[-190px] max-md:size-[440px] [&>i]:absolute [&>i]:inset-0 [&>i]:rounded-full [&>i]:border [&>i]:border-[#becba440] [&>i]:rotate-[30deg] [&>i]:scale-x-[0.55] [&>i:nth-child(2)]:rotate-[-30deg] [&>i:nth-child(2)]:scale-x-[0.55] [&>i:nth-child(3)]:rotate-90 [&>i:nth-child(3)]:scale-x-[0.55]"
            aria-hidden="true"
            data-identity-orbits
          >
            <i />
            <i />
            <i />
          </div>
          <div className="relative z-[1]" data-reveal>
            <p className={cn(eyebrow, "text-[#d1d6bd]")}>Always you. Still becoming.</p>
            <h2 className={cn(hSubsection, "max-w-[14ch] [&_em]:text-[#d6d6b8]")}>
              New chapters. <em>Same constellation.</em>
            </h2>
            <p className="mt-6 max-w-[36ch] text-sm leading-[1.8] text-[#c1c9b8] max-md:text-xs">
              From your first adventure to your next big idea. One CircleCross identity, with
              relationships that grow as you do.
            </p>
          </div>
          <div
            className="mt-auto flex w-[110%] items-center gap-[35px] pt-16 text-[60px] tracking-[-0.06em] max-[1100px]:text-[50px] max-md:mt-14 max-md:w-full max-md:gap-[18px] max-md:pt-10 max-md:text-[40px] [&>i]:relative [&>i]:h-px [&>i]:min-w-[60px] [&>i]:flex-1 [&>i]:bg-[#b6c79d50] max-md:[&>i]:min-w-5 [&>i]:before:absolute [&>i]:before:top-[-4px] [&>i]:before:left-[35%] [&>i]:before:size-[9px] [&>i]:before:rounded-full [&>i]:before:bg-[#cfdaae] [&>i]:before:shadow-[0_0_20px_#aabd73] [&>svg]:mr-[10%] [&>svg]:w-[35px] max-md:[&>svg]:hidden"
            data-identity-track
          >
            <span>Uni</span>
            <i />
            <span>Pro</span>
            <Arrow />
          </div>
        </section>
        <section className={cn(pageInset, pyDense, "scroll-mt-10")} id="trust">
          <div
            className="grid grid-cols-2 items-end gap-[6%] max-[1100px]:gap-[4%] max-md:grid-cols-1 max-md:gap-8"
            data-reveal
          >
            <div>
              <p className={eyebrow}>Connection should feel comfortable.</p>
              <h2 className={cn(hSubsection, "max-w-[14ch]")}>
                Open to the world. <em>On your terms.</em>
              </h2>
              <p className="mt-6 max-w-[36ch] text-sm leading-[1.8] text-soft max-md:text-xs max-md:leading-[1.9]">
                Meaningful connection starts with feeling safe. These principles guide the
                CircleCross we're building.
              </p>
            </div>
            <div className="group rounded-[9px] bg-[#ded9cc] p-1.5 shadow-[inset_0_0_0_1px_#fdfbf899]">
              {/* TODO(asset): trust-presence */}
              <div className="relative h-[350px] overflow-hidden rounded-[5px] max-[1100px]:h-[320px] max-md:h-[260px]">
                <Image
                  className="size-full saturate-[0.6] transition-transform duration-1000 ease-editorial group-hover:scale-[1.04]"
                  src="/images/trust.jpg"
                  alt="Two people sharing a quiet outdoor moment, with comfortable space between them"
                  width={1000}
                  height={700}
                  sizes="(max-width: 767px) 90vw, (max-width: 1200px) 48vw, 550px"
                />
                <PresenceControlIllustration className="absolute bottom-5 left-5 max-w-[220px]" />
              </div>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-[65px] max-[1100px]:gap-[35px] max-md:mt-10 max-md:grid-cols-1 max-md:gap-[35px]">
            {principles.map((item) => (
              <div key={item.title} data-reveal>
                <SiteCard
                  tone="principle"
                  title={item.title}
                  body={item.copy}
                  example={item.example}
                  icon={<PrincipleIcon name={item.icon} />}
                />
              </div>
            ))}
          </div>
        </section>
        <Start />
      </main>
      <SiteFooter />
      <StoryMotion />
    </>
  );
}
