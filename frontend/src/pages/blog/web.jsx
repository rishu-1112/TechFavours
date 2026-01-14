import SEO from "@/components/SEO";
import BlogGrid from "@/components/Blog/BlogGrid";

export default function WebDevBlogCategory() {
  return (
    <>
      <SEO
        title="Web Development Blog | Modern Frontend, Backend & Performance"
        description="In-depth web development articles covering React, Next.js, backend systems, APIs, performance optimization, and scalable web architecture."
        url="https://www.techfavours.com/blog/web"
        image="https://www.techfavours.com/og/web-blog.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Web Development Blog",
          "description":
            "Technical guides and best practices for modern web development, performance optimization, and scalable web applications.",
          "publisher": {
            "@type": "Organization",
            "name": "TechFavours"
          }
        }}
      />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="section-title">
          Modern Web Development
        </h1>

        <p className="section-subtitle max-w-3xl mt-4">
          Deep technical insights into frontend engineering, backend systems,
          API design, performance optimization, and scalable web architectures.
          Built for developers, CTOs, and product teams.
        </p>

        {/* SEO SUPPORTING CONTENT */}
        <div className="mt-10 text-sm text-white/60 max-w-3xl">
          <p>
            Explore expert-written content on modern web development stacks such
            as React, Next.js, Node.js, cloud infrastructure, and performance-first
            engineering practices used in production-grade applications.
          </p>
        </div>

        {/* BLOG POSTS */}
        <BlogGrid category="web" />
      </section>
    </>
  );
}
