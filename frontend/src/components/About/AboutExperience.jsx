import { AuroraText } from "@/components/ui/aurora-text";
import GlassCard from "@/components/GlassCard";

export default function AboutExperience() {
  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-16">
        <h2 className="section-title">
          Experience That Goes
          <AuroraText> Beyond Delivery</AuroraText>
        </h2>

        <p className="section-subtitle mt-5">
          Our experience is shaped by real projects, long-term partnerships,
          and continuous improvement — not just launches.
        </p>
      </div>

      {/* EXPERIENCE GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        
        <ExperienceCard
          title="End-to-End Product Ownership"
          desc="We don’t just hand over code. From early planning and architecture to post-launch monitoring and enhancements, we take ownership of the entire product lifecycle."
        />

        <ExperienceCard
          title="Reference-Based Development"
          desc="We work closely with clients’ references, inspirations, and competitors to build solutions aligned with real market expectations — not assumptions."
        />

        <ExperienceCard
          title="Day-to-Day Product Enhancements"
          desc="Our team continuously improves live systems through performance optimizations, UI refinements, feature iterations, and security updates."
        />

        <ExperienceCard
          title="Client Review & Feedback Loops"
          desc="We maintain structured review cycles with clients — sharing progress updates, improvement suggestions, and clear recommendations."
        />

        <ExperienceCard
          title="Scalable & Secure Engineering"
          desc="Every system is built with scalability, maintainability, and security in mind — ensuring products grow without technical debt."
        />

        <ExperienceCard
          title="Long-Term Technical Support"
          desc="We stay involved even after launch — supporting scaling, integrations, infrastructure improvements, and future upgrades."
        />

      </div>
    </section>
  );
}

function ExperienceCard({ title, desc }) {
  return (
    <GlassCard className="p-8 h-full">
      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed text-sm">
        {desc}
      </p>
    </GlassCard>
  );
}
