import { navItems } from "../../constants/freelancerdata";
import { Icon, Logo } from "../ui/icon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Sidebar = ({ active, setActive }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainItems = navItems.filter(
    (item) => item.label !== "Settings" && item.label !== "Logout"
  );
  const bottomItems = navItems.filter(
    (item) => item.label === "Settings" || item.label === "Logout"
  );

  const NavButton = ({ item, onClick }) => (
    <motion.button
      key={item.label}
      onClick={() => {
        setActive(item.label);
        if (onClick) onClick();
      }}
      whileHover={{ scale: 1.02, x: 2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg text-[13px] font-medium transition-all
        ${active === item.label
          ? "bg-violet-700/15 text-violet-400"
          : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
        }`}
    >
      <Icon d={item.icon} size={16} />
       {item.label}
      <span className="hidden lg:inline">{item.label}</span>
      {/* Show label in tooltip on md screens */}
      <span className="lg:hidden sr-only">{item.label}</span>
    </motion.button>
  );

  return (
    <>
      {/* ── Mobile Top Bar (xs–sm) ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#111318] border-b border-white/[0.06] flex items-center justify-between px-4 h-14">
        <Logo />
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-white/50 hover:text-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        />
        {/* Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 h-full w-[220px] bg-[#111318] border-r border-white/[0.06] flex flex-col"
            >
              <div className="px-5 pt-[22px] pb-4 border-b border-white/[0.06]">
                <Logo />
              </div>
              <nav className="flex flex-col gap-[2px] px-[10px] pt-2 flex-1">
                {mainItems.map((item) => (
                  <NavButton key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                ))}
              </nav>
              <nav className="flex flex-col gap-[2px] px-[10px] pb-4 border-t border-white/[0.06]">
                {bottomItems.map((item) => (
                  <NavButton key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* ── md: Icon-only sidebar ── */}
      <aside className="hidden md:flex lg:hidden w-[64px] min-w-[64px] bg-[#111318] border-r border-white/[0.06] flex-col h-screen sticky top-0 shrink-0">
        <div className="px-3 pt-[22px] pb-4 border-b border-white/[0.06] flex justify-center">
          <Logo iconOnly />
        </div>
        <nav className="flex flex-col gap-[2px] px-2 pt-2 flex-1 items-center">
          {mainItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={item.label}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all
                ${active === item.label
                  ? "bg-violet-700/15 text-violet-400"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
            >
              <Icon d={item.icon} size={18} />
              <span className="sr-only">{item.label}</span>
            </button>
          ))}
        </nav>
        <nav className="flex flex-col gap-[2px] px-2 pb-4 border-t border-white/[0.06] items-center">
          {bottomItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={item.label}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all
                ${active === item.label
                  ? "bg-violet-700/15 text-violet-400"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
            >
              <Icon d={item.icon} size={18} />
            </button>
          ))}
        </nav>
      </aside>

      {/* ── lg+: Full sidebar ── */}
      <aside className="hidden lg:flex w-[200px] min-w-[200px] bg-[#111318] border-r border-white/[0.06] flex-col h-screen sticky top-0 shrink-0">
        <div className="px-5 pt-[22px] pb-4 border-b border-white/[0.06]">
          <Logo />
        </div>
        <nav className="flex flex-col gap-[2px] px-[10px] pt-2 flex-1">
          {mainItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg text-[13px] font-medium transition-all
                ${active === item.label
                  ? "bg-violet-700/15 text-violet-400"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
            >
              <Icon d={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col gap-[2px] px-[10px] pb-4 border-t border-white/[0.06]">
          {bottomItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg text-[13px] font-medium transition-all
                ${active === item.label
                  ? "bg-violet-700/15 text-violet-400"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
            >
              <Icon d={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};