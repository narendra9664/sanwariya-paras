"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { doctors } from "@/data/doctors";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import AppointmentModal from "@/components/ui/AppointmentModal";
import DoctorCard from "@/components/ui/DoctorCard";

/**
 * TEAM PAGE
 * Shows all doctors with their full profiles
 * Featured doctors shown at top, others below
 */

export default function TeamPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featured = doctors.filter((d) => d.featured);
  const others = doctors.filter((d) => !d.featured);

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Doctors</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Care,<br />
              <span className="text-accent">Trusted Hands</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl">
              Our team of specialists brings training from India&apos;s top institutions — CMC Vellore, AIIMS, and beyond.
            </p>
          </div>
        </section>

        {/* Lead Doctors */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Leadership"
              title="Lead Specialists"
              subtitle="The core team that founded and leads our hospital's clinical excellence."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featured.map((doctor) => (
                <DoctorCard 
                  key={doctor.id} 
                  doctor={doctor} 
                  onBookAppointment={() => setIsModalOpen(true)}
                  showBio={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Other Doctors */}
        <section className="py-16 lg:py-24 bg-warm-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Specialists"
              title="Our Complete Team"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {others.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-border transition-all flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 shrink-0">
                    <User className="w-8 h-8 text-primary/40" />
                  </div>
                  <h3 className="font-display text-base font-bold text-primary">{doctor.name}</h3>
                  <p className="text-accent text-xs font-semibold mt-1">{doctor.designation}</p>
                  <p className="text-muted text-xs mt-1">{doctor.qualifications}</p>
                  <p className="text-muted text-xs mt-2">{doctor.experience} yrs • {doctor.department}</p>
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-white py-2 rounded-xl text-sm font-semibold transition-all"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
