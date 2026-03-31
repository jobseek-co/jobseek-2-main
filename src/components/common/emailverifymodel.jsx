import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/undraw_mail_sent_re_0ofv 1.png";
function EmailVerifyModal({ onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState("check"); // "check" | "otp"
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [countdown, setCountdown] = useState(20);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (step !== "otp") return;
    if (countdown <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, step]);

  const handleResend = () => {
    if (!canResend) return;
    setCountdown(20);
    setCanResend(false);
    setOtp(["", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleOtpChange = (val, idx) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp];
    next[idx] = val.slice(-1);
    setOtp(next);
    if (val && idx < 4) inputRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 5);
    if (!text) return;
    e.preventDefault();
    const next = [...otp];
    text.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputRefs.current[Math.min(text.length, 4)]?.focus();
  };

  const handleSubmit = () => {
    if (otp.some((d) => !d)) return;
    // TODO: validate OTP with your API here
    navigate("/verify-success");
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#13131a] border border-white/10 rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
      
        {/* ── STEP 1: Check Your E-mail ── */}
        {step === "check" && (
          <div className="flex flex-col items-center text-center px-8 py-10 gap-4">
            <h2 className="text-[#6857F6] text-lg md:text-xl font-bold">
              Check Your E-mail
            </h2>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
              Please check your email for a verification code to continue —{" "}
              <button
                className="text-[#A549E2] hover:underline transition-colors"
                onClick={handleResend}
              >
                Resend
              </button>
            </p>

            {/* Envelope SVG */}
            <div className="relative my-4 w-36 h-28 md:w-44 md:h-32">
             <img src={img1} alt="" className="" />
            </div>

            <button
              onClick={() => setStep("otp")}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#6857F6] to-[#A549E2] text-white text-sm font-semibold hover:opacity-90 transition-opacity mt-1"
            >
              Continue
            </button>
          </div>
        )}

        {/* ── STEP 2: OTP ── */}
        {step === "otp" && (
          <div className="flex flex-col items-center text-center px-8 py-10 gap-5">
            <h2 className="text-[#6857F6] text-lg md:text-xl font-bold">
              Confirm E-mail
            </h2>

            <div className="flex gap-2 sm:gap-3 mt-1" onPaste={handleOtpPaste}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                  className="
                    w-11 h-12 sm:w-12 sm:h-14
                    bg-transparent border border-[#6857F6]/60 rounded-xl
                    text-white text-lg font-bold text-center
                    outline-none focus:border-[#A549E2] focus:bg-[#6857F6]/10
                    transition-colors caret-[#A549E2]
                  "
                />
              ))}
            </div>

            <p className="text-white/40 text-xs">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-[#6857F6] hover:text-[#A549E2] transition-colors font-medium"
                >
                  Resend code
                </button>
              ) : (
                <>Send code again {pad(Math.floor(countdown / 60))}:{pad(countdown % 60)}</>
              )}
            </p>

            <button
              onClick={handleSubmit}
              disabled={otp.some((d) => !d)}
              className="
                w-full py-3 rounded-full
                bg-gradient-to-r from-[#6857F6] to-[#A549E2]
                text-white text-sm font-semibold
                hover:opacity-90 transition-opacity
                disabled:opacity-40 disabled:cursor-not-allowed mt-1
              "
            >
              Submit
            </button>
          </div>
        )}

        {/* Bottom accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6857F6]/30 to-transparent" />
      </div>
    </div>
  );
}

export default EmailVerifyModal;