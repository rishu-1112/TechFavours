import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import logo from "@/assets/logo/logo.png";
import { UserRound } from 'lucide-react';

const achievements = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: " years Experience" },
  { value: "Fast", label: "Delivery" },
  { value: "24/7", label: "Support" },
];

export default function WhyChooseBeam() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const userRef = useRef(null);
  const achRefs = achievements.map(() => useRef(null));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] flex items-center justify-center"
    >
      {/* LEFT — ACHIEVEMENTS */}
      <div className="absolute left-0 flex flex-col gap-6">
        {achievements.map((item, i) => (
          <AchievementItem
            key={i}
            ref={achRefs[i]}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>

      {/* CENTER — TECHFAVOURS */}
      <div
        ref={centerRef}
        className="
          relative z-10
          w-20 h-20
          flex items-center justify-center
          rounded-full bg-white/10 backdrop-blur-md
        "
      >
        <img
          src={logo}
          alt="TechFavours"
          className="w-4 h-4 scale-400"
        />
      </div>

      {/* RIGHT — USER */}
      <div
        ref={userRef}
        className="
          absolute right-0
          w-20 h-20 rounded-full
          flex items-center justify-center
          bg-white/10 backdrop-blur-md
        "
      >
        <UserRound className="w-15 h-15 text-white scale-50" />
      </div>

      {/* BEAMS — LEFT → CENTER */}
      {achRefs.map((ref, i) => (
        <AnimatedBeam
          key={`ach-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
        />
      ))}

      {/* BEAM — CENTER → USER */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={userRef}
      />
    </div>
  );
}

const AchievementItem = forwardRef(({ value, label }, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-4">
      {/* Circle */}
      <div
        className="
          w-20 h-20
          rounded-full
          flex flex-col items-center justify-center
          text-center
          bg-white/10 backdrop-blur-md
        "
      >
        <span className="text-xl font-semibold text-white">
          {value}
        </span>
      </div>

      {/* Text */}
      <span className="text-sm text-white/80 max-w-[140px]">
        {label}
      </span>
    </div>
  );
});