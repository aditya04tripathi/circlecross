"use client";
import { useEffect } from "react";
export function StoryMotion() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let disposed = false;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.from(".hero-title > span", {
            y: 70,
            opacity: 0,
            duration: 1.4,
            stagger: 0.14,
            ease: "power3.out",
          });
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              y: 35,
              opacity: 0,
              duration: 1,
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
              ease: "power3.out",
            });
          });
          gsap.fromTo(
            ".manifesto-word",
            { opacity: 0.65 },
            {
              opacity: 1,
              stagger: 0.12,
              ease: "none",
              scrollTrigger: {
                trigger: ".manifesto",
                start: "top 75%",
                end: "bottom 55%",
                scrub: 1,
              },
            },
          );
        });
        mm.add("(min-width: 1000px) and (prefers-reduced-motion: no-preference)", () => {
          gsap.to(".identity-orbits", {
            rotation: 70,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: ".identity",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          gsap.to(".identity-track", {
            xPercent: -13,
            ease: "none",
            scrollTrigger: {
              trigger: ".identity",
              pin: true,
              start: "top top",
              end: "+=450",
              scrub: 1,
            },
          });
        });
        const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
        const chapters = document.querySelector(".world-chapters");
        if (chapters) resizeObserver.observe(chapters);
        cleanup = () => {
          resizeObserver.disconnect();
          mm.revert();
        };
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return null;
}
