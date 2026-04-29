"use client";

import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AppointmentModal from "@/components/ui/AppointmentModal";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Patient Outcomes</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Case Studies & <span className="text-accent">Success Stories</span></h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl">Real medical cases showcasing our clinical expertise and patient outcomes.</p>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
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
