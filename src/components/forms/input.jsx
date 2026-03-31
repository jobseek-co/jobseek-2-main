import { useState } from "react";
// ── Plain Input ──
export default function Input({ placeholder, compact = false }) {
  const [, setFocus] = useState(false);
  return (
    <input
      type="text"
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={`
        w-full bg-[#1c1d26] border border-[#2b2c37] rounded-xl
        text-white placeholder-[#4a4b57]
        focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20
        transition-all duration-200
        ${compact ? "px-3 py-[9px] text-[12px]" : "px-4 py-[13px] text-sm"}
      `}
    />
  );
}