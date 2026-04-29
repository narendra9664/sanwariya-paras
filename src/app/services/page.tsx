"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import AppointmentModal from "@/components/ui/AppointmentModal";
import ServiceCard from "@/components/ui/ServiceCard";

/**
 * SERVICES PAGE
 * Shows all 8 departments in a grid layout with links to detail pages
 */

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Departments</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Comprehensive<br />
              <span className="text-accent">Multi-Speciality Care</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl">
              8 specialised departments under one roof — advanced cardiac care, critical care, orthopaedics, and more.
            </p>
          </div>
        </section>

        {/* All Departments Grid */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} showHindiName={true} />
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
