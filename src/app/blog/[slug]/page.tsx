"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
            <div className="bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">{post.category}</div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 mt-6 text-white/60 text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime} min read</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </section>
        <section className="py-16">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="font-display text-xl font-bold text-primary mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("**")) {
                return <h3 key={i} className="font-display text-xl font-bold text-primary mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1 text-muted">
                    {para.split("\n").map((li, j) => <li key={j} className="text-base">{li.replace("- ", "")}</li>)}
                  </ul>
                );
              }
              return <p key={i} className="text-muted text-base leading-relaxed mb-4">{para}</p>;
            })}
          </article>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
