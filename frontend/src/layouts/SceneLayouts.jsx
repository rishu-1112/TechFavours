import Stars from "@/effects/Stars";
import ShootingStars from "@/effects/ShootingStars";
import Moon from "@/effects/Moon";
import { Globe } from "@/components/ui/globe";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function SceneLayout() {
  return (<>
    <div className="relative min-h-[300vh] overflow-hidden bg-night text-white">
      
      {/* 🌌 Global background */}
      <Stars count={90} speed={0.12} />
      <ShootingStars />
      <Moon />

      {/* 🌍 GLOBAL GLOBE */}
      <Globe className="global-globe" />

      {/* 🧭 UI */}
      <Navbar />
      {/* 📄 Pages */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
    </>
  );
}
