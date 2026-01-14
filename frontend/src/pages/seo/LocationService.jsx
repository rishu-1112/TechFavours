import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { locations } from "@/data/locations";
import ServicesCTA from "@/components/services/ServiceCTA";

export default function LocationService() {
  const { city } = useParams();
  const data = locations.find((l) => l.slug === city);

  if (!data) return null;

  return (
    <>
      <SEO
        title={`Web Development Company in ${data.city} | TechFavours`}
        description={`TechFavours is a leading web development, SaaS and AI automation company in ${data.city}, delivering scalable and secure digital solutions.`}
        url={`https://www.techfavours.com/web-development-company/${data.slug}`}
      />

      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h1 className="section-title">
          Web Development Company in {data.city}
        </h1>

        <p className="section-subtitle mt-6 max-w-3xl">
          TechFavours helps startups and enterprises in {data.city}
          build high-performance websites, SaaS platforms,
          AI automation systems, and scalable cloud solutions.
        </p>

        <ul className="mt-10 space-y-3 text-white/70">
          <li>✔ Custom web & SaaS development</li>
          <li>✔ AI automation & workflow optimization</li>
          <li>✔ SEO-optimized & secure architecture</li>
          <li>✔ Ongoing website management & support</li>
        </ul>
      </section>

      <ServicesCTA />
    </>
  );
}
