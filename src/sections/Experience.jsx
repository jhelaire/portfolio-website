export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>

        {/* Spark Energy */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white">
            Software Engineering Intern: Spark Energy
          </h3>
          <p className="text-sm text-white/60">Summer 2025 · Backend-Focused Role</p>

          <p className="mt-3 text-white/70">
            Worked within an enterprise energy environment supporting service
            modernization and backend system improvements.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>• Collaborated with senior engineers on system design and refactoring strategy</li>
            <li>• Engaged stakeholders to gather requirements and plan future improvements</li>
            <li>• Contributed to code reviews and maintained production-quality standards</li>
            <li>• Operated within structured enterprise workflows and version control processes</li>
          </ul>
        </div>

        {/* TEPCO Solutions */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">
            Software Engineering Intern: TEPCO Solutions
          </h3>
          <p className="text-sm text-white/60">Summer 2024 · Full-Stack Role</p>

          <p className="mt-3 text-white/70">
            Contributed to feature development within a proprietary enterprise platform,
            working across frontend and backend layers.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>• Delivered independently scoped features with team review and iteration</li>
            <li>• Worked within established QA and testing workflows</li>
            <li>• Communicated progress and tradeoffs during collaborative review sessions</li>
            <li>• Gained exposure to production-level database integration and application structure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}