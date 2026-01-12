"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { X } from "lucide-react";

/* ---------------- TYPING TEXT ---------------- */

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-white/80">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ---------------- MODAL ---------------- */

function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 glass-card w-[90%] max-w-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ---------------- CTA SECTION ---------------- */

export default function CTASection() {
  const cardRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);
  const [openCalendly, setOpenCalendly] = useState(false);

  /* Parallax tilt */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-40 px-6 overflow-hidden">

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-[140px]" />
      </div>

      {/* CARD */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="
          glass-card
          max-w-4xl mx-auto
          px-8 py-20
          text-center
          will-change-transform
        "
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s build something
          <br />
          <AuroraText>extraordinary</AuroraText>
        </h2>

        <p className="max-w-2xl mx-auto mb-6">
          <TypingText text="Web. Mobile. Growth. Performance. Scale." />
        </p>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          From idea to launch — TechFavours partners with ambitious teams
          to deliver premium digital products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RainbowButton onClick={() => setOpenForm(true)}>
            Start a Project
          </RainbowButton>
            <RainbowButton>
          <button
            onClick={() => setOpenCalendly(true)}
            className="
              px-8 py-3
              rounded-full
            "
          >
            Book a Free Call
          </button>
          </RainbowButton>
        </div>
      </motion.div>

      {/* FORM MODAL */}
      <Modal open={openForm} onClose={() => setOpenForm(false)}>
        <h3 className="text-xl text-white mb-4">Start a Project</h3>
        <form className="space-y-4">
          <input className="glass-input" placeholder="Name" />
          <input className="glass-input" placeholder="Email" />
          <textarea className="glass-input h-28" placeholder="Project details" />
          <RainbowButton className="w-full">Submit</RainbowButton>
        </form>
      </Modal>

      {/* CALENDLY MODAL */}
      <Modal open={openCalendly} onClose={() => setOpenCalendly(false)}>
        <iframe
          src="https://calendly.com/your-calendly-link"
          className="w-full h-[520px] rounded-xl"
        />
      </Modal>

    </section>
  );
}
