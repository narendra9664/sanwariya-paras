"use client";

import { cn } from "@/lib/utils";

interface ECGLineProps {
  className?: string;
}

export default function ECGLine({ className }: ECGLineProps) {
  return (
    <div className={cn("relative w-full h-16 overflow-hidden flex items-center pointer-events-none opacity-20", className)}>
      <svg
        className="absolute w-[200%] h-full animate-[ecg-slide_5s_linear_infinite]"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        {/* We draw two identical lines side-by-side so they loop seamlessly */}
        <polyline
          points="
            0,50 50,50 60,30 70,70 80,50 150,50 160,20 170,80 180,40 190,50 300,50 310,40 320,60 330,50 400,50 410,20 420,90 430,10 440,50 500,50
            550,50 560,30 570,70 580,50 650,50 660,20 670,80 680,40 690,50 800,50 810,40 820,60 830,50 900,50 910,20 920,90 930,10 940,50 1000,50
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        />
      </svg>
    </div>
  );
}
