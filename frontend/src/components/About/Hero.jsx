import { AuroraText } from "@/components/ui/aurora-text";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        py-32 px-6
        max-w-6xl mx-auto
        text-center
      "
    >
      {/* PRIMARY H1 — ENTITY + VALUE */}
      <h1 className="section-title leading-tight">
        A Digital Product Partner That
        <br />
        <AuroraText>Builds, Scales & Sustains</AuroraText>
      </h1>

      {/* TRUST + EXPERTISE STATEMENT */}
      <p className="section-subtitle mt-6 max-w-3xl mx-auto">
        TechFavours is a digital product development company specializing in
        high-performance websites, SaaS platforms, AI automation, and
        long-term technology management for growing businesses.
      </p>

      {/* EXPERIENCE + AUTHORITY REINFORCEMENT */}
      <p className="mt-6 text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
        We work closely with startups, SaaS teams, and enterprises to design,
        develop, optimize, and continuously improve secure, scalable digital
        systems — with transparency, ownership, and long-term responsibility
        at the core of everything we do.
      </p>
    </section>
  );
}
