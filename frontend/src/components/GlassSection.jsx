export default function GlassSection({ title, children }) {
  return (
    <section className="glass-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
