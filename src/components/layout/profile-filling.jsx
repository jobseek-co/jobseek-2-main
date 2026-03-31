import React from "react";
import { Outlet } from "react-router-dom";
import { StepProvider } from "../../hooks/stepcontext";
import CommunityCard from "../common/communityCard";
import StepIndicator from "../ui/stepindecator";

import { Logo } from "../ui/icon";




// ── Inner layout (consumes StepContext) ──
function ProfileFillingInner() {
  return (
    <main className="w-full min-h-screen bg-[#0D0E11] flex items-center justify-center">
      <div className="relative flex w-full min-h-screen max-w-[1400px] p-2 sm:p-3 md:p-4 gap-3 md:gap-4">
        {/* ── LEFT PANEL ── */}
        <div
          className="
          w-full md:w-[420px] lg:w-[460px] xl:w-[520px] flex-shrink-0
          flex flex-col rounded-2xl
            md:bg-[linear-gradient(rgba(104,87,246,0.05)_0%,rgba(165,73,226,0.05)_100%),linear-gradient(90deg,rgba(27,27,27,0.5)_0%,rgba(27,27,27,0.5)_100%)]  relative overflow-hidden
        "
        >
          {/* Logo */}
          <div className="px-7 pt-7">
            <Logo className="text-xl" />
          </div>

          {/* Mobile: logo → step indicator → form */}
          <div className="flex flex-col md:hidden px-6 pt-5 pb-2">
            <div className="flex items-center justify-between">
              {/* Steps shown inline next to logo on mobile */}
              <StepIndicator compact />
            </div>
          </div>
          <div className="flex-1 flex flex-col md:hidden px-6 py-4">
            <Outlet />
          </div>

          <div className="hidden md:block flex-1" />

          {/* Community card bottom-left, desktop only */}
          <div className="hidden md:block absolute bottom-8 left-7">
            <CommunityCard />
          </div>
        </div>

        {/* ── RIGHT PANEL — desktop only ── */}
        <div className="hidden md:flex flex-1 min-w-0 flex-col justify-center items-start px-10 lg:px-16 xl:px-20 rounded-2xl overflow-hidden">
          <div className="w-full max-w-[600px] flex flex-col gap-8 ">
            {/* Step indicator lives here on desktop */}
            <StepIndicator compact={false} />
            {/* Page content */}
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

// ── Default export wraps with StepProvider ──
export default function ProfileFilling() {
  return (
    <StepProvider>
      <ProfileFillingInner />
    </StepProvider>
  );
}
