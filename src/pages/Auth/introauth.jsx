// import React, { use } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Introauth() {
  useNavigate();
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/signup");
  }
  return (
    <div className="flex flex-col w-full h-full px-6 pt-8 pb-6 gap-5 md:px-8 md:pt-10 md:pb-8 md:gap-6">

      {/* ── Heading ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-3"
      >
        <h3 className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm font-semibold">
          Welcome to Job Seek
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Let's get you set up and ready to connect, collaborate, and succeed
          with secure, crypto-powered freelancing.
        </p>
      </motion.div>

      {/* ── Buttons ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col gap-2.5"
      >
        <button className="w-full py-3 px-4 rounded-full font-medium text-white text-sm border border-[#6857F6] hover:bg-[#6857F6]/20 active:bg-[#6857F6]/30 transition-colors"
         onClick={handleclick}
        >
          Sign Up As a Freelancer
        </button>
        <button className="w-full py-3 px-4 rounded-full font-medium text-white text-sm border border-[#6857F6] hover:bg-[#6857F6]/20 active:bg-[#6857F6]/30 transition-colors"
        onClick={handleclick}
        >
          Sign Up As a Client
        </button>
        <p className="text-white/70 text-xs mt-1">
          Already have an account?{" "}
          <a href="/login" className="text-[#6857F6] hover:text-[#A549E2] transition-colors font-medium">
            Log In
          </a>
        </p>
      </motion.div>

      {/* ── Spacer: pushes testimonial to very bottom on mobile ── */}
      <div className="flex-1 md:hidden" />

      {/* ── Testimonial — mobile only ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-1 md:hidden pb-2"
      >
        <p className="text-white/70 text-xs leading-relaxed">
          "Job Seek transformed my freelancing experience! With secure
          crypto payments and a global client base, I can work with
          confidence from anywhere. Highly recommended!"
        </p>
        <p className="text-white text-xs font-bold italic mt-0.5">
          Alex, Freelance Designer
        </p>
      </motion.div>

    </div>
  );
}

export default Introauth;