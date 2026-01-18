import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";

/* ---------------- SERVICES DATA ---------------- */

const services = [
  {
    title: "Website Development",
    path: "/services/website-development",
    content: [
      "High-performance, SEO-friendly websites built with modern frameworks",
      "Clean, maintainable code optimized for speed and scalability",
      "Responsive layouts that work flawlessly across all devices",
      "Advanced animations, micro-interactions, and modern UI patterns",
      "Secure authentication systems and role-based access",
      "API integrations, CMS setup, and custom admin panels",
      "Performance optimization for fast load times and stability",
      "Long-term scalability planning for future growth",
    ],
  },
  {
    title: "SaaS Product Development",
    path: "/services/saas-product-development",
    content: [
      "End-to-end SaaS development from idea to production",
      "MVP planning, feature prioritization, and scalable architecture",
      "User authentication, subscriptions, and billing systems",
      "Admin dashboards, analytics, and reporting tools",
      "Cloud-ready backend systems with high availability",
      "Secure APIs and database design",
      "Continuous improvements based on real user data",
      "Long-term product scalability and maintenance support",
    ],
  },
  {
    title: "Mobile App Development",
    path: "/services/mobile-app-development",
    content: [
      "Cross-platform mobile apps using modern frameworks",
      "Smooth animations, gestures, and responsive UI",
      "High-performance apps optimized for low-end devices",
      "API integration with backend and third-party services",
      "Offline support and data synchronization",
      "Push notifications and real-time updates",
      "App Store & Play Store deployment support",
      "Post-launch updates and ongoing enhancements",
    ],
  },
  {
    title: "UI / UX Design & Prototyping",
    path: "/services/ui-ux-design",
    content: [
      "User research and behavior analysis",
      "Wireframes and low-fidelity prototypes",
      "High-fidelity UI designs aligned with brand identity",
      "Design systems and reusable components",
      "Interactive prototypes for real-world testing",
      "Conversion-focused layouts and flows",
      "Usability testing and feedback cycles",
      "Design handoff and collaboration with developers",
    ],
  },
  {
    title: "Backend, APIs & Integrations",
    path: "/services/cloud-backend-solutions",
    content: [
      "Secure backend systems using modern architectures",
      "REST and GraphQL APIs built for performance",
      "Database modeling and optimization",
      "Authentication, authorization, and security best practices",
      "Third-party API integrations (payments, tools, CRMs)",
      "Scalable cloud-ready backend infrastructure",
      "Monitoring, logging, and error tracking",
      "Long-term backend maintenance and upgrades",
    ],
  },
  {
    title: "AI Automation & Workflow Systems",
    path: "/services/ai-automation-workflow",
    content: [
      "AI-powered automation for repetitive business tasks",
      "Custom workflows using APIs and automation tools",
      "Integration with CRMs, marketing, and operations tools",
      "Smart triggers, conditions, and intelligent logic",
      "Reduced manual work and operational costs",
      "Improved efficiency and faster execution",
      "Custom dashboards for monitoring automations",
      "Ongoing optimization and workflow improvements",
    ],
  },
  {
    title: "Website Management & Maintenance",
    path: "/services/website-management-maintenance",
    content: [
      "Continuous website monitoring and uptime checks",
      "Regular security updates and vulnerability fixes",
      "Performance optimization and speed improvements",
      "Content updates and layout enhancements",
      "Bug fixes and technical issue resolution",
      "Backup management and recovery planning",
      "Monthly performance and health reports",
      "Long-term website stability and support",
    ],
  },
  {
    title: "SEO, Growth & Performance Optimization",
    path: "/services/seo-performance-optimization",
    content: [
      "Technical SEO and site structure optimization",
      "Core Web Vitals and page speed improvements",
      "On-page SEO and keyword optimization",
      "Analytics setup and performance tracking",
      "Conversion rate optimization strategies",
      "Content optimization for search visibility",
      "Continuous testing and improvement cycles",
      "Measurable growth-focused results",
    ],
  },
  {
    title: "Digital Marketing & Growth Strategy",
    path: "/services/digital-marketing-growth",
    content: [
      "Data-driven marketing strategies for growth",
      "Paid advertising campaign planning and execution",
      "Social media strategy and brand positioning",
      "Lead generation and conversion optimization",
      "Analytics-driven campaign improvements",
      "Audience targeting and segmentation",
      "Performance reporting and insights",
      "Long-term growth roadmap planning",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ServiceDeepDive() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

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
          A transparent look into how our digital services are designed,
          executed, optimized, and continuously improved to drive real
          business results.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[320px_1fr] gap-16">

        {/* LEFT — SERVICE NAV */}
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
        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <GlassCard className="p-10">
                <button
                  onClick={() => navigate(services[active].path)}
                  className="text-left"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 hover:underline">
                    {services[active].title}
                  </h3>
                </button>

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
