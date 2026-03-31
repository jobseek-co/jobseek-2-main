import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseStep } from "../../hooks/stepcontext";

export default function ProfessionalDetails({ compact = false }) {
  const { setCurrentStep } = UseStep();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = ["Freelancer", "Client / Recruiter"];

  const handleBack = () => {
    setCurrentStep(1);
    navigate("/profile-info");
  };

  const handleNext = () => {
    if (!selected) return; // guard: nothing selected yet

    setCurrentStep(3);

    if (selected === "Freelancer") {
      navigate("/profile/next-step");
    } else {
      navigate("/profile/client-details");
    }
  };

  return (
    <div className="w-full flex flex-col gap-10">

      {/* Heading */}
      <h2 className={`text-white font-bold leading-none ${compact ? "text-sm" : "text-lg"}`}>
        Professional Details
      </h2>

      {/* Option Buttons */}
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`
              w-full text-center rounded-full border transition-all duration-200 font-medium cursor-pointer
              ${compact ? "py-[9px] text-xs" : "py-[13px] text-sm"}
              ${selected === opt
                ? "bg-violet-700/30 border-violet-500 text-white shadow-[0_0_0_1px_rgba(124,58,237,0.4)]"
                : "bg-transparent border-violet-600/70 text-[#ccc] hover:border-violet-400 hover:text-white"
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Buttons */}
      {compact ? (
        <button
          onClick={handleNext}
          disabled={!selected}
          className={`
            w-full text-white font-semibold rounded-xl py-[10px] text-sm transition-all
            ${selected
              ? "bg-violet-700 hover:bg-violet-600 shadow-[0_4px_18px_rgba(109,40,217,0.5)] cursor-pointer"
              : "bg-violet-700/40 cursor-not-allowed opacity-50"
            }
          `}
        >
          Next
        </button>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="flex-1 bg-transparent border border-[#3a3b44] hover:border-[#555] text-white font-semibold rounded-xl py-[12px] text-sm transition-all"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`
              flex-1 text-white font-semibold rounded-xl py-[12px] text-sm transition-all
              ${selected
                ? "bg-violet-700 hover:bg-violet-600 shadow-[0_4px_18px_rgba(109,40,217,0.5)] cursor-pointer"
                : "bg-violet-700/40 cursor-not-allowed opacity-50"
              }
            `}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}