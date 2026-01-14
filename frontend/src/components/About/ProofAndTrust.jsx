import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average Growth Achieved" },
  { value: "24/7", label: "Support & Monitoring" },
];

const testimonials = [
  {
    name: "Aman Verma",
    role: "Founder, ApkaKitchen",
    quote:
      "TechFavours helped us move from idea to production with clarity and speed. The performance gains were immediate.",
  },
  {
    name: "Dr. Riya Sharma",
    role: "Director, CureWrap",
    quote:
      "Their understanding of security, compliance, and healthcare workflows is outstanding. Highly reliable team.",
  },
  {
    name: "Rahul Mehta",
    role: "Product Lead, SaaS Platform",
    quote:
      "Clean architecture, transparent communication, and on-time delivery. They feel like an in-house team.",
  },
];

export default function ProofAndTrust() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#A97CF8]/20 via-[#F38CB8]/10 to-[#FDCC92]/20 blur-[140px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="section-title">
          Proven <AuroraText>Trust</AuroraText>. Measurable Results.
        </h2>
        <p className="section-subtitle mt-6">
          Businesses choose TechFavours for reliability, transparency,
          and long-term performance — not just delivery.
        </p>
      </div>

      {/* STATS */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <GlassCard className="p-8 text-center">
              <div className="text-3xl font-semibold text-white mb-2">
                {item.value}
              </div>
              <p className="text-white/60 text-sm">
                {item.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <GlassCard className="p-8 h-full flex flex-col">
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                “{t.quote}”
              </p>

              <div className="mt-auto">
                <p className="text-white font-medium text-sm">
                  {t.name}
                </p>
                <p className="text-white/50 text-xs">
                  {t.role}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* TRUST STATEMENT */}
      <div className="relative z-10 text-center mt-20 max-w-2xl mx-auto">
        <p className="text-white/70 text-sm leading-relaxed">
          Our clients trust us with mission-critical systems, long-term
          scalability, and continuous improvement. From startups to
          regulated industries, we build with accountability and care.
        </p>
      </div>

    </section>
  );
}
