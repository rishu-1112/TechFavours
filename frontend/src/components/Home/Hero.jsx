import { useEffect, useRef } from "react";
import gsap from "gsap";
import GlassCard from "../../components/GlassCard";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Globe } from "@/components/ui/globe";
import { BorderBeam } from "../ui/BorderBeam";

export default function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Title stagger reveal
      gsap.fromTo(
        titleRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.2,
        }
      );

      // Subtitle fade
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.8,
          ease: "power2.out",
        }
      );

      // Globe parallax
      gsap.to(globeRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax on card
  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 6;
    const rotateY = (x / rect.width - 0.5) * 6;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOWS */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-violet-500/20 blur-[160px]" />
      </div>

      {/* 🌍 GLOBE */}
      <div
        ref={globeRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="opacity-30 scale-[1.45] translate-y-28">
          <Globe />
        </div>
      </div>

      {/* 🧊 HERO CONTENT */}
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="relative z-10 transition-transform duration-300 will-change-transform"
      >
        <BorderBeam
          size={90}
          duration={14}
          colorFrom="rgba(180,200,255,0.9)"
          colorTo="rgba(120,160,255,0.4)"
          borderWidth={1}
        />

        <GlassCard className="px-10 py-16 max-w-3xl text-center">
          <h1
            ref={titleRef}
            className="hero-title leading-tight"
          >
            <span className="block">Crafting</span>
            <span className="block">Digital</span>
            <span className="block">Experiences</span>
          </h1>

          <p
            ref={subtitleRef}
            className="hero-subtitle mt-6 max-w-2xl mx-auto"
          >
            Premium web, app & growth solutions designed with clarity,
            performance and purpose.
          </p>

          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <RainbowButton className="px-8 py-3 shadow-lg shadow-blue-500/20">
              Get Started
            </RainbowButton>

            <RainbowButton
              variant="outline"
              className="px-8 py-3 hover:-translate-y-1 transition"
            >
              View Services
            </RainbowButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
