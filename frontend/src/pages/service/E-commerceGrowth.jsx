import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function EcommerceDevelopmentScaling() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          E-Commerce Development & Scaling Services | High-Converting Online Stores
        </title>
        <meta
          name="description"
          content="Professional e-commerce development and scaling services. We build secure, fast, and conversion-focused online stores designed to grow revenue."
        />
        <meta
          name="keywords"
          content="E-Commerce Development, Online Store Development, E-Commerce Scaling, Shopify Development, Payment Gateway Integration, Conversion Optimization"
        />
      

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            E-Commerce Development & Scaling
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We build and scale e-commerce platforms that convert visitors into
            customers. From store setup to performance optimization and growth,
            we create online stores designed for long-term success.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Build My Online Store
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

        {/* WHAT IS ECOMMERCE */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is E-Commerce Development?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            E-commerce development is the process of building online platforms
            where businesses can sell products or services digitally. A strong
            e-commerce system is not just a website — it’s a complete sales
            engine.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            From product listings and secure payments to order management and
            customer experience, every part of an e-commerce store must be
            optimized for trust, speed, and conversions.
          </p>
        </div>

        {/* WHAT WE BUILD */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Build for E-Commerce Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Custom E-Commerce Websites"
              desc="Fully custom online stores tailored to your brand, products, and business goals."
            />

            <Card
              title="Product & Inventory Management"
              desc="Scalable product catalogs, categories, variants, and inventory tracking."
            />

            <Card
              title="Payment Gateway Integration"
              desc="Secure payment integrations including UPI, cards, wallets, and international gateways."
            />

            <Card
              title="Checkout & Conversion Optimization"
              desc="Optimized checkout flows designed to reduce cart abandonment."
            />

            <Card
              title="Order, Shipping & Tax Systems"
              desc="Automated order management, shipping rules, and tax calculations."
            />

            <Card
              title="Analytics & Growth Tracking"
              desc="Sales dashboards, customer insights, and performance analytics."
            />
          </div>
        </div>

        {/* SCALING */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Scaling Your E-Commerce Business
          </h2>

          <p className="text-white/70 max-w-4xl leading-relaxed">
            Scaling an e-commerce business goes beyond launching a store. It
            involves improving performance, automating operations, optimizing
            conversions, and ensuring your platform can handle growing traffic
            and sales without breaking.
          </p>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70 mt-8">
            <li>✔ Performance & speed optimization</li>
            <li>✔ High-traffic handling & scalability</li>
            <li>✔ Conversion rate optimization (CRO)</li>
            <li>✔ Marketing & analytics integration</li>
            <li>✔ Automation of operations</li>
            <li>✔ Secure scaling infrastructure</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our E-Commerce Development Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Business & Product Analysis"
              desc="We understand your products, customers, competitors, and revenue goals."
            />

            <Step
              number="02"
              title="UX & Store Design"
              desc="Designing intuitive shopping experiences focused on conversions."
            />

            <Step
              number="03"
              title="Development & Integrations"
              desc="Building secure, scalable stores with payment, shipping, and analytics systems."
            />

            <Step
              number="04"
              title="Testing & Launch"
              desc="Testing checkout flows, payments, and performance before launch."
            />

            <Step
              number="05"
              title="Optimization & Growth"
              desc="Continuous improvements based on user behavior and sales data."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ New e-commerce startups</li>
            <li>✔ Growing online brands</li>
            <li>✔ Businesses moving from offline to online</li>
            <li>✔ D2C & B2C brands</li>
            <li>✔ Companies looking to scale revenue</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for E-Commerce
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Conversion-focused development</li>
            <li>✔ Secure and scalable architecture</li>
            <li>✔ Business-oriented approach</li>
            <li>✔ Transparent communication</li>
            <li>✔ Long-term growth support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Scale Your E-Commerce Business?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s build an online store that converts visitors, grows revenue,
            and scales with your business.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start E-Commerce Development
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
