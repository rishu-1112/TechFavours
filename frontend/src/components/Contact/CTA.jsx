import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";
export default function ContactCTA() {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 px-6 text-center">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Ready to Discuss Your Project?
      </h3>
      <RainbowButton className="px-10 py-4 text-base" onClick={()=>navigate("/contact")}>
        Book a Free Strategy Call
      </RainbowButton>
    </section>
  );
}
