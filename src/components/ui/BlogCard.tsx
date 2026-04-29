import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border transition-all flex flex-col h-full"
    >
      <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative shrink-0">
        <Tag className="w-12 h-12 text-primary/20" />
        <div className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted mb-3">
          <span>{post.author}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-muted text-sm mt-2 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-auto pt-4 group-hover:gap-2 transition-all">
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
