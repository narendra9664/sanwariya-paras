"use client";

import { useEffect, useRef } from "react";
import { HOSPITAL } from "@/data/hospital";

/**
 * STATS BAR
 * Full-width navy bar showing key hospital stats
 * Numbers count up when scrolled into view using Intersection Observer
 * (Using native IO instead of GSAP for this lightweight animation)
 */

const stats = [
  { value: HOSPITAL.stats.patients, suffix: "+", label: "Patients Treated" },
  { value: HOSPITAL.stats.icuBeds, suffix: "", label: "ICU Beds" },
  { value: HOSPITAL.stats.doctors, suffix: "+", label: "Specialist Doctors" },
  { value: 24, suffix: "/7", label: "Emergency Care" },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Count up animation
          const duration = 2000; // 2 seconds
          const start = 0;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (value - start) * eased);
            if (el) el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-white">
      0{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-transparent to-primary-dark/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center relative"
            >
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white/50 text-sm mt-2 font-medium">
                {stat.label}
              </p>
              {/* Divider (hidden on last item and mobile) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
