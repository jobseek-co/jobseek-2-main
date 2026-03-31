import img1 from "../../assets/Rectangle.png";
// ── Icons ─────────────────────────────────────────────────────────────────────
export  const Icon = ({ d, size = 18 }) => (
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

export  const Logo = () => (
  <div className="font-mono font-black text-lg tracking-tight text-white">
    <img src={img1} alt="" />
  </div>
);