import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const techGroups = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    desc:
      "Modern, SEO-friendly and high-performance interfaces built for speed, accessibility and conversion.",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    desc:
      "Secure, scalable backend systems designed to support SaaS platforms, APIs and complex business logic.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & Infrastructure",
    desc:
      "Reliable cloud infrastructure ensuring performance, uptime, security and seamless scalability.",
    stack: [
      "AWS",
      "Docker",
      "CI / CD Pipelines",
      "Vercel",
      "Nginx",
      "Cloud Security",
      "Monitoring & Logs",
    ],
  },
  {
    icon: Cpu,
    title: "AI Automation & Integrations",
    desc:
      "Intelligent automation and system integrations that reduce manual work and improve efficiency.",
    stack: [
      "AI Workflow Automation",
      "API Integrations",
      "n8n",
      "Custom Bots",
      "Data Processing",
      "System Orchestration",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesTechStack() {
  return (
    <section
      className="relative py-32 px-6 max-w-7xl mx-auto"
      aria-labelledby="tech-stack-heading"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-20">
        <h2
          id="tech-stack-heading"
          className="section-title"
        >
          Our <AuroraText>Technology Stack</AuroraText>
        </h2>

        <p className="section-subtitle mt-5">
          We use a modern, battle-tested technology stack to deliver
          high-performance websites, scalable SaaS platforms,
          AI-powered automation, and secure cloud-based solutions.
          Every tool we choose is focused on performance, security,
          maintainability, and long-term growth.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {techGroups.map((group, i) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              <GlassCard className="relative p-8 h-full group overflow-hidden">

                {/* AURORA HOVER GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.18),transparent_70%)]
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-white/80" />
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    {group.desc}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {group.stack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-white/65"
                      >
                        • {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* SEO FOOTNOTE */}
      <p className="mt-14 text-center text-xs text-white/45 max-w-3xl mx-auto">
        Our technology stack is continuously updated to match industry
        best practices in web development, SaaS engineering, cloud
        infrastructure, AI automation, security, and performance
        optimization.
      </p>
    </section>
  );
}
