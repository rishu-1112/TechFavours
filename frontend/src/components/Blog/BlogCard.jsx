import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <GlassCard className="p-6 group hover:-translate-y-1 transition">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg mb-4 w-full h-48 object-cover"
          loading="lazy"
        />

        <h3 className="text-lg font-semibold text-white mb-2">
          {blog.title}
        </h3>

        <p className="text-white/70 text-sm mb-4">
          {blog.excerpt}
        </p>

        <div className="flex justify-between text-xs text-white/50">
          <span>{blog.date}</span>
          <span>{blog.readingTime}</span>
        </div>
      </GlassCard>
    </Link>
  );
}
