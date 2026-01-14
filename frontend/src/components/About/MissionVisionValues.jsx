import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

export default function MissionVisionValues() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* BACKGROUND AURORA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#A97CF8]/15 via-[#F38CB8]/10 to-[#FDCC92]/15 blur-[180px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-3xl mb-20">
        <h2 className="section-title">
          Our <AuroraText>Mission</AuroraText>, Vision & Values
        </h2>
        <p className="section-subtitle mt-6">
          Everything we build is guided by clarity, responsibility,
          and a commitment to long-term success.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid lg:grid-cols-3 gap-10">

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-10 h-full relative overflow-hidden group">
            <Glow />

            <h3 className="text-xl font-semibold text-white mb-4">
              Our Mission
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              To help businesses build reliable, scalable, and high-performance
              digital products by combining modern engineering, thoughtful
              design, and transparent collaboration.
            </p>

            <p className="text-white/60 text-sm leading-relaxed mt-4">
              We aim to simplify complex problems and turn ideas into
              real-world solutions that deliver measurable impact.
            </p>
          </GlassCard>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="p-10 h-full relative overflow-hidden group">
            <Glow />

            <h3 className="text-xl font-semibold text-white mb-4">
              Our Vision
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              To become a trusted global technology partner for startups,
              SaaS companies, and enterprises seeking long-term growth,
              innovation, and technical excellence.
            </p>

            <p className="text-white/60 text-sm leading-relaxed mt-4">
              We envision a future where businesses rely on intelligent,
              automated, and scalable systems built with care and responsibility.
            </p>
          </GlassCard>
        </motion.div>

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-10 h-full relative overflow-hidden group">
            <Glow />

            <h3 className="text-xl font-semibold text-white mb-6">
              Our Values
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <strong className="text-white">Clarity:</strong>{" "}
                Clear communication, clear expectations, clear execution.
              </li>
              <li>
                <strong className="text-white">Ownership:</strong>{" "}
                We treat every product as if it were our own.
              </li>
              <li>
                <strong className="text-white">Quality:</strong>{" "}
                Performance, security, and scalability are non-negotiable.
              </li>
              <li>
                <strong className="text-white">Transparency:</strong>{" "}
                Honest timelines, real updates, and open collaboration.
              </li>
              <li>
                <strong className="text-white">Growth Mindset:</strong>{" "}
                Continuous learning, improvement, and innovation.
              </li>
            </ul>
          </GlassCard>
        </motion.div>

      </div>

      {/* CLOSING STATEMENT */}
      <div className="relative z-10 text-center mt-20 max-w-2xl mx-auto">
        <p className="text-white/70 text-sm leading-relaxed">
          At TechFavours, we don’t just deliver projects — we build
          partnerships that last beyond launch.
        </p>
      </div>

    </section>
  );
}

/* ---------- SUB COMPONENT ---------- */

function Glow() {
  return (
    <div
      className="
        pointer-events-none
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
        bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.2),transparent_70%)]
      "
    />
  );
}
