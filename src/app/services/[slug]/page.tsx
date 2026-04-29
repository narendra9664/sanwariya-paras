"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { doctors } from "@/data/doctors";
import { HOSPITAL } from "@/data/hospital";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AppointmentModal from "@/components/ui/AppointmentModal";

/**
 * SERVICE DETAIL PAGE
 * Dynamic route: /services/[slug]
 * Shows full department info, treatments, equipment, and linked doctors
 */

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!service) {
    notFound();
  }

  const linkedDoctors = doctors.filter((d) => service.doctorIds.includes(d.id));

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Departments
            </Link>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
              {service.name}
            </h1>
            <p className="text-white/50 text-sm font-hindi mt-2">{service.nameHindi}</p>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">{service.shortDescription}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Full Description */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-4">About This Department</h2>
                  <p className="text-muted leading-relaxed whitespace-pre-line">{service.fullDescription}</p>
                </div>

                {/* Key Treatments */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-4">Key Treatments & Procedures</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.keyTreatments.map((t) => (
                      <div key={t} className="flex items-start gap-3 bg-accent/5 rounded-xl p-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-primary">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-4">Equipment & Facilities</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.equipment.map((eq) => (
                      <div key={eq} className="flex items-center gap-3 bg-primary/5 rounded-xl p-3">
                        <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                        <span className="text-sm text-primary">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Book CTA */}
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-primary mb-3">
                    Need a Consultation?
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    Book an appointment with our specialist or call us directly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all active:scale-95 mb-3"
                  >
                    Book Appointment
                  </button>
                  <a
                    href={`tel:${HOSPITAL.phone.secondary}`}
                    className="w-full flex items-center justify-center gap-2 border-2 border-primary/20 text-primary py-3 rounded-xl font-semibold transition-all hover:bg-primary/5"
                  >
                    <Phone className="w-4 h-4" />
                    Call {HOSPITAL.phone.secondary}
                  </a>
                </div>

                {/* Doctor Card */}
                {linkedDoctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                    <p className="text-xs text-accent font-semibold mb-1">Department Head</p>
                    <h3 className="font-display text-lg font-bold text-primary">{doctor.name}</h3>
                    <p className="text-sm text-accent mt-1">{doctor.designation}</p>
                    <p className="text-xs text-muted mt-2">{doctor.qualifications}</p>
                    <p className="text-xs text-muted mt-1">{doctor.experience} years experience</p>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-4 hover:gap-2 transition-all"
                    >
                      View Profile →
                    </Link>
                  </div>
                ))}

                {/* Insurance */}
                <div className="bg-warm-bg rounded-2xl p-6">
                  <h3 className="font-display text-base font-bold text-primary mb-3">Insurance Accepted</h3>
                  {HOSPITAL.empanelments.map((e) => (
                    <div key={e} className="flex items-center gap-2 text-sm text-muted mb-2">
                      <Check className="w-3.5 h-3.5 text-accent" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
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
