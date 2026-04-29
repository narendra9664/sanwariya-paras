"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AppointmentModal from "@/components/ui/AppointmentModal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hello, I'm contacting from your website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${HOSPITAL.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Contact <span className="text-accent">Us</span></h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl">We&apos;re here to help. Reach out for appointments, emergencies, or any questions.</p>
          </div>
        </section>

        {/* Contact Cards + Form */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: MapPin, title: "Visit Us", text: HOSPITAL.address, link: "#map" },
                { icon: Phone, title: "Call Us", text: `${HOSPITAL.phone.primary}\n${HOSPITAL.phone.secondary}`, link: `tel:${HOSPITAL.phone.primary}` },
                { icon: Mail, title: "Email Us", text: HOSPITAL.email, link: `mailto:${HOSPITAL.email}` },
                { icon: Clock, title: "OPD Hours", text: `Mon-Sat\n${HOSPITAL.opdHours.morning}\n${HOSPITAL.opdHours.evening}`, link: "#" },
              ].map(({ icon: Icon, title, text, link }) => (
                <a key={title} href={link} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-border transition-all text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-bold text-primary mb-2">{title}</h3>
                  <p className="text-muted text-sm whitespace-pre-line">{text}</p>
                </a>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <SectionHeader badge="Message Us" title="Send a Message" centered={false} />
                {submitted ? (
                  <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">Message Sent!</h3>
                    <p className="text-muted text-sm mt-2">We&apos;ll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm" placeholder="Your full name" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-primary mb-1.5 block">Phone *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm" placeholder="Mobile number" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-primary mb-1.5 block">Email</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm" placeholder="Your email" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1.5 block">Message *</label>
                      <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>

              {/* Map & Hospital Photo */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-video relative">
                  <Image src="/images/IMG_5797.JPG.jpeg" alt="Sanwariya Paras Hospital" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div id="map" className="rounded-2xl overflow-hidden shadow-md aspect-video">
                  <iframe
                    src={HOSPITAL.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location"
                  />
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
