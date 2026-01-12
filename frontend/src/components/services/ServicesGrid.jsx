import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    desc: "High-performance, SEO-friendly websites and web applications built with modern frameworks, scalable architecture, and long-term maintainability in mind.",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS development including MVPs, dashboards, authentication, subscriptions, and scalable backend systems designed for growth.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with smooth UX, optimized performance, and seamless integration with APIs and cloud services.",
  },
  {
    title: "UI / UX Design & Prototyping",
    desc: "User-centric UI/UX design backed by research, wireframes, and interactive prototypes that improve usability, engagement, and conversions.",
  },
  {
    title: "Backend, APIs & Integrations",
    desc: "Secure, scalable backend systems, REST & GraphQL APIs, and third-party integrations built for reliability, performance, and data security.",
  },
  {
    title: "AI Automation & Workflow Systems",
    desc: "AI-powered automations, intelligent workflows, and business process optimization using modern AI tools to save time and reduce costs.",
  },
  {
    title: "Website Management & Optimization",
    desc: "Ongoing website maintenance, performance optimization, security updates, content improvements, and day-to-day enhancement support.",
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    desc: "Cloud deployment, CI/CD pipelines, monitoring, and infrastructure optimization to ensure high availability, scalability, and cost efficiency.",
  },
  {
    title: "Growth, SEO & Performance Optimization",
    desc: "Data-driven SEO, performance tuning, analytics, and continuous optimization focused on traffic growth, conversions, and measurable results.",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative py-28 px-6 max-w-7xl mx-auto"
      aria-labelledby="services-heading"
    >
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-16">
        <h2 id="services-heading" className="section-title">
          What We <AuroraText>Do Best</AuroraText>
        </h2>
        <p className="section-subtitle mt-4">
          We provide end-to-end digital services — from design and development
          to optimization and automation — all built to scale with your business.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICE CARD ---------------- */

function ServiceCard({ service }) {
  return (
    <GlassCard
      className="
        relative
        p-8
        h-full
        group
        overflow-hidden
      "
    >
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
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed flex-1">
          {service.desc}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition">
          <span>Explore service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </GlassCard>
  );
}
