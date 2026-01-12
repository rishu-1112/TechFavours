import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

const services = [
  {
    title: "Custom Web Development",
    content: [
      "Modern frontend development using React, Next.js & Tailwind CSS",
      "SEO-friendly architecture with fast load times and clean code",
      "Scalable and secure web applications built for long-term growth",
      "API integrations, authentication systems, and performance optimization",
    ],
  },
  {
    title: "SaaS Product Development",
    content: [
      "End-to-end SaaS development from MVP to scalable production systems",
      "User authentication, subscriptions, dashboards, and admin panels",
      "Cloud-ready architecture for high availability and scalability",
      "Ongoing feature enhancements based on user feedback and analytics",
    ],
  },
  {
    title: "Mobile App Development",
    content: [
      "Cross-platform mobile apps using React Native",
      "Smooth animations, gestures, and optimized performance",
      "Offline support, push notifications, and API integration",
      "App Store & Play Store deployment with post-launch support",
    ],
  },
  {
    title: "UI / UX Design & Prototyping",
    content: [
      "User research, personas, and experience mapping",
      "Wireframes, design systems, and interactive prototypes",
      "Conversion-focused layouts aligned with business goals",
      "Usability testing, review cycles, and continuous refinements",
    ],
  },
  {
    title: "Backend, APIs & Integrations",
    content: [
      "Secure backend systems using Node.js, Express & databases",
      "REST and GraphQL APIs designed for performance and reliability",
      "Role-based access control and data security best practices",
      "Third-party integrations including payment gateways & tools",
    ],
  },
  {
    title: "AI Automation & Workflow Systems",
    content: [
      "AI-powered automation to streamline business operations",
      "Workflow optimization using intelligent triggers and logic",
      "Integration with CRM, marketing, and operational tools",
      "Reduced manual effort, improved efficiency, and cost savings",
    ],
  },
  {
    title: "Website Management & Enhancements",
    content: [
      "Ongoing website maintenance, updates, and performance monitoring",
      "Day-to-day improvements and feature enhancements",
      "Regular client notifications on changes and optimizations",
      "Security updates, backups, and stability checks",
    ],
  },
  {
    title: "SEO, Growth & Performance Optimization",
    content: [
      "On-page SEO, technical SEO, and performance optimization",
      "Core Web Vitals improvements for better rankings",
      "Analytics-driven enhancements and growth strategies",
      "Continuous review, testing, and measurable improvements",
    ],
  },
];

export default function ServiceDeepDive() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative py-28 px-6 max-w-7xl mx-auto"
      aria-labelledby="service-delivery-heading"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <h2 id="service-delivery-heading" className="section-title">
          How We <AuroraText>Deliver Excellence</AuroraText>
        </h2>
        <p className="section-subtitle mt-4">
          A detailed look into how our web development, SaaS solutions,
          AI automation, and digital services are planned, executed,
          reviewed, and continuously improved.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[300px_1fr] gap-16">

        {/* LEFT — STICKY SERVICE NAV */}
        <div className="relative">
          <div className="sticky top-32 flex flex-col gap-3">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  text-left px-4 py-3 rounded-lg
                  transition-all duration-300
                  ${
                    active === i
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {active === i ? (
                  <AuroraText>{service.title}</AuroraText>
                ) : (
                  service.title
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — SERVICE DETAILS */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <GlassCard className="p-10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {services[active].title}
                </h3>

                <ul className="space-y-4">
                  {services[active].content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/70 leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#A97CF8] to-[#FDCC92]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
