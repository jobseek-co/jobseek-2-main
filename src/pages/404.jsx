import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/JOOB SEEK.png";
import img1 from "../assets/ILL.png";
import img3 from "../assets/ghost.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-[#0D0E11] flex items-center justify-center">
      <div className="relative w-full max-w-[1400px] min-h-screen p-2 sm:p-3 md:p-4">
        {/* Card */}
        <div className="relative w-full min-h-screen rounded-2xl overflow-hidden bg-[#0D0E11] border-0 md:bg-[linear-gradient(rgba(104,87,246,0.05)_0%,rgba(165,73,226,0.05)_100%),linear-gradient(90deg,rgba(27,27,27,0.5)_0%,rgba(27,27,27,0.5)_100%)] border border-white/5 flex flex-col">
          {/* ── Logo ── */}
          <div className="flex-shrink-0 px-6 pt-6 md:px-10 md:pt-8">
            <img
              src={img2}
              alt="JOOB SEEK"
              className="w-28 md:w-36 object-contain"
            />
          </div>

          {/* ── Illustration top-right (hidden on mobile) ── */}
          <div className="hidden md:block absolute top-0 right-0 pointer-events-none">
            <img
              src={img1}
              alt=""
              className="w-40 md:w-56 lg:w-64 object-contain opacity-80"
            />
          </div>

          {/* ── Main Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pb-16 md:pb-10 gap-4 md:gap-5 max-w-lg mx-auto md:mx-0  md:text-left"
          >
            {/* Error label */}
            <p className="text-[#6857F6] text-xs md:text-sm font-semibold tracking-wide">
              Error 404
            </p>

            {/* Heading */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hey Buddy
            </h1>

            {/* Subtext */}
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              We can't seem to find the page
              <br className="hidden sm:block" />
              you are looking for.
            </p>

            {/* Button */}
            <div className="mt-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => navigate("/")}
                className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-colors"
              >
                Go Home
              </motion.button>
            </div>
          </motion.div>

          {/* ── Ghost illustration (hidden on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          >
            <div className="relative flex flex-col items-center">
              <img src={img3} alt="" className="w-72 lg:w-80 xl:w-96" />

              {/* Glow shadow */}
              <div className="w-24 md:w-32 h-4 md:h-5 rounded-full bg-[#6857F6]/40 blur-xl -mt-4" />
            </div>
          </motion.div>

          {/* ── Footer ── */}
          <div className="flex-shrink-0 flex justify-center pb-5 md:pb-7">
            <p className="text-white/25 text-xs text-center">
              Contact Us &nbsp;|&nbsp; info@company.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
