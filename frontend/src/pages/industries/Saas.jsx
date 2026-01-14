import SEO from "@/components/SEO";
import { AuroraText } from "@/components/ui/aurora-text";
import GlassCard from "@/components/GlassCard";
import ServicesCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/Home/Footer";

export default function SaaSIndustry() {
  return (
    <>
      <SEO
        title="SaaS Development Company | Scalable SaaS Solutions – TechFavours"
        description="TechFavours is a SaaS development company helping startups and enterprises build secure, scalable, and high-performance SaaS platforms."
        url="https://www.techfavours.com/industries/saas-development"
        image="https://www.techfavours.com/og/saas.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SaaS Development Services",
          "provider": {
            "@type": "Organization",
            "name": "TechFavours"
          },
          "areaServed": "Worldwide",
          "serviceType": "SaaS Application Development"
        }}
      />

      {/* HERO */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h1 className="section-title">
          SaaS Development That <AuroraText>Scales</AuroraText>
        </h1>
        <p className="section-subtitle mt-6 max-w-3xl mx-auto">
          We design and build secure, scalable SaaS platforms for startups,
          growing companies, and enterprises—focused on performance,
          reliability, and long-term growth.
        </p>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-12">
          SaaS Challenges We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Scaling users without breaking performance",
            "Secure multi-tenant architecture",
            "High infrastructure costs",
            "Slow feature delivery",
            "Poor onboarding & retention",
            "Downtime & reliability issues",
          ].map((item, i) => (
            <GlassCard key={i} className="p-6">
              <p className="text-white/80">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-12">
          How <AuroraText>TechFavours</AuroraText> Builds SaaS
        </h2>

        <ul className="space-y-6 text-white/70 max-w-3xl">
          <li>✔ Cloud-native SaaS architecture</li>
          <li>✔ Secure authentication & role management</li>
          <li>✔ Scalable APIs & databases</li>
          <li>✔ Performance-first frontend (React / Next.js)</li>
          <li>✔ Ongoing optimization & support</li>
        </ul>
      </section>

      {/* RESULTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title mb-12">
          Real SaaS Results
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">99.9%</p>
            <p className="text-white/60 mt-2">Uptime</p>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">4×</p>
            <p className="text-white/60 mt-2">User Growth</p>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <p className="text-4xl font-semibold text-white">40%</p>
            <p className="text-white/60 mt-2">Cost Reduction</p>
          </GlassCard>
        </div>
      </section>

      <ServicesCTA />
      <Footer />
    </>
  );
}
