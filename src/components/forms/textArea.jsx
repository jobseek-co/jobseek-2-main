import { useState } from "react";
// ── Textarea ──
export default function TextArea({ placeholder, compact = false }) {
  const [, setFocus] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rows={compact ? 3 : 5}
      className={`
        w-full bg-[#1c1d26] border border-[#2b2c37] rounded-xl
        text-white placeholder-[#4a4b57] resize-none
        focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20
        transition-all duration-200
        ${compact ? "px-3 py-[9px] text-[12px]" : "px-4 py-[13px] text-sm"}
      `}
    />
  );
}
