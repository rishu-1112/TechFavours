import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Sparkles,
  Cpu,
} from "lucide-react";

const floatingItems = [
  { icon: Code2, text: "Web & SaaS Development" },
  { icon: Cpu, text: "AI Automation" },
  { icon: Globe, text: "Website Management" },
  { icon: Sparkles, text: "UI / UX & Growth" },
];

export default function ServicesCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND AURORA GLOW */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div
          className="
            w-[700px] h-[700px]
            rounded-full
            bg-gradient-to-tr
            from-[#A97CF8]/25
            via-[#F38CB8]/15
            to-[#FDCC92]/25
            blur-[140px]
          "
        />
      </div>

      {/* 🌠 FLOATING SERVICE TEXT */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 0.6,
                y: [0, -14, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`
                absolute flex items-center gap-2
                text-xs text-white/70
                ${
                  i === 0 ? "top-[15%] left-[10%]" :
                  i === 1 ? "top-[25%] right-[12%]" :
                  i === 2 ? "bottom-[28%] left-[14%]" :
                  "bottom-[18%] right-[16%]"
                }
              `}
            >
              <Icon className="w-4 h-4 text-white/60" />
              <span>{item.text}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 🧊 CTA CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <GlassCard className="p-12 md:p-16">

          {/* HEADLINE */}
          <h2 className="section-title leading-tight">
            Build High-Performance
            <br />
            <AuroraText>Web, SaaS & AI-Powered Products</AuroraText>
          </h2>

          {/* SUBHEAD */}
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            From modern websites and SaaS platforms to AI automation and
            long-term website management — we help businesses design,
            build, scale, and continuously improve digital products
            that deliver real results.
          </p>

          {/* TRUST SIGNALS */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <span>✔ Performance-focused</span>
            <span>✔ SEO-optimized</span>
            <span>✔ Scalable architecture</span>
            <span>✔ Ongoing support</span>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <RainbowButton className="px-9 py-4 text-base shadow-lg">
              Start Your Project
            </RainbowButton>

            <a
              href="/contact"
              className="
                px-9 py-4
                rounded-full
                text-sm
                text-white/80
                border border-white/20
                hover:bg-white/10
                transition
              "
            >
              Schedule a Free Consultation
            </a>
          </div>

        </GlassCard>
      </motion.div>
    </section>
  );
}
