import BlogCard from "./BlogCard";
import { getBlogs } from "@/data/blogs";
import { useEffect, useState } from "react";

export default function RelatedBlogs({ currentSlug, category }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return null;

  const related = blogs
    .filter(
      (b) => b.slug !== currentSlug && b.category === category
    )
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="section-title mb-8">
        Related Articles
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
}
