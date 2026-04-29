import { Shield, FileCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * INSURANCE & EMPANELMENT SECTION
 * Shows Ayushman Bharat and RGHS badges
 * Simple centered layout — builds trust with patients
 */

export default function InsuranceLogos() {
  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Accepted Insurance & Government Schemes"
          subtitle="We are empaneled under major government health schemes for cashless treatment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Ayushman Bharat */}
          <div className="bg-white border-2 border-accent/20 rounded-2xl p-8 text-center hover:border-accent/40 transition-colors shadow-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary">Ayushman Bharat</h3>
            <p className="text-accent font-semibold text-sm mt-1">PMJAY</p>
            <p className="text-muted text-sm mt-2">
              Up to ₹5 lakh cashless treatment per family per year
            </p>
          </div>

          {/* RGHS */}
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary">RGHS</h3>
            <p className="text-primary font-semibold text-sm mt-1">Rajasthan Government</p>
            <p className="text-muted text-sm mt-2">
              Cashless treatment for state government employees & pensioners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
