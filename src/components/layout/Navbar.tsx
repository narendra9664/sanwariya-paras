"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { cn } from "@/lib/utils";

/**
 * NAVBAR
 * Sticky navigation with blur-on-scroll, mobile menu, and emergency number
 * 
 * How it works:
 * - Starts transparent, becomes blurred/white when you scroll past 80px
 * - Mobile: hamburger icon opens a full-screen overlay menu
 * - Emergency number is always visible in red
 */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ onBookAppointment }: { onBookAppointment?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span
                className={cn(
                  "font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                Sanwariya{" "}
                <span className="text-accent">Paras</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full",
                    isScrolled ? "text-text" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Section: Emergency + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${HOSPITAL.phone.emergency}`}
                className="flex items-center gap-2 text-cta font-semibold text-sm"
              >
                <Phone className="w-4 h-4 animate-pulse-slow" />
                {HOSPITAL.phone.emergency}
              </a>
              <button
                onClick={onBookAppointment}
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile: Emergency + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${HOSPITAL.phone.emergency}`}
                className="flex items-center gap-1 text-cta font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{HOSPITAL.phone.emergency}</span>
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-primary/95 backdrop-blur-lg transition-opacity duration-300",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-300",
            isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-2xl font-display font-semibold hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href={`tel:${HOSPITAL.phone.emergency}`}
              className="flex items-center gap-2 text-cta font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              Emergency: {HOSPITAL.phone.emergency}
            </a>
            <button
              onClick={() => {
                setIsMobileOpen(false);
                onBookAppointment?.();
              }}
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
