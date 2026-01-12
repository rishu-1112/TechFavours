import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceDeepDive from "@/components/services/ServiceDeepDive";
import ServiceProcessTimeline from "@/components/services/ServiceProcessTimeline";
// import TechStack from "@/components/TechStack";
import ServiceResults from "@/components/services/ServiceResults";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServiceCTA";
import Footer from "@/components/Home/Footer";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceDeepDive />
      <ServiceProcessTimeline />
      {/* <TechStack /> */}
      <ServiceResults />
      <ServicesFAQ /> 
      <ServicesCTA />
      <Footer/>
    </>
  );
}
