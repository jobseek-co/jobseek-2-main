import React, { useState } from "react";
import { UseStep } from "../../hooks/stepcontext";
import { useNavigate } from "react-router-dom";

function Field({ label, name, type = "text", value, onChange, compact = false }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      className={`
        w-full bg-[#1c1d26] border border-[#2b2c37]
        text-white placeholder-[#4a4b57]
        rounded-xl
        focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20
        transition-all duration-200
        ${compact ? "px-3 py-[9px] text-[12px]" : "px-4 py-[13px] text-sm"}
      `}
    />
  );
}

export default function PersonalInfo({ compact = false }) {
  const { setCurrentStep } = UseStep();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", location: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(2); // advance step indicator
    navigate("/profile-setup"); // navigate to next page
  };

  return (
    <div className="w-full flex flex-col gap-10">

      {/* Heading */}
      <h2 className={`text-white font-bold ${compact ? "text-sm" : "text-lg"} leading-none`}>
        Personal Info
      </h2>

      {/* Fields */}
      <div className="flex flex-col gap-3">
        <Field label="First Name"   name="firstName" value={form.firstName} onChange={handleChange} compact={compact} />
        <Field label="Last Name"    name="lastName"  value={form.lastName}  onChange={handleChange} compact={compact} />
        <Field label="Phone Number" name="phone"     type="tel" value={form.phone} onChange={handleChange} compact={compact} />
        <Field label="Location"     name="location"  value={form.location}  onChange={handleChange} compact={compact} />
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`
          w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold
          rounded-xl transition-all duration-200
          shadow-[0_4px_18px_rgba(109,40,217,0.5)]
          ${compact ? "py-[10px] text-sm" : "py-[13px] text-sm"}
        `}
      >
        Next
      </button>
    </div>
  );
}