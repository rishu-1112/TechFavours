import { ShieldCheck } from "lucide-react";
import AuroraText from "../ui/aurora-text";
import GlassCard from "../GlassCard";
export function TechComparison() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <h2 className="section-title mb-10">
        Why Our Stack Outperforms
        <AuroraText> WordPress Agencies</AuroraText>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-white/10">
          <thead>
            <tr className="bg-white/5 text-white">
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">TechFavours</th>
              <th className="p-4 text-left">Typical WP Agency</th>
            </tr>
          </thead>
          <tbody className="text-white/70">
            <tr>
              <td className="p-4">Performance</td>
              <td className="p-4 text-emerald-400">Optimized, lightning-fast</td>
              <td className="p-4">Plugin-heavy, slow</td>
            </tr>
            <tr>
              <td className="p-4">Scalability</td>
              <td className="p-4 text-emerald-400">Built for growth & traffic</td>
              <td className="p-4">Breaks at scale</td>
            </tr>
            <tr>
              <td className="p-4">Security</td>
              <td className="p-4 text-emerald-400">Custom secure architecture</td>
              <td className="p-4">Plugin vulnerabilities</td>
            </tr>
            <tr>
              <td className="p-4">SEO</td>
              <td className="p-4 text-emerald-400">Core Web Vitals optimized</td>
              <td className="p-4">Theme-dependent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}



export function SecurityCompliance() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="section-title mb-6">
        Security & <AuroraText>Compliance</AuroraText>
      </h2>

      <p className="section-subtitle mb-14 max-w-3xl">
        Security is embedded into every layer of our development process —
        from architecture design to deployment and ongoing monitoring.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Secure API & Authentication",
          "Role-based Access Control",
          "Encrypted Data Storage",
          "Cloud Security Best Practices",
          "Regular Code Reviews",
          "Compliance-ready Architecture",
        ].map((item, i) => (
          <GlassCard key={i} className="p-6 flex items-center gap-4">
            <ShieldCheck className="text-emerald-400" />
            <span className="text-white/80 text-sm">{item}</span>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

const tools = [
  "AWS",
  "Docker",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "GitHub",
];

export function CredibilityStrip() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <p className="text-center text-white/50 text-sm mb-10">
        Trusted tools & technologies powering our solutions
      </p>

      <div className="flex flex-wrap justify-center gap-6 opacity-80">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="
              px-5 py-2
              rounded-full
              text-xs
              text-white/70
              border border-white/15
              bg-white/5
            "
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
