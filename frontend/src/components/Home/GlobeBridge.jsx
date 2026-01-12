import { useEffect, useRef, useState } from "react";
import { Globe } from "@/components/ui/globe";
import ServiceNotification from "./ServiceNotification";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimatedList } from "@/components/ui/animated-list"

gsap.registerPlugin(ScrollTrigger);

export default function GlobeBridge() {
  const feedRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!feedRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        feedRef.current,
        { y: 120 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2, // 👈 parallax smoothness
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* 🌍 Globe */}
      <Globe className="bridge-globe" />

      {/* 📡 Scroll-synced notifications */}
      <div
        ref={feedRef}
        className="relative z-10 flex flex-col gap-6"
      >
        <AnimatedList start={isInView}>
        <ServiceNotification
          icon="🌐"
          title="Website launched"
          time="2m ago"
          color="#4f8cff"
        />

        <ServiceNotification
          icon="📱"
          title="Mobile app deployed"
          time="5m ago"
          color="#ff5f9e"
        />

        <ServiceNotification
          icon="🎨"
          title="UI/UX design completed"
          time="8m ago"
          color="#fbbf24"
        />

        <ServiceNotification
          icon="📈"
          title="SEO growth optimized"
          time="12m ago"
          color="#34d399"
        />

        <ServiceNotification
          icon="🛒"
          title="E-commerce sales boosted"
          time="18m ago"
          color="#a78bfa"
        />
        </AnimatedList>
      </div>
    </section>
  );
}
