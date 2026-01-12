import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const GlassCard = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "glass-card relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

export default GlassCard;
