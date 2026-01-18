import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function AIAutomationWorkflowIntegration() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          AI Automation & Workflow Integration Services | Smarter Business Systems
        </title>
        <meta
          name="description"
          content="Custom AI automation and workflow integration services. We build intelligent automations, API integrations, and AI-driven workflows to save time and reduce costs."
        />
        <meta
          name="keywords"
          content="AI Automation, Workflow Automation, Business Process Automation, AI Integration, n8n Automation, Custom AI Solutions"
        />
      

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            AI Automation & Workflow Integration
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We design and implement AI-powered automations and intelligent
            workflows that eliminate manual work, reduce errors, and help your
            business operate faster and smarter.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Automate My Business
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

        {/* WHAT IS AI AUTOMATION */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is AI Automation & Workflow Integration?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            AI automation combines artificial intelligence with workflow
            automation to handle repetitive tasks, process data, trigger
            actions, and make intelligent decisions without human intervention.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Instead of manually moving data between tools or responding to
            repetitive requests, automated workflows run in the background —
            saving time, reducing mistakes, and improving efficiency.
          </p>
        </div>

        {/* WHAT WE AUTOMATE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Automate for Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Business Process Automation"
              desc="Automate repetitive internal tasks such as data entry, reporting, notifications, and approvals."
            />

            <Card
              title="AI-Powered Decision Workflows"
              desc="Use AI models to analyze data, generate responses, classify information, or trigger actions intelligently."
            />

            <Card
              title="API & Tool Integrations"
              desc="Connect multiple tools and platforms using APIs to create seamless data flow across systems."
            />

            <Card
              title="CRM, Sales & Support Automation"
              desc="Automate lead capture, follow-ups, ticket handling, and customer communication."
            />

            <Card
              title="Data Sync & Processing"
              desc="Automatically sync, clean, and process data between databases, dashboards, and third-party tools."
            />

            <Card
              title="Custom Automation Platforms"
              desc="Build tailored automation systems using tools like n8n or custom backend logic."
            />
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            How Our AI Automation Process Works
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Workflow Analysis"
              desc="We analyze your existing processes to identify automation opportunities."
            />

            <Step
              number="02"
              title="Automation Design"
              desc="We design workflows that define triggers, logic, integrations, and AI decision points."
            />

            <Step
              number="03"
              title="Implementation & Integration"
              desc="We build and connect automation systems using APIs, AI models, and automation platforms."
            />

            <Step
              number="04"
              title="Testing & Optimization"
              desc="Workflows are tested for reliability, accuracy, and performance."
            />

            <Step
              number="05"
              title="Monitoring & Scaling"
              desc="We monitor automations and scale them as your business grows."
            />
          </div>
        </div>

        {/* USE CASES */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Common AI Automation Use Cases
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Automated lead qualification</li>
            <li>✔ AI-based customer support replies</li>
            <li>✔ Invoice processing and approvals</li>
            <li>✔ Internal reporting and dashboards</li>
            <li>✔ Data synchronization between tools</li>
            <li>✔ Workflow triggers based on events</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for AI Automation
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Practical, business-focused AI solutions</li>
            <li>✔ Secure and scalable automation systems</li>
            <li>✔ Custom workflows, not generic templates</li>
            <li>✔ Experience with APIs and AI tools</li>
            <li>✔ Long-term optimization and support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Automate Your Business?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let AI handle repetitive work while your team focuses on growth,
            strategy, and innovation.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start AI Automation
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
