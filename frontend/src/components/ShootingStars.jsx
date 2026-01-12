import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      setStars((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * window.innerWidth,
          top: Math.random() * window.innerHeight * 0.4,
        },
      ]);

      // remove star after animation
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            left: star.left,
            top: star.top,
          }}
        />
      ))}
    </div>
  );
}
