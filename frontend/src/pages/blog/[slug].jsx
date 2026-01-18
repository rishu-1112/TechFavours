import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/data/blogs"
import Breadcrumbs from "@/components/Blog/Breadcrumbs";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";
import { MDXProvider } from "@mdx-js/react";

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlogBySlug(slug).then(setBlog);
  }, [slug]);

  if (!blog) return null;

  return (
    <article className="max-w-3xl mx-auto py-28 px-6 prose prose-invert">
      <Breadcrumbs />

      <h1>{blog.title}</h1>
      <p className="opacity-60">
        {blog.date} · {blog.readingTime}
      </p>

      {/* Render MDX content */}
      <MDXProvider>
        <div>{blog.content}</div>
      </MDXProvider>

      <RelatedBlogs currentSlug={slug} />
    </article>
  );
}
