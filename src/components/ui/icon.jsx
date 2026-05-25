import img1 from "../../assets/JOOB SEEK.png";
// ── Icons ─────────────────────────────────────────────────────────────────────
export const Icon = ({ d, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

export const Logo = ({ iconOnly = false, className = "" }) => {
  const logoSizeClasses = iconOnly ? "h-6 md:h-7" : "h-8 md:h-10 lg:h-12";

  return (
    <div
      className={`font-mono font-black text-lg tracking-tight text-white ${className}`}
    >
      <img
        src={img1}
        alt="JOOB SEEK"
        className={`${logoSizeClasses} w-auto max-w-full object-contain`}
      />
    </div>
  );
};
