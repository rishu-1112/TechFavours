import { useParams } from "react-router-dom";
import { blogs } from "@/data/blogs";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";
import Footer from "@/components/Home/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/lib/getBlogBySlug"; // adjust import path

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchContent() {
      const data = await getBlogBySlug(slug);
      setContent(data);
    }
    if (slug) {
      fetchContent();
    }
  }, [slug]);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <SEO
        title={`${blog.title} | TechFavours`}
        description={blog.excerpt}
        url={`https://www.techfavours.com/blog/${blog.slug}`}
        image={blog.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.title,
          author: { "@type": "Person", name: blog.author },
          datePublished: blog.date,
        }}
      />

      <article className="max-w-4xl mx-auto py-24 px-6">
        <Breadcrumbs category={blog.category} title={blog.title} />

        <h1 className="text-4xl font-bold text-white mt-6">{blog.title}</h1>

        <p className="text-sm text-white/50 mt-2">
          By {blog.author} · {blog.date}
        </p>

        <div className="prose prose-invert max-w-none mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        <RelatedBlogs currentSlug={slug} category={blog.category} />
      </article>

      <Footer />
    </>
  );
}