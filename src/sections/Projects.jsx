import Section from "../components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built recently."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-5 text-white/80">
          Project Card Placeholder
        </div>
        <div className="rounded-2xl border border-white/10 p-5 text-white/80">
          Project Card Placeholder
        </div>
      </div>
    </Section>
  );
}