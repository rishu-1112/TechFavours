import { useEffect, useRef } from "react";

export default function Stars({ count = 90, speed = 0.15 }) {
  const starsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      starsRef.current.forEach((star, i) => {
        if (!star) return;
        const offset = scrollY * speed * (i % 5);
        star.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          ref={(el) => (starsRef.current[i] = el)}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
