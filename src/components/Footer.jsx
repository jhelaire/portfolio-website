import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  const lastUpdated = "2026-02-23";

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <div>© {year} Jordan Helaire</div>
        <div>Last updated: {lastUpdated}</div>
        <div className="flex gap-4">
          <a className="hover:text-white" href="https://github.com/jhelaire" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/jordan-helaire-183509297" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-white" href="mailto:jmhelaire@yahoo.com">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}