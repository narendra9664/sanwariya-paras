"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * WHY CHOOSE US
 * 2-column layout: hospital photo left, USP bullet points right
 * Warm off-white background to stand out from white sections
 */

const usps = [
  {
    title: "CMC Vellore & AIIMS Trained Specialists",
    description: "Our doctors are trained at India's most prestigious medical institutions.",
  },
  {
    title: "Only Cath Lab in Chittorgarh Region",
    description: "Advanced cardiac procedures without traveling to distant cities.",
  },
  {
    title: "Ayushman Bharat & RGHS Cashless Treatment",
    description: "Free treatment for eligible patients under government health schemes.",
  },
  {
    title: "Ethical, Transparent Medical Practice",
    description: "No unnecessary tests or procedures. Honest, patient-first care.",
  },
  {
    title: "Modular Operation Theatres",
    description: "Infection-free surgical environments with HEPA filtration.",
  },
  {
    title: "24/7 Emergency with Golden Hour Response",
    description: "Rapid emergency care for cardiac and trauma cases around the clock.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Hospital Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/IMG_5796.JPG.jpeg"
                alt="Sanwariya Paras Multi-Speciality Hospital building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="font-mono text-3xl font-bold text-primary">2035+</p>
              <p className="text-muted text-sm">Happy Patients</p>
            </div>
          </div>

          {/* Right: USP List */}
          <div>
            <SectionHeader
              badge="Why Us"
              title="Why Choose Us"
              subtitle="At Sanwariya Paras Hospital, we combine medical expertise, modern technology, and genuine compassion."
              centered={false}
            />

            <div className="space-y-5">
              {usps.map((usp) => (
                <div key={usp.title} className="flex gap-4 group">
                  <div className="shrink-0 w-8 h-8 bg-accent/10 group-hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                    <Check className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-base">{usp.title}</h3>
                    <p className="text-muted text-sm mt-0.5">{usp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
