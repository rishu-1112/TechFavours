import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function DigitalMarketingGrowthStrategy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
   
        <title>
          Digital Marketing & Growth Strategy Services | Data-Driven Business Growth
        </title>
        <meta
          name="description"
          content="Result-driven digital marketing and growth strategy services. We help businesses grow traffic, leads, and conversions using data-driven marketing."
        />
        <meta
          name="keywords"
          content="Digital Marketing Services, Growth Strategy, Online Marketing Agency, Lead Generation, Performance Marketing, Conversion Optimization"
        />
   

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Digital Marketing & Growth Strategy
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We help businesses grow using data-driven digital marketing
            strategies. From traffic acquisition to conversion optimization, we
            focus on measurable growth — not vanity metrics.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Grow My Business
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

        {/* WHAT IS DIGITAL MARKETING */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is Digital Marketing & Growth Strategy?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            Digital marketing is the process of promoting your business online
            using channels like search engines, social media, content, email,
            and paid advertising.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Growth strategy connects marketing efforts with business goals —
            ensuring that traffic turns into leads, leads turn into customers,
            and customers turn into long-term revenue.
          </p>
        </div>

        {/* WHAT WE DO */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Do for Digital Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Growth Strategy & Planning"
              desc="We define clear growth goals, customer personas, acquisition channels, and measurable KPIs."
            />

            <Card
              title="Search Engine Marketing (SEO & PPC)"
              desc="Organic SEO and paid ads to increase visibility, traffic, and high-intent leads."
            />

            <Card
              title="Content Marketing"
              desc="Blogs, landing pages, and content strategies designed to educate users and drive conversions."
            />

            <Card
              title="Social Media Marketing"
              desc="Brand building, audience engagement, and paid campaigns across social platforms."
            />

            <Card
              title="Conversion Rate Optimization (CRO)"
              desc="Optimizing landing pages, funnels, and CTAs to improve conversions."
            />

            <Card
              title="Analytics & Performance Tracking"
              desc="Tracking real metrics like CAC, LTV, conversion rates, and ROI."
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our Digital Marketing Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Business & Market Research"
              desc="We understand your industry, competitors, customers, and growth opportunities."
            />

            <Step
              number="02"
              title="Strategy & Funnel Design"
              desc="We design marketing funnels that guide users from awareness to conversion."
            />

            <Step
              number="03"
              title="Campaign Execution"
              desc="We launch SEO, paid ads, content, and social campaigns."
            />

            <Step
              number="04"
              title="Optimization & Scaling"
              desc="We optimize campaigns continuously to improve ROI."
            />

            <Step
              number="05"
              title="Reporting & Insights"
              desc="You receive clear reports with actionable insights, not confusing dashboards."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Startups looking for traction</li>
            <li>✔ Businesses scaling online sales</li>
            <li>✔ SaaS companies acquiring users</li>
            <li>✔ E-commerce brands increasing revenue</li>
            <li>✔ Service-based businesses generating leads</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for Digital Growth
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Data-driven decision making</li>
            <li>✔ Clear ROI-focused strategies</li>
            <li>✔ Full-funnel growth approach</li>
            <li>✔ Transparent reporting</li>
            <li>✔ Long-term growth mindset</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Scale Your Business?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s create a digital growth strategy that brings real traffic,
            real customers, and real results.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start Growth Strategy
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
