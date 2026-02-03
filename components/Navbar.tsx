export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1a2a46]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="text-sm font-semibold text-slate-100">
          Lewis Whitehill
        </a>
        <nav className="flex items-center gap-6 text-sm text-slate-200">
          <a
            href="#projects"
            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Projects
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            About
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
