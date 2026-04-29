import Link from "next/link";
import { Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren,
};

export default function ServicesMarquee() {
  // We duplicate the services array twice to ensure seamless infinite scrolling
  const duplicatedServices = [...services, ...services, ...services, ...services];

  return (
    <section className="bg-surface py-6 border-b border-border overflow-hidden relative">
      {/* Subtle fade effect on the edges to make it look embedded */}
      <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee hover:animation-play-state-paused group">
        {duplicatedServices.map((service, index) => {
          const Icon = iconMap[service.icon] || Heart;

          return (
            <Link
              key={`${service.id}-${index}`}
              href={`/services/${service.slug}`}
              className="flex items-center gap-3 px-6 py-2 mx-3 bg-white border border-border rounded-full hover:border-accent hover:shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-primary text-sm">
                {service.name}
              </span>
              <span className="text-muted text-xs mx-1">•</span>
              <span className="text-primary/60 font-hindi text-xs">
                {service.nameHindi}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
