import GlassCard from "@/components/GlassCard";

export default function WhoWeAre() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <GlassCard className="p-12">
        <h2 className="section-title mb-6">Who We Are</h2>

        <p className="text-white/70 leading-relaxed max-w-4xl">
          We are a team of engineers, designers, and problem solvers
          focused on building digital experiences that deliver real business
          outcomes. At TechFavours, we don’t ship code — we build systems
          designed for performance, security, and long-term growth.
        </p>
      </GlassCard>
    </section>
  );
}
