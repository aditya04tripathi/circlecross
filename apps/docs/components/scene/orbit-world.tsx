"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { OrbitFallback } from "./orbit-fallback";
const Scene = dynamic(() => import("./orbit-scene").then((m) => m.OrbitScene), {
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
export function OrbitWorld() {
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
    update();
    media.addEventListener("change", update);
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
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return (
    <div className="orbit-world" ref={host} aria-hidden="true">
      <OrbitFallback />
      {enabled && (
        <SceneBoundary>
          <div className="webgl-layer">
            <Scene progress={progress} active={active} />
          </div>
        </SceneBoundary>
      )}
    </div>
  );
}
