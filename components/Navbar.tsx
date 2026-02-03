export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-base/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold text-ink">
          Lewis Whitehill
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a
            href="#projects"
            className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Projects
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            About
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
