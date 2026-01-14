import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="
          fixed bottom-6 right-6 z-[999]
          h-12 w-12 rounded-full
          bg-black/40 backdrop-blur-md
          border border-cyan-400
          text-cyan-300 text-xl
          shadow-[0_0_15px_rgba(34,211,238,0.8)]
          hover:shadow-[0_0_30px_rgba(34,211,238,1)]
          hover:text-white
          transition-all duration-300
          animate-pulse
        "
      >
        ↑
      </button>
    )
  );
}
