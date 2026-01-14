import GlassCard from "@/components/GlassCard";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Founder, ApkaKitchen",
    quote:
      "TechFavours transformed our idea into a scalable product. The performance, architecture, and execution quality were exceptional.",
  },
  {
    name: "Dr. Riya Sharma",
    role: "Director, CureWrap",
    quote:
      "They deeply understood healthcare compliance and UX needs. The final platform exceeded expectations on every level.",
  },
  {
    name: "Rahul Mehta",
    role: "Product Manager, SaaS CRM",
    quote:
      "Their development process is transparent, fast, and highly structured. TechFavours feels like an in-house engineering team.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Lead",
    quote:
      "From UI/UX design to performance optimization, everything was handled with clarity and precision.",
  },
  {
    name: "Vikram Singh",
    role: "Startup Founder",
    quote:
      "Strong execution, proactive communication, and long-term support. Highly recommended for startups and SaaS teams.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND AURORA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#A97CF8]/10 via-[#F38CB8]/10 to-[#FDCC92]/10 blur-[160px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20 px-6">
        <h2 className="section-title mb-4">
          Trusted by <span className="text-white">Real Clients</span>
        </h2>

        <p className="section-subtitle">
          Testimonials from founders, product leaders, and teams who trust
          TechFavours as their long-term software development partner.
        </p>
      </div>

      {/* MARQUEE TOP */}
      <Marquee pauseOnHover speed={28}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={`top-${i}`} data={t} />
        ))}
      </Marquee>

      {/* MARQUEE BOTTOM */}
      <Marquee
        reverse
        pauseOnHover
        speed={24}
        className="mt-12"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={`bottom-${i}`} data={t} />
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- TESTIMONIAL CARD ---------------- */

function TestimonialCard({ data }) {
  return (
    <GlassCard
      className="
        relative
        w-[340px] mx-4 p-7
        group
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_20px_60px_rgba(169,124,248,0.25)]
      "
    >
      {/* AURORA HOVER GLOW */}
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.18),transparent_70%)]
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* STARS */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FDCC92] text-[#FDCC92]"
            />
          ))}
        </div>

        {/* QUOTE */}
        <p className="text-white/85 text-sm leading-relaxed mb-6">
          “{data.quote}”
        </p>

        {/* AUTHOR */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-11 h-11 rounded-full
              bg-gradient-to-br
              from-[#A97CF8]/40
              via-[#F38CB8]/40
              to-[#FDCC92]/40
              flex items-center justify-center
              text-white font-semibold
              shadow-inner
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

      </div>
    </GlassCard>
  );
}
