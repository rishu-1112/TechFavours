import GlassCard from "@/components/GlassCard";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Founder, ApkaKitchen",
    quote:
      "TechFavours transformed our idea into a scalable product. Performance, clarity, and delivery were spot on.",
  },
  {
    name: "Dr. Riya Sharma",
    role: "Director, CureWrap",
    quote:
      "The team understood healthcare constraints deeply. The final product exceeded expectations.",
  },
  {
    name: "Rahul Mehta",
    role: "Product Manager, SaaS CRM",
    quote:
      "Their development process is clean, transparent, and fast. Highly recommended.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Lead",
    quote:
      "From UI to growth optimization, everything was handled professionally.",
  },
  {
    name: "Vikram Singh",
    role: "Startup Founder",
    quote:
      "TechFavours feels like an in-house team. Strong execution and support.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="section-title mb-4">
          What Our Clients Say
        </h2>
        <p className="section-subtitle">
          Trusted by founders, teams, and businesses building for scale.
        </p>
      </div>

      {/* MARQUEE ROW 1 */}
      <Marquee pauseOnHover speed={35}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={`top-${i}`} data={t} />
        ))}
      </Marquee>

      {/* MARQUEE ROW 2 */}
      <Marquee reverse pauseOnHover speed={30} className="mt-10">
        {testimonials.map((t, i) => (
          <TestimonialCard key={`bottom-${i}`} data={t} />
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function TestimonialCard({ data }) {
  return (
    <GlassCard
      className="
        w-[320px] mx-4 p-6
        transition-transform duration-300
        hover:-translate-y-2
      "
    >
      <p className="text-white/80 text-sm leading-relaxed mb-6">
        “{data.quote}”
      </p>

      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div
          className="
            w-10 h-10 rounded-full
            bg-gradient-to-br from-blue-400/40 to-purple-400/40
            flex items-center justify-center
            text-white font-semibold
          "
        >
          {data.name.charAt(0)}
        </div>

        <div>
          <p className="text-white font-medium text-sm">
            {data.name}
          </p>
          <p className="text-white/50 text-xs">
            {data.role}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
