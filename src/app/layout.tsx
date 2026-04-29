import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono, Hind } from "next/font/google";
import "./globals.css";

/**
 * FONT LOADING
 * Next.js automatically optimizes these — no layout shift, zero FOUT.
 * Each font is loaded with a CSS variable so Tailwind/CSS can reference it.
 */

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-family-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-jetbrains",
  display: "swap",
});

const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-hind",
  display: "swap",
});

/**
 * SEO METADATA
 * This shows in Google search results, social shares, and browser tabs
 */
export const metadata: Metadata = {
  title: {
    default: "Sanwariya Paras Multi-Speciality Hospital | Chittorgarh",
    template: "%s | Sanwariya Paras Hospital",
  },
  description:
    "Advanced cardiac care, critical care, orthopaedics & multi-speciality treatments at Chittorgarh's premier hospital. 24/7 Emergency. Ayushman Bharat & RGHS empaneled. Led by Dr. Anurag Jain (DM Cardiology, CMC Vellore).",
  keywords: [
    "hospital chittorgarh",
    "cardiology chittorgarh",
    "cath lab chittorgarh",
    "sanwariya paras hospital",
    "ayushman bharat hospital chittorgarh",
    "RGHS hospital rajasthan",
    "orthopaedic chittorgarh",
    "ICU chittorgarh",
    "emergency hospital chittorgarh",
    "dr anurag jain cardiologist",
  ],
  openGraph: {
    title: "Sanwariya Paras Multi-Speciality Hospital",
    description:
      "Advanced cardiac care & multi-speciality treatments in Chittorgarh. 24/7 Emergency. Ayushman Bharat empaneled.",
    type: "website",
    locale: "en_IN",
    siteName: "Sanwariya Paras Hospital",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ChatWidget from "@/components/ui/ChatWidget";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${hind.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
