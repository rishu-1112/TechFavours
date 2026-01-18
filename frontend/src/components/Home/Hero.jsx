import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import GlassCard from "../../components/GlassCard";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Globe } from "@/components/ui/globe";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ---------------- SERVICES DATA ---------------- */

const services = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites engineered for speed, scalability, and long-term reliability.",
    points: [
      "React / Next.js based modern architecture",
      "SEO-first structure & Core Web Vitals",
      "Secure, scalable & maintainable codebase",
      "API integrations & performance tuning",
    ],
    outcome:
      "Result-driven websites that load fast, rank higher, and convert visitors into customers.",
    path: "/services/website-development",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions from MVP to production-ready scalable platforms.",
    points: [
      "Authentication, roles & subscriptions",
      "Admin dashboards & analytics",
      "Cloud-native scalable backend",
      "Payment, billing & usage tracking",
    ],
    outcome:
      "Scalable SaaS products built to grow users, revenue, and operational efficiency.",
    path: "/services/saas-product-development",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications delivering smooth UX and robust backend integration.",
    points: [
      "React Native cross-platform apps",
      "High-performance animations & gestures",
      "Push notifications & offline support",
      "App Store & Play Store deployment",
    ],
    outcome:
      "Mobile apps that feel native, perform fast, and scale across devices.",
    path: "/services/mobile-app-development",
  },
  {
    title: "AI Automation & Workflow Systems",
    desc: "AI-powered automation systems that reduce manual effort and operational costs.",
    points: [
      "n8n & API-based workflow automation",
      "CRM, marketing & ops integrations",
      "Intelligent triggers & logic",
      "Monitoring & optimization pipelines",
    ],
    outcome:
      "Smarter systems that save time, reduce cost, and improve productivity.",
    path: "/services/ai-automation-workflow",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "Data-driven SEO and performance optimization for measurable business growth.",
    points: [
      "Technical & on-page SEO audits",
      "Core Web Vitals & page speed",
      "Analytics, tracking & insights",
      "Continuous optimization strategy",
    ],
    outcome:
      "Higher rankings, faster sites, and consistent organic traffic growth.",
    path: "/services/seo-performance-optimization",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    desc: "Comprehensive digital marketing strategies to boost traffic, conversions, and brand authority.",
    points: [
      "Data-driven marketing campaigns",
      "Content marketing & SEO synergy",
      "PPC, social & email marketing",
      "Conversion rate optimization",
    ],
    outcome:
      "Sustainable growth through targeted marketing and optimized user journeys.",     
    path: "/services/digital-marketing-growth",
  },
  {
    title: "E-Commerce Development & Scaling",
    desc: "Conversion-focused e-commerce platforms designed for growth and scalability.",
    points: [
      "Custom e-commerce platform development",
      "Payment gateway & third-party integrations",
      "Analytics & user behavior tracking",
      "Performance optimization & scaling",
    ],
    outcome:
      "E-commerce solutions that drive sales, enhance user experience, and scale with your business.",  
    path: "/services/ecommerce-development-scaling",
  },
  {
    title: "Cloud & Backend Solutions",
    desc: "Secure, scalable backend systems and cloud infrastructure tailored to your business needs.",
    points: [
      "Cloud-native backend architecture",
      "REST & GraphQL API development",
      "Database design & optimization",
      "CI/CD & DevOps best practices",
    ],
    outcome:
      "Robust backend systems that ensure reliability, performance, and scalability.",    
    path: "/services/cloud-backend-solutions",  
  },{
    title: "Website Management & Maintenance",
    desc: "Ongoing website monitoring, updates, security patches, and performance tuning.",
    points: [   
      "Regular security updates & backups",
      "Performance monitoring & optimization",
      "Content updates & layout enhancements",
      "Technical support & issue resolution",
    ],
    outcome:
      "A secure, up-to-date, and high-performing website that supports your business goals.", 
    path: "/services/website-management-maintenance",
  },{
    title: "Backend, APIs & Integrations",
    desc: "Secure backend systems, REST & GraphQL APIs, and third-party integrations built for reliability and performance.",
    points: [
      "Robust backend architecture design",
      "High-performance REST & GraphQL APIs",
      "Third-party service integrations",
      "Scalable & maintainable codebases",
    ],
    outcome:
      "Reliable backend solutions that power your applications and streamline operations.",
    path: "/services/cloud-backend-solutions",
  },{
    title: "UI / UX Design & Prototyping",
    desc: "User-centric UI/UX design backed by research, wireframes, and interactive prototypes that improve usability, engagement, and conversions.",
    points: [
      "User research & persona development",
      "Wireframing & interactive prototyping",
      "Visual design & branding",
      "Usability testing & iteration",
    ],
    outcome:
      "Engaging and intuitive designs that enhance user satisfaction and drive conversions.",
      path: "/services/ui-ux-design",
  },{
    title: "AI Automation & Workflow Systems",
    desc: "AI-powered automations, intelligent workflows, and business process optimization using modern AI tools to save time and reduce costs.",
    points: [
      "Custom AI-driven automation solutions",
      "Intelligent workflow design & implementation",
      "Integration with existing systems & tools",
      "Ongoing monitoring & optimization",
    ],
    outcome:
      "Efficient and intelligent systems that streamline operations and enhance productivity.", 
    path: "/services/ai-automation-workflow",
  }
];

export default function Hero() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ---------------- SLIDE ANIMATION ---------------- */

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${index * 100}%`,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [index]);

  /* ---------------- AUTO ROTATE ---------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  /* ---------------- SWIPE ---------------- */

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 60)
      setIndex((prev) => (prev + 1) % services.length);
    if (delta < -60)
      setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      

      {/* GLOBE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-30 scale-[1.45] translate-y-28">
          <Globe />
        </div>
      </div>

      {/* 🧊 HERO SERVICE SLIDER */}
      <div
        className="relative z-10 w-full max-w-5xl overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={sliderRef}
          className="flex"
          style={{ width: `${services.length * 100}%` }}
        >
          {services.map((service, i) => (
            <div key={i} className="w-full flex-shrink-0 px-3">
              {/* NEON BORDER */}
              <div className="relative rounded-3xl">

                <GlassCard className="relative px-14 py-14 min-h-[520px] flex flex-col justify-between rounded-3xl border border-white/10">
                  <div>
                    <h1 className="text-4xl font-semibold text-white">
                      {service.title}
                    </h1>

                    <p className="text-white/70 mt-5 max-w-3xl">
                      {service.desc}
                    </p>

                    <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                      {service.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-white/65 text-sm"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#A97CF8] to-[#FDCC92]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-8 text-white/80 font-medium">
                      {service.outcome}
                    </p>
                  </div>

                  <div className="flex gap-5 mt-10">
                    <RainbowButton onClick={() => navigate(service.path)}>
                      Explore Service
                    </RainbowButton>
                    <RainbowButton
                      variant="outline"
                      onClick={() => navigate("/contact")}
                    >
                      Talk to Us
                    </RainbowButton>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-gradient-to-r from-[#A97CF8] to-[#FDCC92] scale-125"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* ARROWS */}
        <div className="hidden md:flex justify-between mt-6 px-2">
          <button
            onClick={() =>
              setIndex((index - 1 + services.length) % services.length)
            }
            className="text-white/70 hover:text-white"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() =>
              setIndex((index + 1) % services.length)
            }
            className="text-white/70 hover:text-white"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
