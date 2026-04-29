"use client";

import { Phone, Siren } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";

/**
 * EMERGENCY CTA STRIP
 * Full-width red banner for emergency contact
 * Always visible, hard to miss — because in an emergency, seconds matter
 */

export default function EmergencyCTA() {
  return (
    <section className="bg-cta relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Message */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex w-14 h-14 bg-white/20 rounded-2xl items-center justify-center">
              <Siren className="w-7 h-7 text-white animate-pulse-slow" />
            </div>
            <div>
              <h2 className="text-white text-2xl lg:text-3xl font-display font-bold">
                Medical Emergency?
              </h2>
              <p className="text-white/80 text-base mt-1">
                We&apos;re here 24/7. Don&apos;t wait — every minute counts.
              </p>
            </div>
          </div>

          {/* Right: Phone + CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${HOSPITAL.phone.emergency}`}
              className="font-mono text-3xl lg:text-4xl font-bold text-white tracking-wider"
            >
              {HOSPITAL.phone.emergency}
            </a>
            <a
              href={`tel:${HOSPITAL.phone.emergency}`}
              className="flex items-center gap-2 bg-white text-cta px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
