import AboutHero from "@/components/About/Hero";
import WhoWeAre from "@/components/About/WhoWeAre";
import WhatMakesUsDifferent from "@/components/About/WhatMakesUsDiffrent";
import HowWeWork from "@/components/about/HowWeWork";
import { WhoWeWorkWith } from "@/components/services/WhoWeWorkWith";
import ProofAndTrust from "@/components/About/ProofAndTrust";
import AboutCTA from "@/components/about/AboutCTA";
import MissionVisionValues from "@/components/About/MissionVisionValues";
import AboutExperience from "@/components/About/AboutExperience"
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
    <SEO
  title="TechFavours | Web Development, SaaS & AI Automation Company"
  description="TechFavours is a performance-driven web development, SaaS, and AI automation company helping startups and enterprises build scalable, secure, and high-performing digital products."
  url="https://www.techfavours.com/"
  image="https://www.techfavours.com/og/home.png"
  keywords="
    web development company,
    SaaS development company,
    AI automation services,
    startup tech partner,
    enterprise web solutions,
    website management services
  "
  schema={{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechFavours",
    "url": "https://www.techfavours.com",
    "logo": "https://www.techfavours.com/logo.png",
    "description":
      "TechFavours is a digital product development company specializing in web development, SaaS platforms, AI automation, cloud infrastructure, and long-term website management.",
    "foundingLocation": {
      "@type": "Place",
      "name": "India"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "Web Development",
      "SaaS Development",
      "AI Automation",
      "Website Management",
      "Mobile App Development",
      "UI UX Design",
      "Cloud Infrastructure",
      "Performance Optimization",
      "SEO Optimization"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/techfavours",
      "https://github.com/techfavours"
    ]
  }}
/>

      <AboutHero />
      <WhoWeAre />
      <AboutExperience/>
      <MissionVisionValues/>
      <WhatMakesUsDifferent />
      <HowWeWork />
      <WhoWeWorkWith />
      <ProofAndTrust />
      <AboutCTA />
    </>
  );
}
