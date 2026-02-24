import { useEffect, useState } from "react";
import Container from "./Container";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Involvement", href: "#involvement" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-white">
          Jordan Helaire
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white hover:border-white/40"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-white/10">
          <Container className="py-3">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/80 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="mt-2 inline-flex w-fit rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white hover:border-white/40"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}