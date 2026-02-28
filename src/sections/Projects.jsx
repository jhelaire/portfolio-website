import Section from "../components/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Personal Project */}
        <div className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">
              Tutor Scheduling Web App
            </h3>
            <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60">
              Personal
            </span>
          </div>

          <p className="mt-3 text-white/70">
            Scheduling platform built with Next.js to manage tutoring sessions and
            availability with a responsive, dynamic UI.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>• Built modular pages and components with React + Next.js routing</li>
            <li>• Implemented interactive views for session discovery and scheduling</li>
            <li>• Designed responsive layout patterns for mobile and desktop</li>
          </ul>

          <div className="mt-4 text-xs text-white/50">
            Next.js · React · TypeScript · CSS
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/jhelaire/tutor-scheduling"
              target="_blank"
              className="text-sm text-white/80 hover:text-white"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Internship Project - Spark Energy */}
        <div className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">
              Enterprise API Modernization
            </h3>
            <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60">
              Internship
            </span>
          </div>

          <p className="mt-1 text-sm text-white/60">
            Software Engineering Intern — Summer 2025
          </p>

          <p className="mt-3 text-white/70">
            Modernized legacy services by converting SOAP-based endpoints into
            RESTful APIs and improving maintainability in an enterprise environment.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>• Designed and implemented REST endpoints in JavaScript</li>
            <li>• Worked with Azure-hosted databases and API integrations</li>
            <li>• Collaborated with senior engineers to replace deprecated code paths</li>
          </ul>

          <div className="mt-4 text-xs text-white/50">
            JavaScript · Azure · SQL · REST APIs
          </div>
        </div>

        {/* Internship Project - TEPCO Solutions */}
        <div className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">
              Full-Stack Enterprise Feature Delivery
            </h3>
            <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60">
              Internship
            </span>
          </div>

          <p className="mt-1 text-sm text-white/60">
            Software Engineering Intern — Summer 2024
          </p>

          <p className="mt-3 text-white/70">
            Contributed full-stack features within a proprietary enterprise platform,
            working across UI components, backend services, and database integration.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>• Built UI functionality using JavaScript and TypeScript</li>
            <li>• Implemented backend logic in C# and interfaced with SQL data</li>
            <li>• Delivered features independently with structured team reviews</li>
          </ul>

          <div className="mt-4 text-xs text-white/50">
            TypeScript · JavaScript · C# · SQL
          </div>
        </div>
      </div>
    </Section>
  );
}