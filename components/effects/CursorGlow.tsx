"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (!mql.matches || reducedMotion.matches) return;

    let frame = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (!el) return;
        el.style.transform = `translate3d(${e.clientX - 200}px, ${
          e.clientY - 200
        }px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-[5] hidden h-[400px] w-[400px] rounded-full bg-lavender/10 blur-[80px] transition-transform duration-300 ease-out will-change-transform md:block"
    />
  );
}
