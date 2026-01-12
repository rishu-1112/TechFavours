import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import {
  Search,
  Palette,
  Code,
  Rocket,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discover", desc: "Understanding goals & users.", icon: Search },
  { title: "Design", desc: "User-focused experience design.", icon: Palette },
  { title: "Develop", desc: "Scalable & performant systems.", icon: Code },
  { title: "Launch", desc: "Optimized go-live execution.", icon: Rocket },
  { title: "Scale", desc: "Growth & long-term success.", icon: TrendingUp },
];

export default function ProcessWave() {
  const sectionRef = useRef(null);
  const desktopWaveRef = useRef(null);
  const mobileWaveRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animate = (wave) => {
        if (!wave) return;

        const length = wave.getTotalLength();

        gsap.set(wave, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(wave, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.out",
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 10%",
        onEnter: () => {
          animate(desktopWaveRef.current);
          animate(mobileWaveRef.current);

          gsap.fromTo(
            nodesRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.18,
              ease: "power3.out",
              delay: 0.4,
            }
          );
        },
        onEnterBack: () => {
          animate(desktopWaveRef.current);
          animate(mobileWaveRef.current);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle mt-2">
          From idea to scalable digital success
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block relative w-screen h-[320px]">
        <svg
          viewBox="0 0 1000 300"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            ref={desktopWaveRef}
            d="M 0 180 C 200 80, 300 280, 500 180 C 700 80, 800 280, 1000 180"
            stroke="url(#waveGrad)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
          />
        </svg>

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              ref={(el) => (nodesRef.current[i] = el)}
              className="absolute"
              style={{
                left: `${8 + i * 20}%`,
                top: i % 2 === 0 ? "52%" : "38%",
              }}
            >
              <StepCard step={step} Icon={Icon} />
            </div>
          );
        })}
        
      </div>

      {/* MOBILE VERTICAL PROCESS */}
<div className="lg:hidden relative max-w-md mx-auto h-[800px]">

  {/* SVG WAVE */}
  <svg
    viewBox="0 0 100 800"
    className="absolute inset-0 w-full h-full z-10"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="mobileGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>

      <filter id="mobileGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <path
      ref={mobileWaveRef}
      d="M50 0 
         C50 140, 50 280, 50 420 
         C50 560, 50 700, 50 840"
      stroke="url(#mobileGrad)"
      strokeWidth="5"
      fill="none"
      filter="url(#mobileGlow)"
    />
  </svg>

  {/* STEPS */}
  <div className="relative z-20 flex flex-col gap-20 pt-12">
    {steps.map((step, i) => {
      const Icon = step.icon;
      return (
        <div
          key={i}
          ref={(el) => (nodesRef.current[i] = el)}
          className="flex justify-center"
        >
          <GlassCard className="p-4 w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_18px_rgba(96,165,250,0.6)]">
                <Icon className="w-4 h-4 text-blue-300" />
              </div>
              <h4 className="text-white font-medium text-sm">
                {step.title}
              </h4>
            </div>
            <p className="text-white/70 text-xs">
              {step.desc}
            </p>
          </GlassCard>
        </div>
      );
    })}
  </div>
</div>
  

</section>  
  );
}

/* ---------- CARD ---------- */

function StepCard({ step, Icon }) {
  return (
    <GlassCard className="p-4 w-[210px]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_18px_rgba(96,165,250,0.6)]">
          <Icon className="w-4 h-4 text-blue-300" />
        </div>
        <h4 className="text-white font-medium text-sm">
          {step.title}
        </h4>
      </div>
      <p className="text-white/70 text-xs">
        {step.desc}
      </p>
    </GlassCard>
  );
}
