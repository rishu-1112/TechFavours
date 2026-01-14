import { AuroraText } from "@/components/ui/aurora-text";

export default function WhyContactUs() {
  return (
    <section className="relative py-28 px-6 max-w-6xl mx-auto">
      <h2 className="section-title text-center">
        Why Teams Choose <AuroraText>TechFavours</AuroraText>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        <Reason title="Expert Guidance">
          Strategy-first approach backed by real-world experience.
        </Reason>
        <Reason title="Transparent Process">
          Clear timelines, honest pricing, and continuous communication.
        </Reason>
        <Reason title="Long-Term Partnership">
          We support, optimize, and scale your product after launch.
        </Reason>
      </div>
    </section>
  );
}

function Reason({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-white/70 text-sm">{children}</p>
    </div>
  );
}
