"use client";

import { useEffect, useRef } from "react";
import { HOSPITAL } from "@/data/hospital";
import { Users, Bed, HeartPulse, Clock } from "lucide-react";
import ECGLine from "@/components/ui/ECGLine";

/**
 * STATS BAR
 * Displays key hospital stats in styled cards overlapping the section
 */

const stats = [
  { 
    value: HOSPITAL.stats.patients, 
    suffix: "+", 
    label: "Patients Treated",
    icon: Users,
    desc: "Delivering successful recoveries and advanced care to thousands."
  },
  { 
    value: HOSPITAL.stats.icuBeds, 
    suffix: "", 
    label: "ICU Beds",
    icon: Bed,
    desc: "Fully equipped intensive care units for critical support."
  },
  { 
    value: HOSPITAL.stats.doctors, 
    suffix: "+", 
    label: "Specialist Doctors",
    icon: HeartPulse,
    desc: "Highly qualified professionals dedicated to your health."
  },
  { 
    value: 24, 
    suffix: "/7", 
    label: "Emergency Care",
    icon: Clock,
    desc: "Round-the-clock emergency services ready for any situation."
  },
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
          const duration = 2000;
          const start = 0;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
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
    <span ref={ref} className="font-display text-4xl font-bold text-text">
      0{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-visible bg-warm-bg pb-16 lg:pb-24 pt-16">
      {/* Top half background to create the overlapping look */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary">
         {/* Animated Subtle Flow Background (Optional, kept for effect) */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-overlay">
          <div 
            className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:200%_100%]"
            style={{
              animation: 'shimmer 8s infinite linear'
            }}
          />
        </div>
        
        {/* Animated ECG Line */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
          <ECGLine />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-surface rounded-[2rem] p-8 text-center shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Number */}
                <div className="mb-2">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-bold text-text mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
