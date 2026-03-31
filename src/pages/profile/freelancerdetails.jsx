
import { UseStep } from "../../hooks/stepcontext";
import { useNavigate } from "react-router-dom";
import TextArea from "../../components/forms/textArea";
import SelectField from "../../components/forms/selectfield";
import Input from "../../components/forms/input";
// ── Main Component ──
export default function FreelancerDetails({ compact = false }) {
  const { setCurrentStep } = UseStep();
  const navigate = useNavigate();

  const handleNext = () => {
    // advance step indicator
    navigate("/freelancer-dashboard"); // navigate to next page
  };
  const handleBack = () => {
    setCurrentStep(2); // advance step indicator
    navigate("/profile-setup"); // navigate to next page
  };

  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Project Manager",
    "Data Analyst",
    "DevOps Engineer",
  ];
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Figma",
    "TypeScript",
    "AWS",
  ];
  const experience = [
    "Less than 1 year",
    "1–2 years",
    "3–5 years",
    "5–10 years",
    "10+ years",
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Heading */}
      <h2
        className={`text-white font-bold leading-none ${compact ? "text-sm" : "text-lg"}`}
      >
        {compact ? "Freelancers" : "Freelancer"}
      </h2>

      {/* Fields */}
      <div className="flex flex-col gap-3">
        <SelectField
          placeholder="Job Title"
          options={jobTitles}
          compact={compact}
        />
        <SelectField
          placeholder="Years Of Experience"
          options={experience}
          compact={compact}
        />
        <TextArea
          placeholder="Tell Us About Your Experience And What You Offer"
          compact={compact}
        />
        <SelectField placeholder="Skills" options={skills} compact={compact} />
        <Input placeholder="Portfolio Links" compact={compact} />
      </div>

      {/* Buttons */}
      {compact ? (
        <div className="flex gap-2 mt-1">
          <button
            onClick={() => setCurrentStep(2)}
            className="flex-1 bg-transparent border border-[#3a3b44] hover:border-[#555] text-white font-semibold rounded-xl py-[10px] text-sm transition-all"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-xl py-[10px] text-sm transition-all shadow-[0_4px_18px_rgba(109,40,217,0.5)]"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="flex gap-3 mt-1">
          <button
            onClick={handleBack}
            className="flex-1 bg-transparent border border-[#3a3b44] hover:border-[#555] text-white font-semibold rounded-xl py-[12px] text-sm transition-all"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-xl py-[12px] text-sm transition-all shadow-[0_4px_18px_rgba(109,40,217,0.5)]"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
