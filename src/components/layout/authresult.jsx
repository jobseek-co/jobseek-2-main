import React from "react";
import { Outlet } from "react-router-dom";
import img1 from "../../assets/ILL.png";
import img2 from "../../assets/Rectangle.png";

function Authresult() {
  return (
    <main className="w-full min-h-screen bg-[#0D0E11] flex items-center justify-center">
      {/* Max-width shell */}
      <div className="relative flex w-full min-h-screen  xl:min-h-[900px] 2xl:min-h-[800px] max-w-[1400px] p-2 sm:p-3 md:p-4 gap-3 md:gap-4">
        {/* ── LEFT PANEL ── */}
        <div
          className="
            w-full md:w-[420px] lg:w-[460px] xl:w-[520px] 2xl:w-[520px]
            flex-shrink-0 flex flex-col
            rounded-2xl overflow-hidden
            md:bg-[linear-gradient(rgba(104,87,246,0.05)_0%,rgba(165,73,226,0.05)_100%),linear-gradient(90deg,rgba(27,27,27,0.5)_0%,rgba(27,27,27,0.5)_100%)]
            md:border md:border-white/5
          "
        >
          {/* Logo */}
          <img
            src={img2}
            alt="Job Seek"
            className="
              w-[38%] sm:w-[30%] md:w-[55%] xl:w-[50%]
              object-contain
              px-3 pt-4
              sm:px-4 sm:pt-5
              md:px-8 md:pt-8
              xl:px-10 xl:pt-10
            "
          />

          {/* Outlet — vertically centered on large screens */}
          <div className="flex-1 flex flex-col md:justify-center overflow-y-auto">
            <Outlet />
          </div>
        </div>

        {/* ── RIGHT PANEL — desktop only ── */}
        <div className="hidden md:flex flex-1 min-w-0 flex-col rounded-2xl overflow-hidden">
          {/* Illustration — top right */}
          <div className="flex justify-end flex-shrink-0">
            <img
              src={img1}
              alt=""
              className="w-44 lg:w-56 xl:w-72 2xl:w-80 object-contain"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Testimonial — bottom left */}
          <div className="flex flex-col gap-2 px-10 lg:px-16 xl:px-20 pb-10 xl:pb-14 2xl:pb-16">
            <p className="text-white/80 max-w-sm xl:max-w-md text-xs lg:text-sm xl:text-base font-normal leading-relaxed">
              "Job Seek transformed my freelancing experience! With secure
              crypto payments and a global client base, I can work with
              confidence from anywhere. Highly recommended!"
            </p>
            <p className="text-white text-xs lg:text-sm xl:text-base font-bold italic">
              Alex, Freelance Designer
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Authresult;
