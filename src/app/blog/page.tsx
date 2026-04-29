"use client";

import { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blogs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AppointmentModal from "@/components/ui/AppointmentModal";
import BlogCard from "@/components/ui/BlogCard";

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? blogPosts : blogPosts.filter((b) => b.categorySlug === activeCategory);

  return (
    <>
      <Navbar onBookAppointment={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Health Knowledge</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Medical Blog & <span className="text-accent">Health Articles</span></h1>
            <p className="text-white/70 text-lg mt-4 max-w-xl">Expert medical advice from our doctors.</p>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-12">
              {blogCategories.map((cat) => (
                <button key={cat.slug} onClick={() => setActiveCategory(cat.slug)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.slug ? "bg-primary text-white" : "bg-gray-100 text-muted hover:bg-gray-200"}`}>{cat.name}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
