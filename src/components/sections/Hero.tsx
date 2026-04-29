"use client";

import Image from "next/image";
import { Star, Stethoscope, Shield, Clock } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";

/**
 * HERO SECTION — Curenix-style
 * Clean white background, left headline + right doctor image with floating cards
 * 
 * Layout:
 *   LEFT  → social proof, big headline (italic accent), subtext, 2 CTAs
 *   RIGHT → doctor placeholder + floating testimonial + stats card
 */

export default function Hero({ onBookAppointment }: { onBookAppointment?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-bg overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] border border-primary/8 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[580px] h-[580px] border border-primary/4 rounded-full hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-7" style={{ animation: "fadeInUp 0.6s ease-out" }}>
            {/* Social proof row */}
            <div
              className="flex items-center gap-3"
              style={{ animation: "fadeInUp 0.6s ease-out 0.05s both" }}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["😊", "👨‍⚕️", "👩‍⚕️", "🙂"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-primary text-sm font-medium">
                <span className="font-semibold">5,000+</span> cured patients across Chittorgarh
              </p>
            </div>

            {/* Main heading */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-[1.1]"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              Helping families
              <br />
              access care
              <br />
              <span className="italic text-primary">without barriers</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-muted text-lg max-w-md leading-relaxed"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              Sanwariya Paras Multi-Speciality Hospital — advanced cardiac care,
              critical care & surgery close to home in Chittorgarh.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
            >
              <button
                onClick={onBookAppointment}
                className="bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
              >
                Request an appointment
              </button>
              <a
                href={`tel:${HOSPITAL.phone.emergency}`}
                className="text-text font-semibold text-sm hover:text-primary transition-colors flex items-center gap-1.5"
              >
                Emergency: {HOSPITAL.phone.emergency}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* Trust badges row */}
            <div
              className="flex flex-wrap gap-5 pt-2"
              style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
            >
              {[
                { icon: Shield, text: "Ayushman Bharat" },
                { icon: Clock, text: "24/7 Emergency" },
                { icon: Stethoscope, text: "Cath Lab" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-muted">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Doctor + Floating Cards ── */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Doctor image area */}
            <div className="relative w-[380px] h-[480px]">
              {/* Teal circle background behind the doctor */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[360px] h-[360px] rounded-full bg-primary/8" />
              </div>

              {/* Doctor Image */}
              <div className="absolute inset-0 flex items-end justify-center z-10">
                <div className="relative w-[340px] h-[460px] flex items-end justify-center">
                  <Image
                    src="/images/dr-anurag-jain.png" // User must place the image here
                    alt="Dr. Anurag Jain - Leading Cardiologist"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                  
                  {/* Name Tag */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-white/20 text-center whitespace-nowrap hidden lg:block">
                    <p className="text-primary font-display text-lg font-bold">Dr. Anurag Jain</p>
                    <p className="text-accent text-xs font-semibold mt-0.5">DM Cardiology, CMC Vellore</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Stats */}
              <div
                className="absolute bottom-20 -left-16 glass rounded-2xl p-5 w-56 animate-float z-20"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted text-xs">Quality care, covered.</span>
                </div>
                <p className="text-text text-lg font-semibold">
                  More than <span className="font-mono text-primary">5K</span>
                </p>
                <p className="font-display italic text-primary text-sm">Patients treated!</p>
              </div>

              {/* Floating Card 2: Testimonial */}
              <div
                className="absolute top-8 -right-20 glass rounded-2xl p-5 w-56 animate-float z-20"
                style={{ animationDelay: "0.7s" }}
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-text text-xs leading-relaxed">
                  &ldquo;Dr. Anurag Jain saved my father&apos;s life during a heart attack. The Cath Lab team was incredible.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-xs">
                    🙏
                  </div>
                  <div>
                    <p className="text-text text-xs font-semibold leading-none">Mohan Lal</p>
                    <p className="text-muted text-[10px]">Rawatbhata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
