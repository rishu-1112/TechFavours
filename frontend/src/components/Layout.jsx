import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Stars from "./Stars";
import ShootingStars from "./ShootingStars";
import Moon from "./Moon";
import Navbar from "./Navbar";
import { ScrollProgress } from "./ui/scroll-progress";


export default function Layout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night">
      <ScrollProgress />
      <Navbar/>
      {/* 🌌 Deep stars */}
      <Moon />

        <Stars count={130} speed={0.08} />
        <Stars count={70} speed={0.18} />
  
        <ShootingStars />
      {/* 📄 Pages */}
      <main id="hero" className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
