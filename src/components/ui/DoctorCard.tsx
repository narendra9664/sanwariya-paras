import { useState } from "react";
import { User } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { Button } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment?: () => void;
  showBio?: boolean;
}

export default function DoctorCard({ doctor, onBookAppointment, showBio = false }: DoctorCardProps) {
  const [expandedBio, setExpandedBio] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border transition-all duration-300 flex flex-col h-full">
      {/* Photo Area */}
      <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-primary/40" />
        </div>
        {/* Department badge */}
        <Badge className="absolute top-4 right-4 shadow-sm bg-accent/90">
          {doctor.department}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-primary">
          {doctor.name}
        </h3>
        <p className="text-accent text-sm font-semibold mt-1">
          {doctor.designation}
        </p>
        <p className="text-muted text-sm mt-2">
          {doctor.qualifications}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted mt-3">
          <span>{doctor.experience} yrs experience</span>
          <span>•</span>
          <span className="truncate">{doctor.languages.join(", ")}</span>
        </div>

        {showBio && doctor.bio && (
          <div className="mt-4">
            <p className={`text-muted text-sm leading-relaxed ${!expandedBio ? "line-clamp-3" : ""}`}>
              {doctor.bio}
            </p>
            <button
              onClick={() => setExpandedBio(!expandedBio)}
              className="text-accent text-sm font-medium mt-2 hover:underline"
            >
              {expandedBio ? "Show Less" : "Read More"}
            </button>
          </div>
        )}

        <div className="mt-auto pt-5">
          {/* CTA */}
          {onBookAppointment && (
            <Button fullWidth onClick={onBookAppointment}>
              Book Appointment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
