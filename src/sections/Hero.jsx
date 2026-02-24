import Container from "../components/Container";

export default function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <Container>
        <p className="text-white/70">Software Engineer</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Jordan Helaire
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          I build clean, reliable web apps with React and modern backend tools. Graduating soon and seeking
          full-time software engineering roles.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:border-white/40"
          >
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
}