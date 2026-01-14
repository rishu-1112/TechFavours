import ContactHero from "@/components/Contact/Hero";
import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import WhyContactUs from "@/components/Contact/ContactUS";
import ContactFAQ from "@/components/Contact/FAQ";
import ContactCTA from "@/components/Contact/CTA";
import SEO from "@/components/SEO";
import Footer from "@/components/Home/Footer";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact TechFavours | Web Development & SaaS Consulting"
        description="Get in touch with TechFavours for web development, SaaS platforms, AI automation, and long-term website management. Book a free consultation today."
        url="https://www.techfavours.com/contact"
        image="https://www.techfavours.com/og/contact.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact TechFavours",
          "url": "https://www.techfavours.com/contact",
          "about": {
            "@type": "Organization",
            "name": "TechFavours"
          }
        }}
      />

      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <WhyContactUs />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
