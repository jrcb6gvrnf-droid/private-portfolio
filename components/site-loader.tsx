"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { defaultProjects, publicProjects } from "@/lib/projects";

type LoaderPhase = "showcase" | "wiping" | "done";

const IMAGE_INTERVAL = 320;
const HOLD_DURATION = 200;
const WIPE_DURATION = 500;
const TICK_INTERVAL = 50;

const showcaseImages = publicProjects(defaultProjects)
  .filter((project) => project.id !== "proj-jeras")
  .slice(0, 6)
  .map((project) => project.coverImage);

const SHOWCASE_DURATION = showcaseImages.length * IMAGE_INTERVAL;
const TOTAL_DURATION = SHOWCASE_DURATION + HOLD_DURATION + WIPE_DURATION;

export function SiteLoader() {
  const pathname = usePathname();
  const [percent, setPercent] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [phase, setPhase] = useState<LoaderPhase>("showcase");
  const startRef = useRef(0);
  const phaseRef = useRef<LoaderPhase>("showcase");

  phaseRef.current = phase;

  // Safety net: opening a link in a new tab (e.g. "Read on Medium") just
  // backgrounds this tab without any navigation. Backgrounded tabs get their
  // timers throttled or fully suspended by the browser, which can leave the
  // curtain stuck mid-animation. When we're foregrounded again, or restored
  // from bfcache after a real back/forward navigation, finish immediately if
  // the run should already be long over.
  useEffect(() => {
    function finishIfOverdue() {
      if (phaseRef.current === "done") return;
      const elapsed = performance.now() - startRef.current;
      if (elapsed > TOTAL_DURATION + 400) {
        setPhase("done");
      }
    }

    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        setPhase("done");
      } else {
        finishIfOverdue();
      }
    }

    function handleVisibility() {
      if (document.visibilityState === "visible") {
        finishIfOverdue();
      }
    }

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", finishIfOverdue);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", finishIfOverdue);
    };
  }, []);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) {
      setPhase("done");
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setPercent(100);
      setPhase("done");
      return;
    }

    setPercent(0);
    setImageIndex(0);
    setPhase("showcase");

    const start = performance.now();
    startRef.current = start;

    const imageTimer = window.setInterval(() => {
      setImageIndex((index) => Math.min(index + 1, showcaseImages.length - 1));
    }, IMAGE_INTERVAL);

    const tickTimer = window.setInterval(() => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / SHOWCASE_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.round(eased * 100));

      if (progress >= 1) {
        window.clearInterval(tickTimer);
      }
    }, TICK_INTERVAL);

    const wipeTimer = window.setTimeout(
      () => setPhase("wiping"),
      SHOWCASE_DURATION + HOLD_DURATION,
    );
    const doneTimer = window.setTimeout(() => setPhase("done"), TOTAL_DURATION);

    return () => {
      window.clearInterval(imageTimer);
      window.clearInterval(tickTimer);
      window.clearTimeout(wipeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [pathname]);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`site-loader${phase === "wiping" ? " site-loader--wipe" : ""}`}
      aria-hidden="true"
    >
      <span className="site-loader__mark">Gené</span>
      <div className="site-loader__showcase">
        {showcaseImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`site-loader__image${index === imageIndex ? " is-active" : ""}`}
          />
        ))}
      </div>
      <span className="site-loader__track">
        <span className="site-loader__bar" style={{ transform: `scaleX(${percent / 100})` }} />
      </span>
    </div>
  );
}
