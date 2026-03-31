import { UseStep } from "../../hooks/stepcontext";
// ── Step Indicator ──
// Renders all completed+current steps as purple, future steps as grey.
// Groups: active steps on left, future steps on right, connected by a line.
const TOTAL_STEPS = 3;
function StepIndicator({ compact = false }) {
  const { currentStep } = UseStep();

  const activeSize   = compact ? "w-[22px] h-[22px] text-[10px]" : "w-[34px] h-[34px] text-sm";
  const inactiveSize = compact ? "w-[20px] h-[20px] text-[9px]"  : "w-[28px] h-[28px] text-xs";
  const lineWidth    = compact ? "w-[28px]" : "w-[90px]";

  // Steps 1..currentStep are "done/active", rest are future
  const activeSteps  = Array.from({ length: currentStep }, (_, i) => i + 1);
  const futureSteps  = Array.from({ length: TOTAL_STEPS - currentStep }, (_, i) => currentStep + 1 + i);

  return (
    <div className="flex items-center gap-0">
      {/* Active steps group */}
      <div className="flex items-center gap-1">
        {activeSteps.map(n => (
          <div
            key={n}
            className={`
              flex items-center justify-center rounded-full font-bold text-white
              bg-violet-600 shadow-[0_0_12px_rgba(124,58,237,0.6)]
              ${activeSize}
            `}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Connecting line — only show if there are future steps */}
      {futureSteps.length > 0 && (
        <div className={`bg-violet-600/50 h-px ${lineWidth} mx-1`} />
      )}

      {/* Future steps group */}
      {futureSteps.length > 0 && (
        <div className="flex items-center gap-1">
          {futureSteps.map(n => (
            <div
              key={n}
              className={`
                flex items-center justify-center rounded-full font-semibold
                bg-[#1e1f27] border border-[#35363f] text-[#555]
                ${inactiveSize}
              `}
            >
              {n}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default StepIndicator;