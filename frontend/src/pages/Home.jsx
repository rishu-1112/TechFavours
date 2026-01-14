import Hero from "../components/Home/Hero";
import GlobeBridge from "../components/Home/GlobeBridge";
import ServicesSection from "../components/Home/ServiceSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProcessSection from "@/components/Home/ProcessSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import  TechStack  from "@/components/Home/TechStack";
import CTASection from "@/components/Home/CTAsection";
import Footer from "@/components/Home/Footer"
import SEO from "@/components/SEO";
export default function Home() {
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


      <Hero />
      {/* <GlobeBridge /> */}
      <ServicesSection />
      <WhyChooseUs/>
      <ProcessSection/>
      <FeaturedProjects/>
      <TestimonialsSection/>
      <TechStack/>
      <CTASection/>
      <Footer/>
    </>
  );
}
