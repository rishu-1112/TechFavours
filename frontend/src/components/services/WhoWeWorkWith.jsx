import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const audiences = [
  {
    title: "Startups & Founders",
    desc: "MVP development, rapid prototyping, and scalable foundations to help startups launch fast and validate ideas.",
  },
  {
    title: "SaaS Companies",
    desc: "High-performance SaaS platforms with secure APIs, subscriptions, analytics, and long-term scalability.",
  },
  {
    title: "Enterprises",
    desc: "Robust enterprise-grade systems, cloud infrastructure, integrations, and compliance-ready architecture.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <h2 className="section-title mb-6">
        Who We <AuroraText>Work With</AuroraText>
      </h2>

      <p className="section-subtitle max-w-3xl mb-16">
        We partner with ambitious teams — from early-stage startups to
        fast-growing SaaS companies and enterprises — delivering technology
        that scales with business growth.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {audiences.map((item, i) => (
          <GlassCard key={i} className="p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {item.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
