"use client";

import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import { getFeaturedDoctors } from "@/data/doctors";
import SectionHeader from "@/components/ui/SectionHeader";
import DoctorCard from "@/components/ui/DoctorCard";

/**
 * DOCTORS HIGHLIGHT
 * Shows the 3 featured doctors on the homepage
 * Grid on desktop, horizontal scroll on mobile
 */

export default function DoctorsHighlight({ onBookAppointment }: { onBookAppointment?: () => void }) {
  const featured = getFeaturedDoctors();

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Team"
          title="Meet Our Specialists"
          subtitle="Expert doctors from India's top medical institutions, dedicated to your health."
        />

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onBookAppointment={onBookAppointment} 
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Doctors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
