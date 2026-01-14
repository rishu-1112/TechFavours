import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const mappings = [
  {
    tech: "React + Next.js",
    use: "High-conversion marketing & SaaS platforms",
    result: "42% faster load time • 31% higher engagement",
  },
  {
    tech: "Node.js + PostgreSQL",
    use: "Scalable SaaS backends & APIs",
    result: "Handled 10x traffic growth without downtime",
  },
  {
    tech: "AWS + Docker",
    use: "Cloud-native infrastructure",
    result: "99.9% uptime • reduced hosting costs by 28%",
  },
  {
    tech: "AI Automation",
    use: "Workflow & operations automation",
    result: "Saved 20+ hours/week through automation",
  },
];

export function TechCaseMapping() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="section-title mb-6">
        Technology Backed by <AuroraText>Real Results</AuroraText>
      </h2>

      <p className="section-subtitle mb-16 max-w-3xl">
        Every technology we use is proven through real-world case studies.
        Our solutions are designed for performance, scalability, and measurable
        business impact.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {mappings.map((item, i) => (
          <GlassCard key={i} className="p-8">
            <h3 className="text-white font-semibold text-lg mb-2">
              {item.tech}
            </h3>
            <p className="text-white/70 text-sm mb-3">
              {item.use}
            </p>
            <p className="text-sm text-emerald-400">
              ✔ {item.result}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
