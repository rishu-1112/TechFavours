import SEO from "@/components/SEO";
import { AuroraText } from "@/components/ui/aurora-text";
import GlassCard from "@/components/GlassCard";
import ServicesCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/Home/Footer";

export default function ApkaKitchenCaseStudy() {
  return (
    <>
      <SEO
        title="ApkaKitchen Case Study | Food Ordering Platform – TechFavours"
        description="How TechFavours built a scalable food ordering platform for ApkaKitchen, improving performance, conversions, and operational efficiency."
        url="https://www.techfavours.com/case-studies/apka-kitchen"
        image="https://www.techfavours.com/og/apkakitchen.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "CaseStudy",
          "name": "ApkaKitchen Food Ordering Platform",
          "about": "Food ordering SaaS platform development",
          "provider": {
            "@type": "Organization",
            "name": "TechFavours"
          }
        }}
      />

      {/* HERO */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h1 className="section-title">
          Scaling Food Delivery with <AuroraText>Performance</AuroraText>
        </h1>
        <p className="section-subtitle mt-6 max-w-3xl mx-auto">
          ApkaKitchen partnered with TechFavours to build a fast,
          scalable food ordering platform that supports growth,
          reliability, and customer retention.
        </p>
      </section>

      {/* CLIENT OVERVIEW */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-8">Client Overview</h2>
        <p className="text-white/70 max-w-3xl">
          ApkaKitchen is a growing food delivery startup focused on
          providing affordable and high-quality meals to urban customers.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-8">Challenges</h2>
        <ul className="list-disc pl-6 space-y-3 text-white/70">
          <li>Slow website performance during peak hours</li>
          <li>Limited scalability for growing orders</li>
          <li>Poor conversion rate on mobile</li>
          <li>Manual order handling inefficiencies</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-8">Our Solution</h2>
        <ul className="list-disc pl-6 space-y-3 text-white/70">
          <li>Built a high-performance React-based frontend</li>
          <li>Scalable Node.js backend with secure APIs</li>
          <li>Optimized database queries & caching</li>
          <li>Mobile-first UX redesign</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-8">Technology Stack</h2>
        <div className="flex flex-wrap gap-4 text-white/70">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>AWS</span>
          <span>Docker</span>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Results</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">3×</p>
            <p className="text-white/60 mt-2">Order Growth</p>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">1.8s</p>
            <p className="text-white/60 mt-2">Page Load Time</p>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">42%</p>
            <p className="text-white/60 mt-2">Conversion Increase</p>
          </GlassCard>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <blockquote className="text-white/80 italic text-lg">
          “TechFavours transformed our idea into a scalable platform.
          Performance, clarity, and delivery were outstanding.”
        </blockquote>
        <p className="mt-4 text-white/50">— Founder, ApkaKitchen</p>
      </section>

      <ServicesCTA />
      <Footer />
    </>
  );
}
