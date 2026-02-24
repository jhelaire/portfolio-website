import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}