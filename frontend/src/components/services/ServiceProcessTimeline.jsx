import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const steps = [
  {
    step: "01",
    title: "Discovery, Research & Strategy",
    desc: "We begin by understanding your business goals, target users, competitors, and market opportunities. This phase includes requirement analysis, technical feasibility, and defining a clear digital strategy aligned with long-term growth.",
  },
  {
    step: "02",
    title: "UI/UX Design & Technical Architecture",
    desc: "We design user-centric interfaces, intuitive user flows, and scalable system architecture. This ensures a strong foundation for web development, SaaS platforms, mobile apps, and AI-driven solutions.",
  },
  {
    step: "03",
    title: "Agile Development & Implementation",
    desc: "Our team builds high-performance websites, applications, and automation systems using modern technologies. Development follows best practices for scalability, security, SEO, and maintainability.",
  },
  {
    step: "04",
    title: "Testing, Review & Optimization",
    desc: "We conduct thorough testing for performance, security, usability, and SEO. Continuous review cycles ensure the product meets quality standards and delivers a seamless user experience across devices.",
  },
  {
    step: "05",
    title: "Launch, Monitoring & Continuous Scaling",
    desc: "After deployment, we monitor performance, provide regular updates, and continuously enhance the product. Clients receive improvement notifications, analytics insights, and optimization support for long-term success.",
  },
];

export default function ServiceProcessTimeline() {
  return (
    <section
      className="relative py-28 px-6 max-w-6xl mx-auto"
      aria-labelledby="process-heading"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-20">
        <h2 id="process-heading" className="section-title">
          Our Proven <AuroraText>Development Process</AuroraText>
        </h2>
        <p className="section-subtitle mt-4">
          A transparent, structured workflow for web development, SaaS
          products, AI automation, and digital platforms—designed to
          deliver clarity, performance, and scalable growth.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

        <div className="space-y-16">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative pl-16"
            >
              {/* DOT */}
              <div
                className="
                  absolute left-[14px] top-4
                  w-3 h-3 rounded-full
                  bg-gradient-to-r
                  from-[#A97CF8]
                  to-[#FDCC92]
                  shadow-[0_0_20px_rgba(169,124,248,0.6)]
                "
              />

              {/* CARD */}
              <GlassCard className="p-8">
                <span className="text-xs text-white/40 tracking-widest uppercase">
                  Step {item.step}
                </span>

                <h3 className="text-xl font-semibold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-white/70 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
