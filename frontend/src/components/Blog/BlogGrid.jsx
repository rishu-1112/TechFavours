import { useEffect, useState } from "react";
import { getBlogs } from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function BlogGrid({ category }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((allBlogs) => {
      if (category) {
        setBlogs(allBlogs.filter((b) => b.category === category));
      } else {
        setBlogs(allBlogs);
      }
    });
  }, [category]);

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-16">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
