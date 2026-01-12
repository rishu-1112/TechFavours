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
export default function Home() {
  return (
    <>
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
