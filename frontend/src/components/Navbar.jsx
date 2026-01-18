import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "../assets/logo/logo.png";

/* ---------------- SERVICES LIST ---------------- */

const servicesList = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites built using modern frameworks.",
    path: "/services/website-development",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions including dashboards, APIs, and cloud systems.",
    path: "/services/saas-product-development",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with smooth UX and secure backend systems.",
    path: "/services/mobile-app-development",
  },
  {
    title: "Website Management & Maintenance",
    desc: "Monitoring, updates, security patches, and performance tuning.",
    path: "/services/website-management-maintenance",
  },
  {
    title: "AI Automation & Workflow Integration",
    desc: "AI-driven automations using APIs, n8n, and intelligent workflows.",
    path: "/services/ai-automation-workflow",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "Technical SEO, Core Web Vitals, and page speed improvements.",
    path: "/services/seo-performance-optimization",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    desc: "Data-driven campaigns for traffic, conversions, and authority.",
    path: "/services/digital-marketing-growth",
  },
  {
    title: "E-Commerce Development & Scaling",
    desc: "Conversion-focused e-commerce with payments and analytics.",
    path: "/services/ecommerce-development-scaling",
  },
  {
    title: "Cloud & Backend Solutions",
    desc: "Secure backend systems, cloud deployments, APIs, and databases.",
    path: "/services/cloud-backend-solutions",
  },
];

/* ---------------- NAVBAR ---------------- */

export default function Navbar() {
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const drawerLinksRef = useRef(null);

  /* Detect hero overlap */
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOnHero(false);
      return;
    }

    const heroHeight = hero.offsetHeight;
    const onScroll = () => setOnHero(window.scrollY < heroHeight - 80);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* Drawer animation */
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    if (open) {
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
      gsap.fromTo(drawerRef.current, { x: "100%" }, { x: "0%", duration: 0.6 });
    } else {
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.5 });
    }
  }, [open]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${onHero ? "bg-transparent" : "bg-white/10 backdrop-blur-xl border-b border-white/10"}`}
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
          <div className={`hidden md:flex gap-10 items-center ${onHero ? "text-white" : "text-white/80"}`}>
            <NavLink to="/" active={isActive("/")}>Home</NavLink>
            <ServicesDropdown navigate={navigate} />
            <NavLink to="/about" active={isActive("/about")}>About</NavLink>
            <NavLink to="/contact" active={isActive("/contact")}>Contact</NavLink>
            <NavLink to="/blog" active={isActive("/blog")}>Blog</NavLink>
          </div>

          {/* MOBILE */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
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

      {/* DRAWER */}
      <aside
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white/10 backdrop-blur-xl border-l border-white/20"
      >
        <div className="p-6 flex justify-between items-center">
          <AuroraText className="text-lg font-semibold">TechFavours</AuroraText>
          <button onClick={() => setOpen(false)}><X size={22} /></button>
        </div>

        <div ref={drawerLinksRef} className="flex flex-col gap-6 px-6 mt-10">
          {["/", "/services", "/about", "/contact"].map((path) => (
            <Link key={path} to={path} onClick={() => setOpen(false)}>
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium transition
      ${active ? "text-white" : "text-white/70 hover:text-white"}`}
    >
      {children}
    </Link>
  );
}

function ServicesDropdown({ navigate }) {
  return (
    <div className="relative group">
      {/* CLICK + HOVER */}
      <button
        onClick={() => navigate("/services")}
        className="text-sm font-medium text-white/70 hover:text-white transition"
      >
        Services
      </button>

      {/* DROPDOWN */}
      <div className="absolute left-1/2 top-full mt-0 -translate-x-1/2 w-[520px]
        opacity-0 translate-y-4 pointer-events-none
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
        transition-all duration-300 z-50"
      >
        <div className="rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6">
          <div className="grid grid-cols-2 gap-5">
            {servicesList.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="rounded-xl p-3 hover:bg-white/5 transition block"
              >
                <AuroraText className="text-sm font-semibold">
                  {service.title}
                </AuroraText>
                <p className="text-xs text-white/60 mt-1">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
