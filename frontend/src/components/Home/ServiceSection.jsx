import { useEffect, useRef } from "react";
import GlassCard from "@/components/GlassCard";
import { BorderBeam } from "@/components/ui/BorderBeam";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

//import pages
import WebsiteDevelopment from "@/pages/service/WebDev";
import SaaSProductDevelopment from "@/pages/service/SaaSproductDev";
import MobileAppDevelopment from "@/pages/service/MobileAppDev";
import WebsiteManagement from "@/pages/service/WebsiteManagementMaintainance";
import AIAutomation from "@/pages/service/AiAutomationAndWorkflow";
import SEOOptimization from "@/pages/service/SEOandPerformance";
import DigitalMarketing from "@/pages/service/DigitalMarketing";
import ECommerceDevelopment from "@/pages/service/E-commerceGrowth";
import CloudBackendSolutions from "@/pages/service/CloudAndBackend";  

gsap.registerPlugin(ScrollTrigger);

/* 🔍 SEO-OPTIMIZED SERVICES DATA */
const services = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites built using modern frameworks for speed, scalability, and reliability.",
    path: "/services/website-development",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions including architecture, dashboards, APIs, and scalable cloud infrastructure.",
    path: "/services/saas-product-development",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with smooth UX, performance optimization, and secure backend systems.",
    path: "/services/mobile-app-development",
  },
  {
    title: "Website Management & Maintenance",
    desc: "Ongoing website monitoring, updates, security patches, performance tuning, and content management.",
    path: "/services/website-management-maintenance",
  },
  {
    title: "AI Automation & Workflow Integration",
    desc: "Custom AI-driven automations using tools like n8n, APIs, and intelligent workflows to reduce manual work.",
    path: "/services/ai-automation-workflow",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "Technical SEO, page speed optimization, Core Web Vitals improvements, and search visibility growth.",
    path: "/services/seo-performance-optimization",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    desc: "Data-driven digital marketing campaigns designed to increase traffic, conversions, and brand authority.",
    path: "/services/digital-marketing-growth",
  },
  {
    title: "E-Commerce Development & Scaling",
    desc: "Conversion-focused e-commerce platforms with payment integration, analytics, and growth optimization.",
    path: "/services/ecommerce-development-scaling",
  },
  {
    title: "Cloud & Backend Solutions",
    desc: "Secure backend systems, cloud deployments, APIs, databases, and scalable server architectures.",
    path: "/services/cloud-backend-solutions",
  },
];


export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const column = i % 3;
        let fromVars = { opacity: 0, scale: 0.96 };

        if (column === 0) fromVars.x = -160;
        else if (column === 1) fromVars.y = 130;
        else fromVars.x = 160;

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
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="section-title">
          Digital Services That Drive Growth
        </h2>
        <p className="section-subtitle mt-4">
          End-to-end digital solutions designed to help businesses scale with confidence.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <GlassCard
            key={service.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative group cursor-pointer"
            onClick={() => navigate(service.path)}
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
