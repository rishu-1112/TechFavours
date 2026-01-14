import { AuroraText } from "@/components/ui/aurora-text";

export default function ContactHero() {
  return (
    <section className="relative py-32 px-6 max-w-5xl mx-auto text-center">
      <h1 className="section-title">
        Let’s Build Something <AuroraText>That Scales</AuroraText>
      </h1>

      <p className="section-subtitle mt-6 max-w-3xl mx-auto">
        Looking for a reliable web development, SaaS, or AI automation partner?
        Tell us about your project and we’ll help you plan, build, and scale it
        with confidence.
      </p>
    </section>
  );
}
