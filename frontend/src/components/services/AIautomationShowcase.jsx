import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const automations = [
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks, approvals, and internal processes using AI-powered workflows.",
  },
  {
    title: "AI Integrations",
    desc: "Integrate AI tools into existing platforms for content, analytics, and customer operations.",
  },
  {
    title: "Business Intelligence",
    desc: "Data-driven dashboards and AI insights for faster, smarter decisions.",
  },
];

export function AIAutomationShowcase() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <h2 className="section-title mb-6">
        AI Automation & <AuroraText>Smart Systems</AuroraText>
      </h2>

      <p className="section-subtitle max-w-3xl mb-16">
        We help businesses leverage AI automation to reduce costs,
        increase efficiency, and unlock scalable growth opportunities.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {automations.map((item, i) => (
          <GlassCard key={i} className="p-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm">
              {item.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
