import { Check } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const plans = [
  {
    title: "Growth Projects",
    value: "Best for startups & MVPs",
    points: [
      "Fast turnaround",
      "Lean & scalable architecture",
      "Performance-first approach",
    ],
  },
  {
    title: "Scale & Optimize",
    value: "For SaaS & growing businesses",
    points: [
      "Advanced features & integrations",
      "Security & performance optimization",
      "Long-term scalability",
    ],
  },
  {
    title: "Enterprise Solutions",
    value: "Custom & mission-critical",
    points: [
      "Custom architecture",
      "Compliance & security",
      "Dedicated support & monitoring",
    ],
  },
];

export function ROIPricing() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <h2 className="section-title mb-6">
        ROI-Focused <AuroraText>Engagement Models</AuroraText>
      </h2>

      <p className="section-subtitle max-w-3xl mb-16">
        We don’t sell fixed packages — we design solutions focused on
        return on investment, long-term performance, and measurable growth.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <GlassCard key={i} className="p-8">
            <h3 className="text-white font-semibold text-lg mb-2">
              {plan.title}
            </h3>
            <p className="text-white/60 text-sm mb-6">
              {plan.value}
            </p>

            <ul className="space-y-3">
              {plan.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3 text-white/70">
                  <Check className="text-emerald-400 w-4 h-4 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
