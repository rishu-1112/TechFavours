import SEO from "@/components/SEO";
import BlogGrid from "@/components/Blog/BlogGrid";

export default function SaaSBlogCategory() {
  return (
    <>
      <SEO
        title="SaaS Development Blog | Architecture, Scaling & Security"
        description="In-depth SaaS development guides covering architecture, scaling, security, and cloud best practices."
        url="https://www.techfavours.com/blog/saas"
      />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="section-title">SaaS Development Insights</h1>
        <p className="section-subtitle max-w-3xl mt-4">
          Expert-written guides on SaaS architecture, cloud scalability,
          performance optimization, and enterprise SaaS best practices.
        </p>

        <BlogGrid category="saas" />
      </section>
    </>
  );
}
