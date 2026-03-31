import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Rectangle.png";

const NAV_LINKS = [
  { label: "Jobs", href: "/jobs" },
  { label: "Gigs", href: "/gigs" },
  { label: "Company", href: "/company" },
];

const ABOUT_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Faq", href: "/faq" },
  { label: "Contact us", href: "/contact" },
 
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setAboutOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-[#17191F] border-b border-white/5">
      <nav className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenus} className="flex items-center shrink-0 select-none">
          <img
            src={img1}
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={closeMenus}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              {label}
            </Link>
          ))}

          {/* About dropdown */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen((o) => !o)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              About
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50">
                {ABOUT_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    onClick={closeMenus}
                    className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/notifications"
            className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Link>

          <Link
            to="/intro"
            className="px-5 py-2 text-sm font-medium text-white border border-violet-500 rounded-full hover:bg-violet-500/10 transition-all duration-150"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={closeMenus}
              className="px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {label}
            </Link>
          ))}

          {ABOUT_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={closeMenus}
              className="px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-white/5 mt-2 pt-3">
            <Link
              to="/signup"
              onClick={closeMenus}
              className="block text-center px-5 py-2.5 text-sm font-medium text-white border border-violet-500 rounded-full hover:bg-violet-500/10 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}