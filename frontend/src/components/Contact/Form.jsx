import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const res = await fetch("https://api.techfavours.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <section className="relative px-6 max-w-4xl mx-auto">
      {/* 🌈 NEON FRAME */}
      <div className="relative rounded-2xl p-[1.5px] neon-frame">

        {/* 🧊 GLASS MASK (BLOCKS NEON INSIDE) */}
        <div className="rounded-2xl bg-[#0b0b10]">

          <GlassCard className="p-10 rounded-2xl bg-[#0b0b10]/90 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Start Your Project
            </h2>

            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="input"
                />
              </div>

              <input
                name="company"
                placeholder="Company / Startup (optional)"
                className="input"
              />

              <select name="service" className="input" required>
                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>SaaS Development</option>
                <option>AI Automation</option>
                <option>Website Management</option>
                <option>Mobile App Development</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project goals"
                className="input"
                required
              />

              <RainbowButton
                disabled={loading}
                className="w-full py-4 text-base"
              >
                {loading ? "Submitting..." : "Request Free Consultation"}
              </RainbowButton>

              {success && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Thanks! We’ll contact you within 24 hours.
                </p>
              )}

              <p className="text-xs text-white/50 text-center">
                We usually respond within 24 hours. No spam. No obligation.
              </p>
            </form>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
