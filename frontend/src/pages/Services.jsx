import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceDeepDive from "@/components/services/ServiceDeepDive";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
import TechStack from "@/components/services/TechStack";
import ServiceResults from "@/components/services/ServiceResults";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/Home/Footer";
import { TechCaseMapping } from "@/components/services/TechCaseMap";
import { TechComparison } from "@/components/services/TechComparison";
import { SecurityCompliance } from "@/components/services/TechComparison";
import { CredibilityStrip } from "@/components/services/TechComparison";
import { AIAutomationShowcase } from "@/components/services/AIautomationShowcase";
import { WhoWeWorkWith } from "@/components/services/WhoWeWorkWith";
import { ROIPricing } from "@/components/services/ROIpricing";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import SEO from "@/components/SEO";

export default function Services() {
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


      <ServicesHero />
      <ServicesGrid />
      <ServiceDeepDive />
      <ServiceProcessTimeline />
      <TechStack />
      <TechCaseMapping/>
      <TechComparison/>
      <SecurityCompliance/>
      <ServiceResults />
      <WhoWeWorkWith/>
      <ROIPricing/>
      <AIAutomationShowcase/>
      <TestimonialsSection/>
      <ServicesFAQ /> 
      <ServicesCTA />
      <Footer/>
    </>
  );
}
