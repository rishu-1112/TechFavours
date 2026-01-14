import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="section-title mb-10">
        TechFavours Blog
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, 10).map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
}
