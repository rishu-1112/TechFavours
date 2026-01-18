import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const GlassCard = forwardRef(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}  // ✅ IMPORTANT
        className={`
          relative rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-8
          transition-all duration-300
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
