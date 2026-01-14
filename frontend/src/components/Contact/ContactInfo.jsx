export default function ContactInfo() {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="font-semibold text-white">Email</h4>
          <p className="text-white/70 mt-2">hello@techfavours.com</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Location</h4>
          <p className="text-white/70 mt-2">India · Serving Worldwide</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Availability</h4>
          <p className="text-white/70 mt-2">Mon–Fri · 10am–7pm IST</p>
        </div>
      </div>
    </section>
  );
}
