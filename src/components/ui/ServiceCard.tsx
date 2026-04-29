import Link from "next/link";
import { Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  showHindiName?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren,
};

export default function ServiceCard({ service, showHindiName = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Heart;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl border border-border hover:border-accent/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Green left border on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent/20 group-hover:bg-accent rounded-2xl flex items-center justify-center mb-5 transition-all shrink-0">
        <IconComponent className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
      </div>

      {/* Content */}
      <h3 className="font-display text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
        {service.name}
      </h3>
      {showHindiName && (
        <p className="text-xs text-primary/50 font-hindi mb-2">{service.nameHindi}</p>
      )}
      <p className={`text-muted text-sm leading-relaxed mb-4 flex-1 ${showHindiName ? "line-clamp-3" : ""}`}>
        {service.shortDescription}
      </p>

      {/* Link */}
      <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-2">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
