import { useEffect, useRef } from "react";
import GlassCard from "@/components/GlassCard";
import { BorderBeam } from "@/components/ui/BorderBeam";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* 🔍 SEO-OPTIMIZED SERVICES DATA */
const services = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites built using modern frameworks for speed, scalability, and reliability.",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions including architecture, dashboards, APIs, and scalable cloud infrastructure.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with smooth UX, performance optimization, and secure backend systems.",
  },
  {
    title: "Website Management & Maintenance",
    desc: "Ongoing website monitoring, updates, security patches, performance tuning, and content management.",
  },
  {
    title: "AI Automation & Workflow Integration",
    desc: "Custom AI-driven automations using tools like n8n, APIs, and intelligent workflows to reduce manual work.",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "Technical SEO, page speed optimization, Core Web Vitals improvements, and search visibility growth.",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    desc: "Data-driven digital marketing campaigns designed to increase traffic, conversions, and brand authority.",
  },
  {
    title: "E-Commerce Development & Scaling",
    desc: "Conversion-focused e-commerce platforms with payment integration, analytics, and growth optimization.",
  },
  {
    title: "Cloud & Backend Solutions",
    desc: "Secure backend systems, cloud deployments, APIs, databases, and scalable server architectures.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const column = i % 3;
        let fromVars = { opacity: 0, scale: 0.96 };

        if (column === 0) {
          fromVars.x = -160;
          fromVars.y = -10;
        } else if (column === 1) {
          fromVars.x = 0;
          fromVars.y = 130;
        } else {
          fromVars.x = 160;
          fromVars.y = -10;
        }

        gsap.fromTo(
          card,
          fromVars,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 55%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6"
      aria-labelledby="services-heading"
    >
      {/* 🧠 SECTION INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 id="services-heading" className="section-title">
          Digital Services That Drive Growth
        </h2>

        <p className="section-subtitle mt-4">
          We provide end-to-end digital solutions — from website development
          and SaaS products to AI automation, SEO optimization, and long-term
          website management — all designed to help businesses scale with
          confidence.
        </p>
      </div>

      {/* 🧩 SERVICES GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <GlassCard
            key={service.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative group"
            role="article"
            aria-label={service.title}
          >
            <BorderBeam
              size={70}
              duration={14}
              colorFrom="rgba(180,200,255,0.6)"
              colorTo="rgba(120,160,255,0.25)"
              borderWidth={1}
            />

            <h3 className="service-title mt-2">
              {service.title}
            </h3>

            <p className="service-desc mt-3">
              {service.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
