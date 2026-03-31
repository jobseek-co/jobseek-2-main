import React, { useState } from "react";
import { UseStep } from "../../hooks/stepcontext";
import { useNavigate } from "react-router-dom";

// ── Dropdown Select ──
function SelectField({ placeholder, options = [], compact = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`
          w-full bg-[#1c1d26] border rounded-xl
          text-left flex items-center justify-between
          transition-all duration-200 focus:outline-none
          ${open ? "border-violet-500 ring-1 ring-violet-500/20" : "border-[#2b2c37]"}
          ${compact ? "px-3 py-[9px] text-[12px]" : "px-4 py-[13px] text-sm"}
        `}
      >
        <span className={selected ? "text-white" : "text-[#4a4b57]"}>
          {selected || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#555] transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
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
              className={`
                cursor-pointer text-[#ccc] hover:bg-violet-600/20 hover:text-white
                transition-colors
                ${compact ? "px-3 py-2 text-[12px]" : "px-4 py-2.5 text-sm"}
              `}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Component ──
export default function ClientRecruiter({ compact = false }) {
  const { setCurrentStep } = UseStep();
    const navigate = useNavigate();

    const HandleNext = () => {
         navigate("/client-dashboard"); // navigate to next page
       }
    const handleBack = () => {
        setCurrentStep(2) // advance step indicator
         navigate("/profile-setup"); // navigate to next page
       }
  const companies = ["Startup", "SME", "Enterprise", "Agency", "Non-profit", "Government"];
  const industries = ["Technology", "Finance", "Healthcare", "Education", "Retail", "Media", "Real Estate", "Manufacturing"];

  return (
    <div className="w-full flex flex-col gap-8  ">

      {/* Heading */}
      <h2 className={`text-white font-bold leading-none ${compact ? "text-sm" : "text-lg"}`}>
        Client / Recruiter
      </h2>

      {/* Fields */}
      <div className="flex flex-col gap-4">
        <SelectField placeholder="Company Name" options={companies}  compact={compact} />
        <SelectField placeholder="Industry"     options={industries} compact={compact} />
      </div>

      {/* Buttons */}
      <div className={`flex gap-3 ${compact ? "mt-1" : "mt-2"}`}>
        <button
          onClick={handleBack}
          className={`
            flex-1 bg-transparent border border-[#3a3b44] hover:border-[#555]
            text-white font-semibold rounded-full transition-all
            ${compact ? "py-[10px] text-sm" : "py-[12px] text-sm"}
          `}
        >
          Back
        </button>
        <button
          onClick={HandleNext}
          className={`
            flex-1 bg-violet-700 hover:bg-violet-600 text-white font-semibold
            rounded-full transition-all shadow-[0_4px_18px_rgba(109,40,217,0.5)]
            ${compact ? "py-[10px] text-sm" : "py-[12px] text-sm"}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}