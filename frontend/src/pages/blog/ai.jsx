import SEO from "@/components/SEO";
import BlogGrid from "@/components/Blog/BlogGrid";

export default function AIBlogCategory() {
  return (
    <>
      <SEO
        title="AI Automation Blog | Business AI, Workflows & Intelligent Systems"
        description="Expert articles on AI automation, machine learning workflows, business process automation, and real-world AI applications for startups and enterprises."
        url="https://www.techfavours.com/blog/ai"
        image="https://www.techfavours.com/og/ai-blog.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "AI Automation Blog",
          "description":
            "Insights and guides on AI automation, intelligent workflows, and applied artificial intelligence for modern businesses.",
          "publisher": {
            "@type": "Organization",
            "name": "TechFavours"
          }
        }}
      />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="section-title">
          AI Automation & Intelligent Systems
        </h1>

        <p className="section-subtitle max-w-3xl mt-4">
          Practical, business-ready insights on AI automation, machine learning
          integration, intelligent workflows, and scalable AI systems.
          Written for founders, product teams, and technology leaders.
        </p>

        {/* SEO SUPPORTING TEXT */}
        <div className="mt-10 text-sm text-white/60 max-w-3xl">
          <p>
            Our AI blog covers real-world applications of artificial intelligence,
            including AI automation for operations, workflow optimization,
            customer support automation, predictive analytics, and intelligent
            SaaS platforms.
          </p>
        </div>

        {/* BLOG POSTS */}
        <BlogGrid category="ai" />
      </section>
    </>
  );
}
