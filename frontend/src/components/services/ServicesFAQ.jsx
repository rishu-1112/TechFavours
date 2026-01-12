import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import AuroraText from "@/components/ui/aurora-text";

/* ---------------- SEO-OPTIMIZED FAQ DATA ---------------- */

const faqs = [
  {
    q: "What digital services does TechFavours offer?",
    a: "TechFavours provides professional web development, mobile app development, UI/UX design, backend systems, cloud deployment, SaaS solutions, AI automation, and long-term website management services for growing businesses.",
    keywords: [
      "web development",
      "mobile app development",
      "UI/UX design",
      "SaaS",
      "AI automation",
      "website management",
    ],
  },
  {
    q: "How long does it take to build a website or application?",
    a: "A standard business website usually takes 2 to 4 weeks. Complex platforms, SaaS products, or mobile applications typically require 6 to 10 weeks depending on features, integrations, and testing requirements.",
    keywords: [
      "website development timeline",
      "2 to 4 weeks",
      "SaaS development",
      "mobile application",
    ],
  },
  {
    q: "Do you provide ongoing maintenance and support after launch?",
    a: "Yes. We provide ongoing website maintenance, performance optimization, security updates, feature enhancements, and continuous support to ensure long-term scalability and reliability.",
    keywords: [
      "website maintenance",
      "performance optimization",
      "security updates",
      "long-term support",
    ],
  },
  {
    q: "Which technologies and frameworks do you use?",
    a: "We use modern, scalable technologies including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, and cloud-native architectures to build high-performance digital products.",
    keywords: [
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Docker",
      "cloud-native",
    ],
  },
  {
    q: "How does TechFavours ensure quality and performance?",
    a: "Every project goes through structured planning, clean architecture design, performance testing, security checks, and real-world usability reviews before launch. We also provide daily or weekly progress updates.",
    keywords: [
      "quality assurance",
      "performance testing",
      "security checks",
      "project updates",
    ],
  },
  {
    q: "How can I start a project with TechFavours?",
    a: "You can start by contacting us through our website. We schedule a discovery call to understand your business goals, technical requirements, and provide a clear execution roadmap.",
    keywords: [
      "start a project",
      "discovery call",
      "business goals",
      "execution roadmap",
    ],
  },
];

/* ---------------- KEYWORD HIGHLIGHT ---------------- */

function highlightKeywords(text, keywords) {
  let result = text;

  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="faq-highlight">$1</span>`
    );
  });

  return result;
}

/* ---------------- COMPONENT ---------------- */

export default function ServicesFAQ() {
  const [active, setActive] = useState(null);

  /* SEO FAQ SCHEMA */
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
      })),
    }),
    []
  );

  return (
    <section
      className="relative py-32 px-6 max-w-5xl mx-auto"
      aria-labelledby="faq-heading"
    >
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 id="faq-heading" className="section-title">
          Frequently Asked <AuroraText>Questions</AuroraText>
        </h2>
        <p className="section-subtitle mt-4 max-w-2xl mx-auto">
          Clear answers about our digital services, process, timelines,
          and long-term support.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = active === i;

          return (
            <GlassCard key={i} className="overflow-hidden">
              {/* QUESTION */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-base font-medium transition ${
                    isOpen ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="
                    w-8 h-8 rounded-full
                    flex items-center justify-center
                    bg-white/5 border border-white/10
                  "
                >
                  <ChevronDown className="w-4 h-4 text-white" />
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div
                      className="
                        px-6 pb-6
                        text-sm text-white/70
                        leading-relaxed
                        faq-answer
                      "
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(
                          item.a,
                          item.keywords
                        ),
                      }}
                    />

                    {/* AURORA DIVIDER */}
                    <div
                      className="
                        h-[2px] w-full
                        bg-gradient-to-r
                        from-[#A97CF8]
                        via-[#F38CB8]
                        to-[#FDCC92]
                        opacity-70
                      "
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
