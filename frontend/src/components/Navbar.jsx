import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Pointer } from "@/components/ui/pointer";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const drawerLinksRef = useRef(null);

  /* Detect hero overlap (route-aware) */
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setOnHero(false);
      return;
    }

    const heroHeight = hero.offsetHeight;

    const onScroll = () => {
      setOnHero(window.scrollY < heroHeight - 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* Drawer link stagger */
  useEffect(() => {
    if (!drawerLinksRef.current) return;

    const links = drawerLinksRef.current.children;

    if (open) {
      gsap.fromTo(
        links,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      gsap.set(links, { opacity: 0, y: 20 });
    }
  }, [open]);

  /* Drawer slide */
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    if (open) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "power4.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [open]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 🌈 POINTER (NAV ONLY) */}
        <nav
          
          className={`
            fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${onHero
              ? "bg-transparent"
              : "bg-white/10 backdrop-blur-xl border-b border-white/10"}
          `}
        >
          <div className="flex items-center justify-between px-6 py-4">

            {/* BRAND */}
            <SparklesText>
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} className="w-14 h-14" />
                <AuroraText className="text-lg font-semibold">
                  TechFavours
                </AuroraText>
              </Link>
            </SparklesText>

            {/* DESKTOP LINKS */}
            <div
              className={`
                hidden md:flex gap-10
                ${onHero ? "text-white" : "text-white/80"}
              `}
            >
              {["/", "/Services", "/About", "/Contact","/Blog"].map((path) => (
                <NavLink
                  key={path}
                  to={path}
                  active={isActive(path)}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              ))}
            </div>

            {/* MOBILE MENU */}
            <button
              className="md:hidden glass-hamburger"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none z-40"
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        ref={drawerRef}
        className="
          fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
          bg-white/10 backdrop-blur-xl border-l border-white/20
        "
      >
        <div className="p-6 flex justify-between items-center">
          <AuroraText className="text-lg font-semibold">
            TechFavours
          </AuroraText>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div
          ref={drawerLinksRef}
          className="flex flex-col gap-6 px-6 mt-10"
        >
          {["/", "/services", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={`mobile-link ${isActive(path) ? "active" : ""}`}
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}

/* 🌈 NAV LINK WITH AURORA + POINTER SYNC */
function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      onMouseEnter={(e) => {
        e.currentTarget.style.setProperty(
          "--pointer-color",
          "linear-gradient(90deg,#A97CF8,#F38CB8,#FDCC92)"
        );
      }}
      className={`
        relative text-sm font-medium tracking-wide
        transition-colors duration-300
        ${active ? "text-white" : "text-white/70 hover:text-white"}
      `}
    >
      {children}

      {/* AURORA UNDERLINE */}
      <span
        className={`
          absolute left-1/2 -bottom-2 h-[2px] w-6
          -translate-x-1/2 rounded-full
          bg-gradient-to-r
          from-[#A97CF8]
          via-[#F38CB8]
          to-[#FDCC92]
          blur-[2px]
          transition-all duration-300
          ${active ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
      />
    </Link>
  );
}
