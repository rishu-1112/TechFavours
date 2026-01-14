import { RainbowButton } from "@/components/ui/rainbow-button";

export default function AboutCTA() {
  return (
    <section className="py-32 px-6 text-center">
      <h2 className="section-title mb-6">
        Ready to Build With Confidence?
      </h2>

      <p className="section-subtitle max-w-xl mx-auto mb-10">
        Partner with TechFavours to build scalable, secure, and
        performance-driven digital products.
      </p>

      <RainbowButton className="px-10 py-4">
        Talk to Our Team
      </RainbowButton>
    </section>
  );
}
