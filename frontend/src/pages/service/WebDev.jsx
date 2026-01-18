import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function WebsiteDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}

        <title>
          Website Development Services | High-Performance & SEO-Friendly Websites
        </title>
        <meta
          name="description"
          content="Professional website development services for businesses and startups. We build fast, SEO-friendly, scalable websites using modern technologies."
        />
        <meta
          name="keywords"
          content="Website Development, Web Development Agency, SEO Friendly Website, Custom Website Development, Business Website"
        />


      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Website Development
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We design and develop high-performance, SEO-friendly websites that
            are fast, scalable, secure, and built to convert visitors into
            customers.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Start Your Website
            </RainbowButton>

            <RainbowButton
              variant="outline"
              className="px-8 py-3"
              onClick={() => navigate("/services")}
            >
              View All Services
            </RainbowButton>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Do in Website Development
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">
                Custom Website Development
              </h3>
              <p className="text-white/70 mt-3 leading-relaxed">
                We don’t use generic templates. Every website is designed and
                developed specifically for your business goals, brand identity,
                and audience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">
                Performance-First Architecture
              </h3>
              <p className="text-white/70 mt-3 leading-relaxed">
                Speed matters. We build websites that load fast, score high on
                Core Web Vitals, and deliver smooth user experiences on all
                devices.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">
                SEO-Friendly Development
              </h3>
              <p className="text-white/70 mt-3 leading-relaxed">
                Clean code, proper heading structure, optimized images, and
                technical SEO best practices are built directly into your
                website.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold">
                Scalable & Maintainable Code
              </h3>
              <p className="text-white/70 mt-3 leading-relaxed">
                Your website is built to grow. Adding new pages, features, or
                integrations later is easy and cost-effective.
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our Website Development Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Understanding Your Business"
              desc="We start by understanding your goals, target audience, competitors, and success metrics."
            />

            <Step
              number="02"
              title="Design & User Experience"
              desc="We create clean, modern designs focused on usability, clarity, and conversions."
            />

            <Step
              number="03"
              title="Development & Optimization"
              desc="We build your website using modern frameworks, optimized for speed, SEO, and security."
            />

            <Step
              number="04"
              title="Testing & Launch"
              desc="We test across devices, browsers, and performance metrics before launching confidently."
            />

            <Step
              number="05"
              title="Support & Growth"
              desc="After launch, we support updates, improvements, and long-term growth."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service Is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Startups launching their first website</li>
            <li>✔ Businesses needing a modern redesign</li>
            <li>✔ Agencies and consultants</li>
            <li>✔ SaaS companies and product teams</li>
            <li>✔ E-commerce and service-based businesses</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Build a High-Performance Website?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s build a website that represents your brand, performs
            exceptionally, and helps your business grow.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </RainbowButton>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------- STEP COMPONENT -------- */

function Step({ number, title, desc }) {
  return (
    <div className="flex gap-6">
      <div className="text-blue-400 font-semibold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/70 mt-2 max-w-3xl leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
