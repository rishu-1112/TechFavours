import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const projects = [
  {
    title: "ApkaKitchen",
    category: "Food Delivery Platform",
    desc: "End-to-end platform with real-time orders & admin dashboard.",
    tech: "React · Node · MongoDB",
    results: ["+42% Orders", "3x Retention", "1.8s Load"],
    images: [
      "/projects/apkakitchen-1.jpg",
      "/projects/apkakitchen-2.jpg",
      "/projects/apkakitchen-3.jpg",
    ],
    link: "https://apkakitchen.com",
    featured: true,
  },
  {
    title: "CureWrap",
    category: "Healthcare E-commerce",
    desc: "High-conversion storefront with secure checkout.",
    tech: "Next.js · Stripe · Tailwind",
    results: ["+64% Conversion", "99.9% Uptime"],
    images: [
      "/projects/curewrap-1.jpg",
      "/projects/curewrap-2.jpg",
    ],
    link: "https://curewrapplus.com",
  },
  {
    title: "Growth CRM",
    category: "Internal SaaS Tool",
    desc: "Custom CRM built to scale sales workflows and analytics.",
    tech: "React · Express · Charts",
    results: ["2x Productivity", "+38% Sales"],
    images: [
      "/projects/crm-1.jpg",
      "/projects/crm-2.jpg",
    ],
    link: "#",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left featured card
      gsap.fromTo(
        leftCardRef.current,
        { x: -120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Right stacked cards
      gsap.fromTo(
        rightCardsRef.current,
        { x: 120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Image mask reveal
      gsap.fromTo(
        ".mask-reveal",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <h2 className="section-title mb-4">Featured Projects</h2>
        <p className="section-subtitle">
          Selected work demonstrating our execution,
          craftsmanship, and measurable results.
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {/* LEFT FEATURED */}
        <GlassCard
          ref={leftCardRef}
          className="col-span-2 p-6 group"
        >
          <ProjectCard project={projects[0]} featured />
        </GlassCard>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-8">
          {projects.slice(1).map((project, i) => (
            <GlassCard
              key={i}
              ref={(el) => (rightCardsRef.current[i] = el)}
              className="p-6 group"
            >
              <ProjectCard project={project} />
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
        {projects.map((project, i) => (
          <div key={i} className="min-w-[88%] snap-center">
            <GlassCard className="p-6">
              <ProjectCard project={project} />
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ProjectCard({ project, featured }) {
  const cardRef = useRef(null);

  /* Parallax tilt (desktop only) */
  const onMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 8;
    const rotateY = (x / rect.width - 0.5) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={resetTilt}
      className="transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* IMAGE STRIP */}
      <div
        className={`
          relative overflow-hidden rounded-xl mb-6
          ${featured ? "h-64" : "h-44"}
        `}
      >
        <div className="flex h-full">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={project.title}
              className="
                mask-reveal
                w-full h-full object-cover flex-shrink-0
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <span className="text-xs text-blue-400 uppercase tracking-wide">
        {project.category}
      </span>

      <h3 className="text-white text-xl font-semibold mt-2">
        {project.title}
      </h3>

      <p className="text-white/70 text-sm mt-3">
        {project.desc}
      </p>

      {/* RESULTS */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.results.map((r, i) => (
          <span
            key={i}
            className="
              text-xs text-blue-300
              px-3 py-1 rounded-full
              bg-white/5
              border border-white/10
            "
          >
            {r}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-white/50">
          {project.tech}
        </span>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
        >
          View Case
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
