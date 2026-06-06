import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Car", href: "/the-car" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

function IconBtn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
      style={{ color: "#071A2F" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#FFB000", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[72px] gap-10">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 mr-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs tracking-tight"
              style={{ background: "#0047AB" }}
            >
              UPT
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: "#071A2F" }}>
              Racing
            </span>
          </a>

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex items-stretch h-full flex-1 justify-start gap-1">
            {links.map((link) => {
              const active = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative flex items-center px-4 text-sm font-medium transition-colors group"
                  style={{ color: "#071A2F", fontWeight: active ? 700 : 500 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full transition-opacity"
                    style={{
                      background: "#071A2F",
                      opacity: active ? 1 : 0,
                    }}
                  />
                  {/* Hover underline */}
                  {!active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full opacity-0 group-hover:opacity-30 transition-opacity"
                      style={{ background: "#071A2F" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-1 shrink-0 ml-auto">
            {/* Search */}
            <IconBtn label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
            </IconBtn>

            {/* Divider */}
            <div className="w-px h-6 mx-2" style={{ background: "#DDE3EA" }} />

            {/* Join Us — outlined pill */}
            <a
              href="/join"
              className="px-5 py-2 text-sm font-semibold rounded-full border-2 transition-colors mr-2"
              style={{ borderColor: "#0047AB", color: "#0047AB" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#EAF2FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Join Us
            </a>

            {/* Join Us — filled pill (primary CTA) */}
            <a
              href="/join"
              className="px-5 py-2 text-sm font-semibold rounded-full text-white transition-opacity hover:opacity-90"
              style={{ background: "#0047AB" }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 rounded-md"
            style={{ color: "#071A2F" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-5 pt-2"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#FFB000" }}
        >
          {links.map((link) => {
            const active = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center px-3 py-3 text-sm font-medium rounded-lg mb-0.5 transition-colors"
                style={{
                  color: "#071A2F",
                  fontWeight: active ? 700 : 500,
                  background: active ? "rgba(0,0,0,0.10)" : "transparent",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex gap-3 mt-4 px-3">
            <a
              href="/join"
              className="flex-1 text-center py-2.5 text-sm font-semibold rounded-full border-2"
              style={{ borderColor: "#0047AB", color: "#0047AB" }}
            >
              Join Us
            </a>
            <a
              href="/join"
              className="flex-1 text-center py-2.5 text-sm font-semibold rounded-full text-white"
              style={{ background: "#0047AB" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
