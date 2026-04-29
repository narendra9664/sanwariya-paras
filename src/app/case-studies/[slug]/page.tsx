"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Quote, Award } from "lucide-react";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { doctors } from "@/data/doctors";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  const doctor = doctors.find(d => d.id === cs.doctorId);

  const sections = [
    { title: "The Challenge", content: cs.challenge, color: "bg-cta/5 border-cta/20" },
    { title: "Our Approach", content: cs.approach, color: "bg-primary/5 border-primary/20" },
    { title: "Treatment", content: cs.treatment, color: "bg-accent/5 border-accent/20" },
    { title: "Result", content: cs.result, color: "bg-accent/10 border-accent/30" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Case Studies
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.department}</span>
              <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><Award className="w-3 h-3" />{cs.outcome}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">{cs.title}</h1>
            <p className="text-white/60 text-sm mt-3">{cs.patientInfo} • {cs.readTime} min read • Treated by {doctor?.name}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title} className={`${s.color} border rounded-2xl p-6 lg:p-8`}>
                <h2 className="font-display text-xl font-bold text-primary mb-4">{s.title}</h2>
                <p className="text-muted leading-relaxed">{s.content}</p>
              </div>
            ))}
            {cs.patientQuote && (
              <div className="bg-primary rounded-2xl p-8 text-center">
                <Quote className="w-8 h-8 text-accent/40 mx-auto mb-4" />
                <p className="text-white/90 text-lg italic leading-relaxed">&ldquo;{cs.patientQuote}&rdquo;</p>
                <p className="text-white/50 text-sm mt-4">— {cs.patientInfo}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
