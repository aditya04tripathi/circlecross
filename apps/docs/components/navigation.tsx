"use client";

import { Button } from "@circlecross/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@circlecross/ui/components/sheet";
import { cn } from "cn";
import { useState } from "react";
import { navItems, primaryNav, spySectionIds } from "../content/nav";
import { Logo } from "./logo";
import { SiteButton } from "./site-button";
import { ghostReset } from "./styles";
import { Arrow } from "./ui";
import { useSectionSpy } from "./use-section-spy";

const wordmark =
  "flex items-center text-[28px] font-[580] tracking-[-1.4px] max-md:text-[23px] max-md:tracking-[-1.1px] [&_svg]:!h-[84px] [&_svg]:w-auto max-md:[&_svg]:!h-[56px]";

const navLink =
  "relative h-auto rounded-none p-0 text-[15px] font-[450] tracking-[-0.01em] text-inherit no-underline after:absolute after:right-0 after:bottom-[-6px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform after:duration-[450ms] after:ease-editorial hover:bg-transparent hover:no-underline hover:after:scale-x-100";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const activeId = useSectionSpy(spySectionIds);

  return (
    <header className="absolute top-[30px] right-[5.4%] left-[5.4%] z-40 flex h-14 items-center justify-between max-md:fixed max-md:inset-x-0 max-md:top-0 max-md:h-14 max-md:border-b max-md:border-[#525c3520] max-md:bg-[#f4f1e9] max-md:px-[6%] max-md:shadow-[0_8px_24px_#34401b0a]">
      <Button
        nativeButton={false}
        variant="ghost"
        render={<a href="/" className={wordmark} aria-label="CircleCross home" />}
        className={ghostReset}
      >
        <Logo type="logo" />
      </Button>
      <nav
        className="ml-[8%] flex gap-9 text-[15px] max-[1100px]:ml-0 max-[1100px]:gap-6 max-md:hidden"
        aria-label="Main navigation"
      >
        {primaryNav.map((item) => {
          const current = activeId === item.sectionId;
          return (
            <Button
              key={item.href}
              nativeButton={false}
              variant="link"
              render={<a href={item.href} aria-current={current ? "true" : undefined} />}
              className={cn(navLink, current && "text-copper after:scale-x-100")}
            >
              {item.label}
            </Button>
          );
        })}
      </nav>
      <SiteButton
        variant="primary"
        href="/#start"
        className="gap-5 rounded-[30px] px-[18px] py-[13px] text-[13px] max-md:hidden [&_span[data-button-icon]]:hidden"
      >
        Find your circle <Arrow diagonal />
      </SiteButton>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              className={cn(
                "hidden size-11 flex-col items-center justify-center gap-1.5 bg-transparent max-md:flex",
                open &&
                  "[&_span:first-child]:translate-y-[3.5px] [&_span:first-child]:rotate-45 [&_span:last-child]:-translate-y-[3.5px] [&_span:last-child]:-rotate-45",
              )}
              aria-label="Open navigation"
            />
          }
        >
          <span className="h-px w-[22px] bg-ink transition-transform duration-[400ms] ease-editorial" />
          <span className="h-px w-[22px] bg-ink transition-transform duration-[400ms] ease-editorial" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="inset-0 z-[60] m-0 h-dvh max-h-none w-screen max-w-none rounded-none border-0 bg-[#f4f1e9f5] p-[90px_8%_50px] text-ink backdrop-blur-[20px] transform-none"
          showCloseButton={false}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>CircleCross site links</SheetDescription>
          </SheetHeader>
          <SheetClose
            render={
              <Button
                variant="ghost"
                className="absolute top-3.5 right-[6%] size-11 bg-transparent text-[35px] shadow-none"
                aria-label="Close navigation"
              />
            }
          >
            ×
          </SheetClose>
          <Logo type="mark" className="mb-[70px] h-[60px] w-auto text-ink" />
          <nav className="flex flex-col gap-[30px]" aria-label="Mobile navigation">
            {navItems.map((item, index) => {
              const current = activeId === item.sectionId;
              return (
                <Button
                  key={item.href}
                  nativeButton={false}
                  variant="link"
                  className="flex h-auto animate-chapter-in items-center justify-between p-0 text-[34px] tracking-[-0.04em] text-inherit no-underline"
                  style={{ animationDelay: `${index * 0.07}s` }}
                  render={
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={current ? "true" : undefined}
                    />
                  }
                >
                  {item.label}
                  <Arrow diagonal className="size-[25px]" />
                </Button>
              );
            })}
          </nav>
          <p className="mt-[60px] text-xs">Good things happen when we cross paths.</p>
        </SheetContent>
      </Sheet>
    </header>
  );
}
