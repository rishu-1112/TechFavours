import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Not a Template Agency",
    desc: "We don’t rely on WordPress themes or copy-paste layouts. Every solution is custom-built for performance, scalability, and long-term growth.",
  },
  {
    title: "Reference-Based Execution",
    desc: "Clients can share references they like. We create a working sample early so expectations are aligned before full-scale development.",
  },
  {
    title: "Daily Progress & Transparency",
    desc: "You receive frequent updates, previews, and improvement suggestions — no black boxes, no surprises.",
  },
  {
    title: "Built for Scalability",
    desc: "Our systems are designed to grow with your business, whether you're a startup, SaaS company, or enterprise.",
  },
  {
    title: "AI & Automation Ready",
    desc: "We integrate AI automation, workflows, and intelligent systems to reduce manual effort and improve efficiency.",
  },
  {
    title: "Performance & Security First",
    desc: "From optimized load times to secure authentication and data handling, quality is never an afterthought.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We stay involved post-launch with monitoring, enhancements, reviews, and continuous optimization.",
  },
  {
    title: "Business-Driven Thinking",
    desc: "Every technical decision is tied to real business outcomes like conversions, engagement, and ROI.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#A97CF8]/15 via-[#F38CB8]/10 to-[#FDCC92]/15 blur-[180px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-3xl mb-20">
        <h2 className="section-title">
          What Makes <AuroraText>TechFavours</AuroraText> Different
        </h2>
        <p className="section-subtitle mt-6">
          We’re not just developers — we’re problem solvers, system thinkers,
          and long-term technology partners.
        </p>
      </div>

      {/* DIFFERENTIATORS GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <GlassCard className="p-8 h-full relative group overflow-hidden">

              {/* AURORA HOVER */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.18),transparent_70%)]
                "
              />

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>

            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* TRUST STATEMENT */}
      <div className="relative z-10 text-center mt-20 max-w-2xl mx-auto">
        <p className="text-white/70 text-sm leading-relaxed">
          Our clients don’t just hire us for a project — they trust us
          with their product, growth, and long-term technology decisions.
        </p>
      </div>

    </section>
  );
}
