import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function VerifySuccess() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0D0E11] flex items-center justify-center">
      <div className="relative w-full max-w-[1400px] h-screen p-2 sm:p-3 md:p-4">
        {/* Card */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden  flex flex-col">
          {/* Center content */}
          <div
            className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pb-16 md:pb-10 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Animated checkmark circle */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div
                className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#6857F6]/10 animate-ping"
                style={{ animationDuration: "2.5s" }}
              />
              <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#6857F6]/15" />

              {/* Circle with checkmark */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#6857F6] to-[#A549E2] flex items-center justify-center shadow-lg shadow-[#6857F6]/40">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    style={{
                      strokeDasharray: 30,
                      strokeDashoffset: visible ? 0 : 30,
                      transition: "stroke-dashoffset 0.6s ease 0.4s",
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-2 text-center max-w-sm">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                Verified Successfully!
              </h1>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                Your email has been confirmed. You're all set to start your
                journey with Job Seek.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/profile-info")}
              className="mt-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#6857F6] to-[#A549E2] text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#6857F6]/30"
            >
              Go to Dashboard
            </button>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 flex justify-center pb-5 md:pb-7">
            <p className="text-white/25 text-xs">
              Contact Us &nbsp;|&nbsp; info@company.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VerifySuccess;
