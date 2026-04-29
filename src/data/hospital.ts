/**
 * Centralized hospital information
 * Single source of truth for all contact details, hours, and branding
 * NEVER hardcode these values elsewhere — always import from here
 */

export const HOSPITAL = {
  name: "Sanwariya Paras",
  fullName: "Sanwariya Paras Multi-Speciality Hospital",
  tagline: "Advanced Care, Close to Home.",
  subtitle: "Expert cardiology, critical care, and surgery — delivered with compassion at Sanwariya Paras Hospital.",
  
  // Location
  address: "Pratap Nagar, Chittorgarh, Rajasthan 312001, India",
  city: "Chittorgarh",
  state: "Rajasthan",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0!2d74.6269!3d24.8887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzE5LjMiTiA3NMKwMzcnMzYuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  
  // Contact
  phone: {
    primary: "01472-256500",
    secondary: "88548-10500",
    emergency: "88548-10500",
  },
  whatsapp: {
    number: "917733072738",
    displayNumber: "77330-72738",
    link: "https://wa.me/917733072738?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sanwariya%20Paras%20Hospital.",
  },
  email: "info@sanwariyaparashospital.com",
  website: "https://sanwariyaparashospital.com",
  
  // OPD Hours
  opdHours: {
    weekdays: "Mon – Sat: 9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    morning: "9:00 AM – 2:00 PM",
    evening: "5:00 PM – 8:00 PM",
    sunday: "Closed (Emergency Available 24/7)",
  },
  
  // Key Stats
  stats: {
    patients: 5000,
    icuBeds: 15,
    totalBeds: 40,
    doctors: 10,
    emergencyHours: "24/7",
  },
  
  // Empanelments
  empanelments: [
    "Ayushman Bharat (PMJAY)",
    "RGHS (Rajasthan Government Health Scheme)",
  ],
  
  // Social
  social: {
    facebook: "https://www.facebook.com/sanwariyaparashospital",
    instagram: "https://www.instagram.com/sanwariyaparashospital",
    youtube: "https://www.youtube.com/@sanwariyaparashospital",
    twitter: "https://twitter.com/sanwariyaparas",
  },
} as const;
