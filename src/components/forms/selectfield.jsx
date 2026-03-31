import { useState } from "react";
export default function SelectField({ placeholder, options = [], compact = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

    
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`
          w-full bg-[#1c1d26] border border-[#2b2c37] rounded-xl
          text-left flex items-center justify-between
          transition-all duration-200
          focus:outline-none focus:border-violet-500
          ${open ? "border-violet-500 ring-1 ring-violet-500/20" : ""}
          ${compact ? "px-3 py-[9px] text-[12px]" : "px-4 py-[13px] text-sm"}
        `}
      >
        <span className={selected ? "text-white" : "text-[#4a4b57]"}>
          {selected || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#555] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 w-full mt-1 bg-[#1e1f28] border border-[#2b2c37] rounded-xl overflow-hidden shadow-xl">
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { setSelected(opt); setOpen(false); }}
              className="px-4 py-2.5 text-sm text-[#ccc] hover:bg-violet-600/20 hover:text-white cursor-pointer transition-colors"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
