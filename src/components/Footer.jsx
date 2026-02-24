import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  // For a class rubric, a manual "last updated" is safest.
  // Update this string when you deploy.
  const lastUpdated = "2026-02-23";

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <div>© {year} Jordan Helaire</div>
        <div>Last updated: {lastUpdated}</div>
        <div className="flex gap-4">
          <a className="hover:text-white" href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-white" href="mailto:YOUR_EMAIL@example.com">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}