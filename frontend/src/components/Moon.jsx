import { useEffect, useRef } from "react";

export default function Moon() {
  const moonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (moonRef.current) {
        moonRef.current.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={moonRef}
      className="absolute top-20 right-20 w-48 h-48 rounded-full 
      bg-gradient-to-br from-moon to-white opacity-90 blur-[1px]
      shadow-[0_0_80px_rgba(200,220,255,0.4)] z-0"
    />
  );
}
