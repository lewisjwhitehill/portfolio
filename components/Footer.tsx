const socials = [
  {
    label: "GitHub",
    href: "https://github.com/lewiswhitehill",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.374 6.839 9.732.5.095.683-.222.683-.494 0-.244-.01-1.053-.014-1.912-2.782.63-3.368-1.229-3.368-1.229-.455-1.183-1.112-1.498-1.112-1.498-.91-.64.069-.627.069-.627 1.006.072 1.536 1.057 1.536 1.057.894 1.57 2.345 1.117 2.918.854.09-.67.35-1.117.636-1.374-2.22-.263-4.555-1.14-4.555-5.07 0-1.12.388-2.035 1.026-2.752-.103-.263-.445-1.321.098-2.753 0 0 .84-.274 2.75 1.051.8-.23 1.66-.345 2.514-.35.855.005 1.715.12 2.516.35 1.909-1.325 2.748-1.051 2.748-1.051.544 1.432.202 2.49.1 2.753.64.717 1.024 1.632 1.024 2.752 0 3.94-2.338 4.804-4.565 5.063.36.319.682.945.682 1.905 0 1.375-.013 2.483-.013 2.82 0 .274.18.594.688.493C19.138 20.624 22 16.781 22 12.253 22 6.59 17.523 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lewiswhitehill",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.25 18H5.5V9h2.75v9ZM6.88 7.73a1.59 1.59 0 1 1 0-3.18 1.59 1.59 0 0 1 0 3.18ZM18.5 18h-2.75v-4.48c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V18H9.77V9h2.63v1.23h.04c.37-.7 1.28-1.44 2.64-1.44 2.82 0 3.34 1.9 3.34 4.37V18Z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center text-xs text-slate-300 sm:px-6 sm:text-sm">
        <p>© {year} Lewis Whitehill</p>
        <p>Built with Next.js & Tailwind · Deployed on Vercel</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-100 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span className="h-4 w-4">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
