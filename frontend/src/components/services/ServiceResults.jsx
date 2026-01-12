import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import AuroraText from "@/components/ui/aurora-text";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const industries = ["E-commerce", "SaaS", "Healthcare"];

const industryResults = {
  "E-commerce": {
    summary:
      "Conversion-focused eCommerce solutions designed to scale revenue, speed, and customer experience.",
    stats: [
      {
        value: 64,
        suffix: "%",
        label: "Conversion Rate Increase",
        icon: TrendingUp,
      },
      {
        value: 3,
        suffix: "x",
        label: "Revenue Growth",
        icon: Zap,
      },
      {
        value: 1.2,
        suffix: "s",
        label: "Average Load Time",
        icon: ShieldCheck,
      },
    ],
    logos: ["/logos/shopify.svg", "/logos/stripe.svg"],
  },
  SaaS: {
    summary:
      "Scalable SaaS platforms optimized for retention, reliability, and feature adoption.",
    stats: [
      {
        value: 52,
        suffix: "%",
        label: "User Retention Rate",
        icon: TrendingUp,
      },
      {
        value: 4,
        suffix: "x",
        label: "Feature Adoption",
        icon: Zap,
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Platform Uptime",
        icon: ShieldCheck,
      },
    ],
    logos: ["/logos/vercel.svg", "/logos/aws.svg"],
  },
  Healthcare: {
    summary:
      "Secure, compliant healthcare platforms focused on patient engagement and data protection.",
    stats: [
      {
        value: 48,
        suffix: "%",
        label: "Patient Engagement",
        icon: TrendingUp,
      },
      {
        value: 2.6,
        suffix: "x",
        label: "Qualified Lead Growth",
        icon: Zap,
      },
      {
        value: 100,
        suffix: "%",
        label: "Data Security Compliance",
        icon: ShieldCheck,
      },
    ],
    logos: ["/logos/hipaa.svg", "/logos/firebase.svg"],
  },
};

/* ---------------- COMPONENT ---------------- */

export default function ServiceResults() {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);
  const cardsRef = useRef([]);
  const [activeIndustry, setActiveIndustry] = useState("E-commerce");

  const data = industryResults[activeIndustry];

  /* COUNT UP + FLOATING ANIMATION */
  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el) => {
        if (!el) return;
        const target = +el.dataset.value;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.8,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      });

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: -12,
          duration: 2 + i * 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndustry]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="results-heading"
    >
      {/* BACKGROUND CLIENT LOGOS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex justify-center items-center gap-20 opacity-[0.05] blur-2xl">
          {data.logos.map((logo, i) => (
            <img key={i} src={logo} className="h-28" alt="" />
          ))}
        </div>
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-12">
        <h2 id="results-heading" className="section-title">
          Industry-Proven <AuroraText>Results</AuroraText>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto mt-4">
          {data.summary} Backed by real-world case studies and measurable
          performance metrics.
        </p>
      </div>

      {/* INDUSTRY TABS */}
      <div className="relative z-10 flex justify-center gap-6 mb-16">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveIndustry(industry)}
            className={`
              px-5 py-2 rounded-full text-sm transition
              ${
                activeIndustry === industry
                  ? "bg-white/15 text-white border border-white/20 shadow-[0_0_30px_rgba(169,124,248,0.25)]"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* RESULTS GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <GlassCard
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative p-10 text-center group overflow-hidden"
            >
              {/* AURORA FLOAT GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(120%_60%_at_50%_0%,rgba(169,124,248,0.25),transparent_70%)]
                  blur-2xl
                "
              />

              {/* ICON */}
              <div className="relative z-10 mb-6 flex justify-center">
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-white/10 backdrop-blur
                    flex items-center justify-center
                    shadow-[0_0_40px_rgba(169,124,248,0.35)]
                  "
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* NUMBER */}
              <div className="relative z-10">
                <span
                  ref={(el) => (numbersRef.current[i] = el)}
                  data-value={stat.value}
                  className="text-4xl font-semibold text-white"
                >
                  0
                </span>
                <span className="text-4xl font-semibold text-white">
                  {stat.suffix}
                </span>

                <p className="mt-3 text-white/70 text-sm">
                  {stat.label}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* TRUST NOTE */}
      <p className="relative z-10 text-center text-xs text-white/50 mt-12">
        Metrics are derived from verified client projects and documented case
        studies within each industry.
      </p>
    </section>
  );
}
