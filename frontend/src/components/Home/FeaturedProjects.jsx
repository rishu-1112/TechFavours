import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { ExternalLink } from "lucide-react";
import { Lens } from "../ui/lens";

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
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399385/Screenshot_2026-01-14_at_7.32.34_PM_lroimk.png",
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399145/Screenshot_2026-01-14_at_7.25.11_PM_jkzthk.png",
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399143/Screenshot_2026-01-14_at_7.26.48_PM_claqrc.png",
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
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399144/Screenshot_2026-01-14_at_7.27.16_PM_jjditp.png",
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399146/Screenshot_2026-01-14_at_7.28.16_PM_y1a5xo.png",
      "https://res.cloudinary.com/dupwee5cd/image/upload/v1768399147/Screenshot_2026-01-14_at_7.27.58_PM_onmc5a.png",
    ],
    link: "https://curewrapplus.com",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h2 className="section-title mb-4">Featured Projects</h2>
        <p className="section-subtitle">
          Selected work demonstrating our execution, craftsmanship,
          and measurable results.
        </p>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-8">
        <GlassCard ref={leftCardRef} className="col-span-2 p-6 group">
          <ProjectCard project={projects[0]} featured />
        </GlassCard>

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
    </section>
  );
}

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project, featured }) {
  const cardRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = project.images.length;

  /* Auto crossfade */
  useEffect(() => {
    if (total <= 1 || hovered) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total, hovered]);

  /* Tilt */
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
      onMouseLeave={() => {
        resetTilt();
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
      className="transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* CINEMATIC CROSSFADE */}
      <div
        className={`relative overflow-hidden rounded-xl mb-6 ${
          featured ? "h-64" : "h-44"
        }`}
      >
        {project.images.map((img, i) => (
          <div
            key={i}
            className={`
              absolute inset-0
              transition-opacity duration-1000 ease-in-out
              ${active === i ? "opacity-100 z-10" : "opacity-0"}
            `}
          >
            <Lens>
              <img
                src={img}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-105
                  transition-transform duration-700
                "
              />
            </Lens>
          </div>
        ))}

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  active === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
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

      <div className="flex flex-wrap gap-2 mt-4">
        {project.results.map((r, i) => (
          <span
            key={i}
            className="text-xs text-blue-300 px-3 py-1 rounded-full bg-white/5 border border-white/10"
          >
            {r}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-white/50">{project.tech}</span>

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
