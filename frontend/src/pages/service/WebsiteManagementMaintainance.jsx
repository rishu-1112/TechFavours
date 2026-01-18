import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function WebsiteManagementMaintenance() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}

        <title>
          Website Management & Maintenance Services | Secure, Fast & Reliable Websites
        </title>
        <meta
          name="description"
          content="Professional website management and maintenance services. We handle updates, security, performance optimization, monitoring, and ongoing website support."
        />
        <meta
          name="keywords"
          content="Website Maintenance Services, Website Management, Website Support, Website Security, Website Performance Optimization"
        />


      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Website Management & Maintenance
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We take care of your website so you don’t have to. From regular
            updates and security monitoring to performance optimization and
            content changes, we keep your website fast, secure, and reliable
            24/7.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Manage My Website
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

        {/* WHAT IS WEBSITE MAINTENANCE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is Website Management & Maintenance?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            Website management and maintenance is the ongoing process of keeping
            your website updated, secure, optimized, and functioning smoothly
            after it goes live. A website is not a one-time project — it needs
            continuous care to perform well.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Without proper maintenance, websites can become slow, insecure,
            outdated, and unreliable, which can hurt user trust, SEO rankings,
            and business growth.
          </p>
        </div>

        {/* WHAT WE HANDLE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Handle for Your Website
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Regular Updates & Fixes"
              desc="We keep your website code, frameworks, plugins, and dependencies updated to avoid bugs and compatibility issues."
            />

            <Card
              title="Security Monitoring & Protection"
              desc="Continuous security monitoring, vulnerability fixes, malware protection, and secure configurations."
            />

            <Card
              title="Performance Optimization"
              desc="Speed improvements, image optimization, caching, and performance tuning to keep your website fast."
            />

            <Card
              title="Uptime Monitoring"
              desc="24/7 monitoring to detect downtime and resolve issues quickly before users notice."
            />

            <Card
              title="Content Updates & Changes"
              desc="Adding new pages, updating text, images, blogs, and making small design changes as needed."
            />

            <Card
              title="Backup & Recovery"
              desc="Automated backups and quick recovery in case of crashes, data loss, or security incidents."
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our Website Maintenance Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Website Audit"
              desc="We analyze your website’s performance, security, structure, and current issues."
            />

            <Step
              number="02"
              title="Maintenance Setup"
              desc="We set up monitoring tools, backups, and security systems tailored to your website."
            />

            <Step
              number="03"
              title="Ongoing Monitoring"
              desc="We continuously monitor performance, uptime, and security threats."
            />

            <Step
              number="04"
              title="Regular Improvements"
              desc="We apply updates, fixes, and optimizations to keep your website in top shape."
            />

            <Step
              number="05"
              title="Reporting & Support"
              desc="You receive clear updates and ongoing support whenever you need changes."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Businesses with active websites</li>
            <li>✔ Startups needing reliable support</li>
            <li>✔ E-commerce websites</li>
            <li>✔ SaaS platforms</li>
            <li>✔ Agencies outsourcing maintenance</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for Website Maintenance
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Proactive monitoring, not reactive fixes</li>
            <li>✔ Fast response time</li>
            <li>✔ Security-first approach</li>
            <li>✔ Transparent communication</li>
            <li>✔ Long-term partnership mindset</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Want a Stress-Free Website?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Focus on your business while we handle the technical side of your
            website — reliably and professionally.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start Website Maintenance
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
