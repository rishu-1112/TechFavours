import { useEffect } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

export default function MobileAppDevelopment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO META */}
      
        <title>
          Mobile App Development Services | Android & iOS App Development
        </title>
        <meta
          name="description"
          content="Professional mobile app development services. We build high-performance Android and iOS apps with smooth UX, secure backends, and scalable architecture."
        />
        <meta
          name="keywords"
          content="Mobile App Development, Android App Development, iOS App Development, Cross Platform App, Startup App Development"
        />
      

      <section className="bg-[#0b0b10] text-white">
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Mobile App Development
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-lg leading-relaxed">
            We design and develop high-quality mobile applications for Android
            and iOS that are fast, reliable, secure, and built to scale with your
            business.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <RainbowButton
              className="px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Build My App
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

        {/* WHAT IS MOBILE APP DEVELOPMENT */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-6">
            What is Mobile App Development?
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            Mobile app development is the process of designing and building
            applications that run on smartphones and tablets. These apps allow
            businesses to engage users directly, provide services, collect data,
            and create long-term customer relationships.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed max-w-4xl">
            Whether you are launching a startup app, building an internal
            business tool, or expanding your digital presence, a well-built
            mobile app can significantly increase user engagement and revenue.
          </p>
        </div>

        {/* WHAT WE BUILD */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            What We Build for Mobile Apps
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="Android & iOS Applications"
              desc="We build mobile apps that work seamlessly on both Android and iOS using modern cross-platform technologies."
            />

            <Card
              title="Startup & MVP Apps"
              desc="Quickly launch your app idea with an MVP designed to validate your concept and attract early users."
            />

            <Card
              title="Business & Enterprise Apps"
              desc="Internal and customer-facing apps that streamline operations, improve efficiency, and support growth."
            />

            <Card
              title="API & Backend Integration"
              desc="Secure backend systems and APIs to handle authentication, data storage, notifications, and real-time updates."
            />

            <Card
              title="Performance Optimization"
              desc="Apps optimized for speed, battery usage, and smooth performance across devices."
            />

            <Card
              title="App Store Deployment"
              desc="We handle Play Store and App Store submission, compliance, and release management."
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-12">
            Our Mobile App Development Process
          </h2>

          <div className="space-y-10">
            <Step
              number="01"
              title="Idea Validation & Planning"
              desc="We understand your idea, users, and goals to plan the right app features and architecture."
            />

            <Step
              number="02"
              title="UI / UX Design"
              desc="We design clean, intuitive interfaces focused on usability and user engagement."
            />

            <Step
              number="03"
              title="App Development"
              desc="We develop the app using modern frameworks with clean code and scalable structure."
            />

            <Step
              number="04"
              title="Testing & Quality Assurance"
              desc="We test the app on multiple devices, screen sizes, and usage scenarios."
            />

            <Step
              number="05"
              title="Launch & Post-Launch Support"
              desc="We publish your app and provide updates, improvements, and long-term maintenance."
            />
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Who This Service is For
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-white/70">
            <li>✔ Startup founders launching mobile apps</li>
            <li>✔ Businesses expanding to mobile platforms</li>
            <li>✔ Companies building internal mobile tools</li>
            <li>✔ Entrepreneurs validating new app ideas</li>
            <li>✔ Organizations improving customer engagement</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-semibold mb-10">
            Why Choose TechFavours for Mobile App Development
          </h2>

          <ul className="space-y-4 text-white/70 max-w-4xl">
            <li>✔ Cross-platform expertise (Android & iOS)</li>
            <li>✔ Startup-friendly and scalable approach</li>
            <li>✔ Clean, maintainable code</li>
            <li>✔ Secure backend integrations</li>
            <li>✔ Long-term app support & growth</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Build Your Mobile App?
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Let’s turn your app idea into a powerful mobile experience that users
            love and businesses trust.
          </p>

          <div className="mt-10">
            <RainbowButton
              className="px-10 py-4"
              onClick={() => navigate("/contact")}
            >
              Start Mobile App Development
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
