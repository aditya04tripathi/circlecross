"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Component, useEffect, useRef, useState } from "react";
import { ProFallback } from "./pro-fallback";

const Scene = dynamic(() => import("./pro-scene").then((m) => m.ProScene), {
  ssr: false,
});

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function ProWorld() {
  const host = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)");
    let observer: IntersectionObserver | undefined;

    const update = () => {
      let supported = false;
      try {
        supported = !!document.createElement("canvas").getContext("webgl2");
      } catch {
        /* WebGL is optional; the SVG remains available. */
      }
      setEnabled(!media.matches && supported);
    };

    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const scheduleEnable = () => {
      if (media.matches) {
        setEnabled(false);
        return;
      }
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(update, { timeout: 3000 });
      } else {
        timerId = setTimeout(update, 2000);
      }
    };

    const onActivity = () => {
      update();
    };

    window.addEventListener("pointermove", onActivity, { once: true, passive: true });
    window.addEventListener("scroll", onActivity, { once: true, passive: true });
    window.addEventListener("touchstart", onActivity, { once: true, passive: true });

    scheduleEnable();

    const onMediaChange = () => {
      if (media.matches) {
        setEnabled(false);
      } else {
        update();
      }
    };
    media.addEventListener("change", onMediaChange);

    let inView = true;
    const visibility = () => setActive(inView && !document.hidden);
    document.addEventListener("visibilitychange", visibility);

    if (host.current) {
      observer = new IntersectionObserver(([entry]) => {
        inView = Boolean(entry?.isIntersecting);
        visibility();
      });
      observer.observe(host.current);
    }

    let cleanup: (() => void) | undefined;
    let disposed = false;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const trigger = ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          onUpdate: (s) => {
            progress.current = s.progress;
          },
        });
        cleanup = () => trigger.kill();
      },
    );

    return () => {
      disposed = true;
      cleanup?.();
      observer?.disconnect();
      media.removeEventListener("change", onMediaChange);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pointermove", onActivity);
      window.removeEventListener("scroll", onActivity);
      window.removeEventListener("touchstart", onActivity);
      if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute top-[40px] right-[-30px] -z-10 h-[min(64vw,880px)] w-[min(64vw,880px)] max-[1100px]:top-[90px] max-[1100px]:right-[-70px] max-[1100px]:h-[76vw] max-[1100px]:w-[76vw] max-md:top-[220px] max-md:right-[-18%] max-md:h-[110vw] max-md:max-h-[580px] max-md:w-[110vw] max-md:max-w-[580px] max-md:opacity-[0.85]"
      ref={host}
      aria-hidden="true"
      data-pro-world
    >
      <ProFallback />
      {enabled && (
        <SceneBoundary>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--paper)_35%,transparent_72%)] [&_canvas]:relative">
            <Scene progress={progress} active={active} />
          </div>
        </SceneBoundary>
      )}
    </div>
  );
}
