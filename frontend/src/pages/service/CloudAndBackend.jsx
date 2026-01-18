import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function CloudAndBackendSolutions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          Cloud & Backend Solutions | Scalable, Secure Infrastructure for Business
        </title>
        <meta
          name="description"
          content="Professional cloud and backend development services. We build secure, scalable backend systems, APIs, cloud infrastructure, and DevOps pipelines."
        />
        <meta
          name="keywords"
          content="Cloud Solutions, Backend Development, API Development, Cloud Infrastructure, DevOps Services, Scalable Backend Systems"
        />
      

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Cloud & Backend Solutions
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We design and build secure, scalable backend systems and cloud
            infrastructure that power modern digital products. From APIs to
            cloud deployments, we ensure reliability, performance, and growth.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Build My Backend
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

        {/* WHAT ARE CLOUD & BACKEND SOLUTIONS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What are Cloud & Backend Solutions?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            Backend systems handle everything users don’t see — authentication,
            databases, APIs, business logic, and integrations. Cloud
            infrastructure ensures these systems are fast, reliable, and
            available anytime.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Together, cloud and backend solutions form the foundation of your
            website, app, SaaS product, or digital platform.
          </p>
        </div>

        {/* WHAT WE BUILD */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Build for Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Backend Application Development"
              desc="Secure backend systems with clean architecture, authentication, and business logic."
            />

            <Card
              title="API Development & Integrations"
              desc="REST and GraphQL APIs that connect apps, services, and third-party platforms."
            />

            <Card
              title="Database Design & Optimization"
              desc="Efficient data models, indexing, and query optimization for scalability."
            />

            <Card
              title="Cloud Infrastructure Setup"
              desc="Cloud servers, storage, networking, and deployment strategies."
            />

            <Card
              title="DevOps & CI/CD Pipelines"
              desc="Automated deployments, testing, monitoring, and rollback strategies."
            />

            <Card
              title="Security & Access Control"
              desc="Secure authentication, authorization, encryption, and access management."
            />
          </div>
        </div>

        {/* CLOUD SCALABILITY */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Built for Scale, Performance & Security
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Auto-scaling cloud infrastructure</li>
            <li>✔ High availability & fault tolerance</li>
            <li>✔ Secure data storage & encryption</li>
            <li>✔ Load balancing & traffic handling</li>
            <li>✔ Disaster recovery & backups</li>
            <li>✔ Performance monitoring & alerts</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our Cloud & Backend Development Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Requirement Analysis"
              desc="We understand your product, traffic expectations, and business goals."
            />

            <Step
              number="02"
              title="Architecture Design"
              desc="Designing scalable, secure system architecture and cloud strategy."
            />

            <Step
              number="03"
              title="Development & Integration"
              desc="Building backend services, APIs, and integrations."
            />

            <Step
              number="04"
              title="Cloud Deployment & Automation"
              desc="Deploying infrastructure with CI/CD pipelines and monitoring."
            />

            <Step
              number="05"
              title="Optimization & Scaling"
              desc="Improving performance, reducing costs, and scaling as demand grows."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ SaaS platforms & startups</li>
            <li>✔ High-traffic websites & apps</li>
            <li>✔ E-commerce platforms</li>
            <li>✔ Enterprises building internal systems</li>
            <li>✔ Businesses needing reliable infrastructure</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for Cloud & Backend
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Scalable-first architecture mindset</li>
            <li>✔ Security & reliability focused</li>
            <li>✔ Clean, maintainable backend code</li>
            <li>✔ DevOps & cloud expertise</li>
            <li>✔ Long-term infrastructure support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Need a Powerful Backend & Cloud Setup?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s build backend systems and cloud infrastructure that scale with
            your business and perform reliably under pressure.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start Cloud Development
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
