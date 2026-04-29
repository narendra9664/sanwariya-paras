"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DoctorsHighlight from "@/components/sections/DoctorsHighlight";
import Testimonials from "@/components/sections/Testimonials";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import InsuranceLogos from "@/components/sections/InsuranceLogos";
import AppointmentModal from "@/components/ui/AppointmentModal";

/**
 * HOMEPAGE
 * Composes all sections in order for the main landing page
 * The appointment modal is controlled from here and passed down to sections
 */

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onBookAppointment={openModal} />
      
      <main>
        <Hero onBookAppointment={openModal} />
        <StatsBar />
        <DepartmentsGrid />
        <WhyChooseUs />
        <DoctorsHighlight onBookAppointment={openModal} />
        <Testimonials />
        <EmergencyCTA />
        <InsuranceLogos />
      </main>

      <Footer />
      <WhatsAppButton />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
