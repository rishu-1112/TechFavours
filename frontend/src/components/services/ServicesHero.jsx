import GlassCard from "@/components/GlassCard";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex items-center justify-center
        px-6
        overflow-hidden
      "
    >
      {/* 🌌 BACKGROUND AURORA GLOW */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(60%_40%_at_50%_0%,rgba(140,120,255,0.15),transparent_70%)]
          pointer-events-none
        "
      />

      {/* 🧊 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full"
      >
        <BorderBeam
          size={90}
          duration={14}
          colorFrom="rgba(169,124,248,0.9)"
          colorTo="rgba(253,204,146,0.4)"
          borderWidth={1}
        />

        <GlassCard className="text-center px-8 py-12">
          {/* SMALL EYEBROW */}
          <span className="text-xs uppercase tracking-widest text-white/60">
            Our Services
          </span>

          {/* TITLE */}
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-white">
            Building <AuroraText>Scalable Digital</AuroraText> <br />
            Products That Perform
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            From strategy and design to development and scaling,
            we help businesses build fast, reliable, and future-ready
            digital solutions.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <RainbowButton>
              Start a Project
            </RainbowButton>

            <RainbowButton variant="outline">
              View Process
            </RainbowButton>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
