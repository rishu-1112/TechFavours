import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import BlogCard from "@/components/Blog/BlogCard";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <SEO
        title="TechFavours Blog | SaaS, AI & Web Development"
        description="Expert insights on SaaS architecture, AI automation, and scalable web development."
        url="https://www.techfavours.com/blog"
      />

      <section className="max-w-7xl mx-auto py-24 px-6">
        <h1 className="section-title mb-12">TechFavours Blog</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
