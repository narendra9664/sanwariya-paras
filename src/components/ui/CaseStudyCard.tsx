import Link from "next/link";
import { ArrowRight, Award, User } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { doctors } from "@/data/doctors";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const doctor = doctors.find((d) => d.id === caseStudy.doctorId);

  return (
    <Link 
      href={`/case-studies/${caseStudy.slug}`} 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border transition-all flex flex-col h-full"
    >
      <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/5 flex items-center justify-between px-6 shrink-0">
        <div>
          <span className="bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {caseStudy.department}
          </span>
          <p className="text-xs text-muted mt-2">{caseStudy.patientInfo}</p>
        </div>
        <div className="text-right">
          <Award className="w-8 h-8 text-accent/30 ml-auto" />
          <span className="text-xs font-semibold text-accent">{caseStudy.outcome}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-muted text-sm mt-2 line-clamp-2 flex-1">
          {caseStudy.challenge}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border mt-4">
          <span className="text-xs text-muted flex items-center gap-1">
            <User className="w-3 h-3" />
            {doctor?.name || "Specialist"}
          </span>
          <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read Case <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
