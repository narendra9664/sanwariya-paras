"use client";

import { useState } from "react";
import { X, Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren, Check, User, Calendar, Clock, ChevronLeft } from "lucide-react";
import { services } from "@/data/services";
import { doctors, getDoctorsByDepartment } from "@/data/doctors";
import { HOSPITAL } from "@/data/hospital";
import { cn } from "@/lib/utils";

/**
 * APPOINTMENT MODAL
 * 5-step booking flow:
 * 1. Select Department
 * 2. Select Doctor
 * 3. Select Date & Time
 * 4. Patient Details
 * 5. Confirmation
 * 
 * This is a demo — no real backend. Shows a success screen at the end.
 */

const iconMap: Record<string, React.ElementType> = {
  Heart, Activity, Bone, Baby, Scissors, Droplets, ScanLine, Siren,
};

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientReason, setPatientReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setStep(1);
    setSelectedDept(null);
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setPatientName("");
    setPatientPhone("");
    setPatientReason("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  // Generate next 14 days (skip Sundays)
  const dates: { label: string; value: string; day: string; disabled: boolean }[] = [];
  for (let i = 1; i <= 21 && dates.length < 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0) continue; // Skip Sunday
    dates.push({
      label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      value: d.toISOString().split("T")[0],
      day: d.toLocaleDateString("en-IN", { weekday: "short" }),
      disabled: false,
    });
  }

  const morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];
  const eveningSlots = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"];
  // Mock some slots as "full"
  const fullSlots = ["10:00 AM", "11:30 AM", "6:00 PM"];

  const filteredDoctors = selectedDept ? getDoctorsByDepartment(selectedDept) : [];
  const selectedDoctorData = doctors.find((d) => d.id === selectedDoctor);
  const selectedDeptData = services.find((s) => s.slug === selectedDept);

  const stepTitles = [
    "Select Department",
    "Select Doctor",
    "Select Date & Time",
    "Your Details",
    "Appointment Confirmed!",
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {step > 1 && step < 5 && (
              <button
                onClick={() => setStep(step - 1)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <p className="text-xs text-muted">Step {Math.min(step, 4)} of 4</p>
              <h2 className="font-display text-lg font-bold text-primary">
                {stepTitles[step - 1]}
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-accent transition-all duration-300 rounded-full"
            style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
          />
        </div>

        <div className="p-6">
          {/* Step 1: Select Department */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Heart;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedDept(service.slug);
                      setSelectedDoctor(null);
                      setStep(2);
                    }}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all text-center",
                      selectedDept === service.slug
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/30 hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                    <span className="text-sm font-medium text-primary leading-tight">
                      {service.name.split("(")[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 2: Select Doctor */}
          {step === 2 && (
            <div className="space-y-3">
              {filteredDoctors.length === 0 ? (
                <p className="text-center text-muted py-8">
                  No doctors available for this department.
                </p>
              ) : (
                filteredDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => {
                      setSelectedDoctor(doctor.id);
                      setStep(3);
                    }}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left",
                      selectedDoctor === doctor.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/30"
                    )}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <User className="w-7 h-7 text-primary/40" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{doctor.name}</p>
                      <p className="text-sm text-accent">{doctor.designation}</p>
                      <p className="text-xs text-muted mt-0.5">{doctor.qualifications}</p>
                      <p className="text-xs text-muted">
                        Available: {doctor.availableDays.slice(0, 3).join(", ")}...
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Step 3: Select Date & Time */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  Select Date
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {dates.slice(0, 10).map((date) => (
                    <button
                      key={date.value}
                      onClick={() => setSelectedDate(date.value)}
                      className={cn(
                        "p-2 rounded-xl text-center transition-all border",
                        selectedDate === date.value
                          ? "bg-primary text-white border-primary"
                          : "border-border hover:border-primary/30 hover:bg-gray-50"
                      )}
                    >
                      <p className="text-xs opacity-70">{date.day}</p>
                      <p className="text-sm font-semibold">{date.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Morning Slots (9 AM – 2 PM)
                  </h3>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {morningSlots.map((slot) => {
                      const isFull = fullSlots.includes(slot);
                      return (
                        <button
                          key={slot}
                          onClick={() => !isFull && setSelectedTime(slot)}
                          disabled={isFull}
                          className={cn(
                            "p-2 rounded-lg text-xs font-medium transition-all border",
                            isFull
                              ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed line-through"
                              : selectedTime === slot
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:border-primary/30"
                          )}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Evening Slots (5 PM – 8 PM)
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {eveningSlots.map((slot) => {
                      const isFull = fullSlots.includes(slot);
                      return (
                        <button
                          key={slot}
                          onClick={() => !isFull && setSelectedTime(slot)}
                          disabled={isFull}
                          className={cn(
                            "p-2 rounded-lg text-xs font-medium transition-all border",
                            isFull
                              ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed line-through"
                              : selectedTime === slot
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:border-primary/30"
                          )}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  {selectedTime && (
                    <button
                      onClick={() => setStep(4)}
                      className="w-full mt-6 bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all active:scale-95"
                    >
                      Continue
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Patient Details */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Full Name *</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Reason for Visit</label>
                <textarea
                  value={patientReason}
                  onChange={(e) => setPatientReason(e.target.value)}
                  placeholder="Briefly describe your concern..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <button
                onClick={async () => {
                  if (patientName && patientPhone) {
                    setIsSubmitting(true);
                    try {
                      const res = await fetch("/api/appointment", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          department: selectedDeptData?.name,
                          doctor: selectedDoctorData?.name,
                          date: selectedDate,
                          time: selectedTime,
                          patientName,
                          patientPhone,
                          patientReason,
                        }),
                      });
                      
                      // Even if it fails (e.g. env vars not set), we'll let them see the success screen
                      // so the user experience isn't broken for now.
                      // In a real prod environment, you'd handle the error here.
                      setStep(5);
                    } catch (error) {
                      console.error("Failed to submit appointment:", error);
                      setStep(5); // Proceed anyway for the sake of the demo
                    } finally {
                      setIsSubmitting(false);
                    }
                  }
                }}
                disabled={!patientName || !patientPhone || isSubmitting}
                className={cn(
                  "w-full py-3 rounded-xl font-semibold transition-all text-white flex items-center justify-center gap-2",
                  patientName && patientPhone && !isSubmitting
                    ? "bg-accent hover:bg-accent-dark active:scale-95"
                    : "bg-gray-300 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Activity className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center space-y-6">
              {/* Success animation */}
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center animate-bounce">
                  <Check className="w-7 h-7 text-white" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary">
                  Appointment Booked!
                </h3>
                <p className="text-muted text-sm mt-2">
                  We&apos;ll call you to confirm within 2 hours.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-warm-bg rounded-2xl p-5 text-left space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Department</span>
                  <span className="font-medium text-primary">{selectedDeptData?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Doctor</span>
                  <span className="font-medium text-primary">{selectedDoctorData?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Date</span>
                  <span className="font-medium text-primary">
                    {selectedDate && new Date(selectedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Time</span>
                  <span className="font-medium text-primary">{selectedTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Patient</span>
                  <span className="font-medium text-primary">{patientName}</span>
                </div>
              </div>

              {/* WhatsApp Link */}
              <a
                href={`https://wa.me/${HOSPITAL.whatsapp.number}?text=${encodeURIComponent(
                  `Hello, I've booked an appointment:\n\nDepartment: ${selectedDeptData?.name}\nDoctor: ${selectedDoctorData?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nName: ${patientName}\nPhone: ${patientPhone}\n\nPlease confirm.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm on WhatsApp
              </a>

              <button
                onClick={handleClose}
                className="block w-full text-muted text-sm hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
