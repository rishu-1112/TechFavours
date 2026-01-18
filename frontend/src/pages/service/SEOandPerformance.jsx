import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function SEOAndPerformanceOptimization() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          SEO & Performance Optimization Services | Rank Faster & Convert Better
        </title>
        <meta
          name="description"
          content="Professional SEO and website performance optimization services. We improve rankings, page speed, Core Web Vitals, and overall website visibility."
        />
        <meta
          name="keywords"
          content="SEO Services, Website Performance Optimization, Technical SEO, Core Web Vitals, Page Speed Optimization, Google Ranking"
        />
    

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            SEO & Performance Optimization
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We optimize your website for search engines and real users. Our SEO
            and performance optimization services help your website rank higher,
            load faster, and convert more visitors into customers.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Improve My Rankings
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

        {/* WHAT IS SEO & PERFORMANCE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is SEO & Performance Optimization?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            SEO (Search Engine Optimization) is the process of improving your
            website so that search engines like Google can understand, rank, and
            recommend it to the right users.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Performance optimization focuses on how fast and smooth your website
            feels to users. Together, SEO and performance determine your search
            rankings, user experience, and conversion rates.
          </p>
        </div>

        {/* WHY IT MATTERS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why SEO & Performance Matter for Your Business
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Higher Google rankings mean more traffic</li>
            <li>✔ Faster websites reduce bounce rates</li>
            <li>✔ Better UX increases conversions</li>
            <li>✔ Optimized sites build trust and credibility</li>
            <li>✔ Performance impacts Core Web Vitals scores</li>
            <li>✔ SEO delivers long-term organic growth</li>
          </ul>
        </div>

        {/* WHAT WE OPTIMIZE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Optimize
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Technical SEO"
              desc="Site structure, clean URLs, sitemap setup, robots.txt, schema markup, and crawl optimization."
            />

            <Card
              title="On-Page SEO"
              desc="Optimized headings, meta tags, internal linking, keyword usage, and content structure."
            />

            <Card
              title="Page Speed Optimization"
              desc="Image optimization, code splitting, caching, lazy loading, and asset compression."
            />

            <Card
              title="Core Web Vitals"
              desc="Improving LCP, CLS, and INP scores to meet Google’s performance benchmarks."
            />

            <Card
              title="Mobile Optimization"
              desc="Ensuring your website performs smoothly across all devices and screen sizes."
            />

            <Card
              title="Analytics & Tracking"
              desc="Setting up Google Analytics, Search Console, and performance monitoring tools."
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our SEO & Performance Optimization Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="SEO & Performance Audit"
              desc="We analyze your website’s current SEO, speed, structure, and technical issues."
            />

            <Step
              number="02"
              title="Optimization Strategy"
              desc="We create a clear action plan based on your industry, competitors, and goals."
            />

            <Step
              number="03"
              title="Implementation"
              desc="We fix technical issues, optimize content, and improve performance metrics."
            />

            <Step
              number="04"
              title="Testing & Validation"
              desc="We test improvements using Lighthouse, PageSpeed Insights, and real-user data."
            />

            <Step
              number="05"
              title="Monitoring & Continuous Improvement"
              desc="SEO is ongoing. We monitor rankings, traffic, and performance continuously."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Businesses struggling to rank on Google</li>
            <li>✔ Websites with slow loading times</li>
            <li>✔ Startups wanting organic growth</li>
            <li>✔ E-commerce stores losing conversions</li>
            <li>✔ SaaS platforms needing better visibility</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for SEO & Performance
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Performance-first development mindset</li>
            <li>✔ Ethical, long-term SEO strategies</li>
            <li>✔ Real metrics, not vanity numbers</li>
            <li>✔ Transparent reporting & communication</li>
            <li>✔ Continuous optimization support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Want More Traffic & Better Performance?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s optimize your website to rank higher, load faster, and convert
            better.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start SEO Optimization
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
