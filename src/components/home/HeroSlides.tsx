"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function HeroSlides({ slides, action }: { slides: ReactNode[]; action?: ReactNode }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div>
      <div className="grid">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={cn("col-start-1 row-start-1 transition-opacity duration-700", i === active ? "opacity-100" : "pointer-events-none opacity-0")}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        {action}
        <div className="flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn("h-2 rounded-full transition-all", i === active ? "w-6 bg-brand-mint" : "w-2 bg-white/40")}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
