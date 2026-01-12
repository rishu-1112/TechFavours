import logo from "@/assets/logo/logo.png";
import forestImg from "@/assets/footer/forest.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b10] overflow-hidden">

      {/* 🌲 CINEMATIC IMAGE LAYER */}
<div className="relative w-full isolate">

  {/* IMAGE */}
  <img
    src={forestImg}
    alt="Landscape"
    className="
      w-full
      h-42
      object-cover
      block
      select-none
      pointer-events-none
      brightness-[0.95]
      contrast-[1.05]
      saturate-[1.1]
    "
  />

  {/* 🌌 AURORA GLOW (BOTTOM → UP) */}
  <div
    className="
      absolute bottom-0 left-0
      w-full h-full
      pointer-events-none
      bg-gradient-to-t
      from-[#7c6cff]/35
      via-[#6ee7ff]/15
      to-transparent
      opacity-60
      mix-blend-screen
    "
  />

  {/* 🌫️ ATMOSPHERIC FOG */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#0b0b10]/90
      via-[#4b3a7a]/25
      to-transparent
    "
  />

  {/* ✨ SOFT GLOW HORIZON */}
  <div
    className="
      absolute bottom-0 left-1/2
      -translate-x-1/2
      w-[120%] h-24
      bg-gradient-to-t
      from-[#7c6cff]/20
      to-transparent
      blur-2xl
      opacity-60
    "
  />

  {/* 🎞️ GRAIN / NOISE */}
  <div
    className="
      absolute inset-0
      opacity-[0.08]
      mix-blend-overlay
      pointer-events-none
      bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjgiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]
    "
  />

  {/* 🔻 HARD CUT BLEND INTO FOOTER */}
  <div
    className="
      absolute bottom-0 left-0
      w-full h-24
      bg-gradient-to-b
      from-transparent
      to-[#0b0b10]
    "
  />
</div>


      {/* FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="TechFavours" className="w-14 h-14" />
              <span className="text-white font-medium text-lg">
                TechFavours
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm">
              Building reliable, high-performance digital products
              with clarity, speed, and precision.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-16">
            <FooterColumn
              title="Company"
              links={["About", "Services", "Projects", "Contact"]}
            />
            <FooterColumn
              title="Legal"
              links={["Privacy Policy", "Terms"]}
            />
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/80 mb-3">
              Have a project in mind?
            </p>
            <a
              href="/contact"
              className="
                inline-block
                px-5 py-2.5
                rounded-full
                text-sm
                text-white
                border border-white/20
                hover:bg-white/10
                transition
              "
            >
              Let’s talk
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
          <span>© {new Date().getFullYear()} TechFavours</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER COLUMN */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-medium mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="text-white/60 hover:text-white transition text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
