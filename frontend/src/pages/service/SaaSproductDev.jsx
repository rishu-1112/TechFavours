import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function SaaSProductDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          SaaS Product Development Services | MVP to Scalable SaaS Platforms
        </title>
        <meta
          name="description"
          content="End-to-end SaaS product development services. We build scalable SaaS platforms including MVPs, dashboards, APIs, subscriptions, and cloud infrastructure."
        />
        <meta
          name="keywords"
          content="SaaS Product Development, SaaS Development Company, MVP Development, SaaS Dashboard, Scalable SaaS Platform"
        />
      

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            SaaS Product Development
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We design and build scalable SaaS products from idea to production —
            including MVPs, dashboards, APIs, authentication, subscriptions,
            and cloud-ready backend systems.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Build My SaaS
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

        {/* WHAT IS SAAS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is a SaaS Product?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            A SaaS (Software as a Service) product is a cloud-based software
            application that users access through the internet. Instead of
            installing software, users log in, use features, manage data, and
            pay via subscriptions.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Examples include CRM systems, analytics tools, project management
            platforms, internal dashboards, and AI-powered business tools.
          </p>
        </div>

        {/* WHAT WE BUILD */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Build for SaaS Products
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="MVP Development"
              desc="We build Minimum Viable Products fast so you can validate ideas, onboard early users, and attract investors without wasting time or budget."
            />

            <Card
              title="Admin & User Dashboards"
              desc="Custom dashboards for users and admins with analytics, data visualization, role-based access, and real-time updates."
            />

            <Card
              title="Authentication & Authorization"
              desc="Secure login systems including email/password, OAuth, role-based permissions, and access control."
            />

            <Card
              title="Subscriptions & Payments"
              desc="Subscription billing, free trials, upgrades, downgrades, invoices, and payment gateway integration."
            />

            <Card
              title="APIs & Backend Systems"
              desc="Scalable REST or GraphQL APIs, database design, background jobs, and business logic."
            />

            <Card
              title="Cloud & Scalability"
              desc="Cloud-ready architecture designed to scale smoothly as users and data grow."
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our SaaS Development Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Product Discovery & Planning"
              desc="We understand your idea, market, target users, and business model to plan the right SaaS architecture."
            />

            <Step
              number="02"
              title="UX Design & Flow Mapping"
              desc="User flows, wireframes, and dashboards are designed for clarity, simplicity, and adoption."
            />

            <Step
              number="03"
              title="MVP & Core Development"
              desc="We build core features quickly using modern tech while keeping the system scalable."
            />

            <Step
              number="04"
              title="Testing & Security"
              desc="We test performance, security, and edge cases before launch."
            />

            <Step
              number="05"
              title="Launch, Scale & Iterate"
              desc="After launch, we help you improve features, scale infrastructure, and grow users."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Startup founders building MVPs</li>
            <li>✔ Businesses launching SaaS products</li>
            <li>✔ Companies replacing internal tools</li>
            <li>✔ Entrepreneurs validating new ideas</li>
            <li>✔ Teams scaling existing SaaS platforms</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for SaaS Development
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Startup-friendly approach</li>
            <li>✔ Clean, scalable architecture</li>
            <li>✔ Fast MVP delivery</li>
            <li>✔ Secure & future-proof systems</li>
            <li>✔ Long-term growth support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Build Your SaaS Product?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Whether you're building an MVP or scaling a SaaS platform, we help
            you move faster with confidence.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start SaaS Development
            </RainbowButton>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------- COMPONENTS -------- */

function Card({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-white/70 mt-3 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

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
