import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Business Understanding",
    desc: "We deeply understand your business goals, audience, competitors, and technical requirements before writing a single line of code.",
  },
  {
    step: "02",
    title: "Reference-Based Planning",
    desc: "We analyze references you like, prepare a basic working sample, and align expectations visually and technically — ensuring clarity from day one.",
  },
  {
    step: "03",
    title: "Design & Architecture",
    desc: "UI/UX design, system architecture, database planning, and scalability decisions are finalized with performance and security in mind.",
  },
  {
    step: "04",
    title: "Agile Development",
    desc: "Development happens in structured sprints with clean code, version control, and modular architecture for long-term flexibility.",
  },
  {
    step: "05",
    title: "Daily Updates & Transparency",
    desc: "Clients receive regular progress updates, demos, and enhancement suggestions — keeping you involved and informed at every stage.",
  },
  {
    step: "06",
    title: "Testing, Review & Recheck",
    desc: "Every feature goes through performance testing, security checks, and multiple review cycles to ensure reliability and quality.",
  },
  {
    step: "07",
    title: "Launch, Monitoring & Support",
    desc: "We deploy, monitor real-world performance, and provide continuous improvements, optimizations, and long-term support.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#A97CF8]/15 via-[#F38CB8]/10 to-[#FDCC92]/15 blur-[160px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-3xl mb-20">
        <h2 className="section-title">
          How We <AuroraText>Work</AuroraText>
        </h2>
        <p className="section-subtitle mt-6">
          A transparent, structured, and collaborative development process
          designed to deliver clarity, quality, and long-term success.
        </p>
      </div>

      {/* PROCESS GRID */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <GlassCard className="p-8 h-full relative overflow-hidden">

              {/* STEP BADGE */}
              <span className="absolute top-6 right-6 text-xs text-white/30 tracking-widest">
                STEP {item.step}
              </span>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER AURORA */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.15),transparent_70%)]
                "
              />
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* TRUST NOTE */}
      <div className="relative z-10 text-center mt-20 max-w-2xl mx-auto">
        <p className="text-white/70 text-sm leading-relaxed">
          We don’t disappear after delivery. Our process is built around
          continuous improvement, proactive suggestions, and long-term
          partnership — not one-time projects.
        </p>
      </div>

    </section>
  );
}
