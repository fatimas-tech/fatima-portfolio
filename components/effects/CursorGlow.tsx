"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointerFine.matches || reducedMotion.matches) return;

    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const element = glowRef.current;
        if (!element) return;

        element.style.transform = `translate3d(${event.clientX - 210}px, ${
          event.clientY - 210
        }px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[420px] w-[420px] rounded-full opacity-80 transition-opacity duration-500 md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(150,105,205,0.34) 0%, rgba(240,140,195,0.24) 35%, rgba(240,140,195,0.1) 58%, transparent 72%)",
        willChange: "transform",
      }}
    />
  );
}