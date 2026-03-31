import React, { useState } from "react";
import img1 from "../assets/image.png";

import {
  Search,
  ArrowRight,
  Globe,
  Building2,
  Coins,
  User,
  Upload,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { employer, jobList, popular, seekers, tags } from "../constants/freelancerdata";

// ── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

// ── Scroll-triggered wrapper ────────────────────────────────────────────────
function InView({ children, variants = fadeUp, custom = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}



const latest = [{}];
const row1 = tags.slice(0, 10);
const row2 = tags.slice(8);

// ── Tag ─────────────────────────────────────────────────────────────────────
function Tag({ label, highlighted }) {
  return (
    <span
      className={`
        inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap cursor-pointer select-none transition-all duration-200
        ${highlighted
          ? "bg-[#1B1A2E] text-white border border-[#4A3A7680] shadow-lg shadow-violet-900/40"
          : "bg-transparent text-slate-300 border border-slate-600 hover:border-slate-400 hover:text-white"
        }
      `}
    >
      {label}
    </span>
  );
}

// ── MarqueeRow ───────────────────────────────────────────────────────────────
function MarqueeRow({ items, direction = "left", highlighted = [] }) {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-2 sm:gap-3 w-max ${animClass}`}>
        {doubled.map((label, i) => (
          <Tag key={i} label={label} highlighted={highlighted.includes(label)} />
        ))}
      </div>
    </div>
  );
}

// ── Homepage ─────────────────────────────────────────────────────────────────
function Homepage() {
  const [role, setRole] = useState("seeker");
  const [query, setQuery] = useState("");
  const [role2, setRole2] = useState("popular");

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left { animation: marquee-left 30s linear infinite; }
        .animate-marquee-right { animation: marquee-right 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full h-full flex flex-col">

        {/* ── Hero ── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-white text-center md:text-left items-center md:items-start">
            <motion.p
              className="border border-white/20 bg-white/5 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs sm:text-sm text-gray-300 w-fit"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              The best job seekers
              <span className="text-white/30">|</span>
              <span className="inline-flex items-center gap-1 font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
                Explore
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-400" />
              </span>
            </motion.p>

            <motion.h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Connecting you with the best workman
            </motion.h1>

            <motion.p
              className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Growing a business means having the right people in your team.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="flex items-center w-full bg-[#0D0E11] border border-white/10 rounded-full px-3 py-2 gap-2 focus-within:border-violet-500/50 transition-colors duration-200"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Search className="w-4 h-4 text-gray-500 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="job title"
                className="flex-1 min-w-0 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
              />
              <motion.button
                className="flex items-center gap-1.5 bg-white text-[#0D0E11] font-semibold text-xs sm:text-sm px-3 sm:px-5 py-2 rounded-full hover:bg-gray-100 transition-colors duration-150 shrink-0"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="hidden sm:inline">Find jobs</span>
                <span className="sm:hidden">Find</span>
                <ArrowRight className="w-3.5 h-3.5 text-violet-500" />
              </motion.button>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={img1}
              alt="Job seeker illustration"
              className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </motion.div>
        </div>

        {/* ── Marquee ── */}
        <motion.div
          className="w-full flex flex-col gap-2 sm:gap-3 pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MarqueeRow items={row1} direction="left" highlighted={["Financial Data Analyst", "Cybersecurity Analyst"]} />
          <MarqueeRow items={row2} direction="right" highlighted={["Software Engineer – Full Stack", "Salesforce Developer"]} />
        </motion.div>

        {/* ── About + Jobs ── */}
        <section className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full">
            <div className="flex flex-col space-y-3">
              <InView>
                <p className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-center md:text-left text-sm sm:text-base">
                  ABOUT JOBBOARD
                </p>
              </InView>

              <InView custom={1}>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[35px] text-center md:text-left leading-[1.1] tracking-tight text-white">
                  One step to your future start here
                </h2>
              </InView>

              <InView custom={2}>
                <div className="flex flex-col md:flex-row gap-4 md:items-end items-center text-center md:text-left">
                  <p className="text-white font-normal text-sm sm:text-base md:text-[18px] leading-relaxed md:max-w-[50%]">
                    Receive a customized salary approximation based on your profile. Access reviews for more than 600,000 companies worldwide.
                  </p>
                  <div className="flex items-center justify-center md:justify-end w-full md:w-1/2">
                    <motion.button
                      className="bg-white text-[#0D0E11] font-semibold px-6 py-3 rounded-3xl text-sm sm:text-base hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Learn more
                    </motion.button>
                  </div>
                </div>
              </InView>
            </div>

            {/* Jobs Table */}
            <InView custom={3} className="w-full">
              <div className="w-full bg-[#0D0E11] text-white border border-[#4A3A7680] mt-5 rounded-xl">
                <div className="mx-4 border-b border-b-[#FFFFFF1A]">
                  <div className="px-2 sm:px-4 py-3 flex">
                    <h2 className="w-1/2 text-[#848484] text-sm sm:text-base">Jobs</h2>
                    <a href="#" className="w-1/2 flex justify-end hover:underline text-sm sm:text-base">All jobs</a>
                  </div>
                </div>

                <div className="grid grid-cols-1 h-[400px] overflow-y-auto no-scrollbar md:grid-cols-2 px-3 sm:px-5 py-4 gap-2 sm:gap-3">
                  {jobList.map((job, i) => (
                    <motion.div
                      key={i}
                      className="border border-[#4A3A7680] flex justify-between rounded-lg px-3 sm:px-4 py-3 hover:bg-[#12131A] transition-colors gap-2"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (i % 6) * 0.05, ease: "easeOut" }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg truncate">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
                          <span className="flex gap-1 items-center"><Globe size={13} />{job.location}</span>
                          <span className="flex gap-1 items-center"><Building2 size={13} />{job.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="text-sm sm:text-base flex gap-1 items-center">
                          <Coins size={13} />{job.salary ? `$${job.salary}` : "—"}
                        </span>
                        <motion.button
                          className="w-16 sm:w-20 h-7 sm:h-8 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
                          whileHover={{ scale: 1.07 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Apply
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </InView>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
            <InView>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
                HOW DOES IT WORK
              </h1>
            </InView>

            {/* Toggle */}
            <InView custom={1}>
              <div className="flex justify-center mt-5 sm:mt-6">
                <div className="inline-flex bg-[#0D0E11] border border-[#4A3A7680] rounded-full p-1 sm:p-1.5">
                  <motion.button
                    onClick={() => setRole("seeker")}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all
                      ${role === "seeker" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    Job Seeker
                  </motion.button>
                  <motion.button
                    onClick={() => setRole("employer")}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all
                      ${role === "employer" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    Employer
                  </motion.button>
                </div>
              </div>
            </InView>

            {/* Cards */}
            <div className="mt-8 sm:mt-10 flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
              {(role === "seeker" ? seekers : employer).map((item, i) => (
                <motion.div
                  key={item.id}
                  className="w-[260px] sm:w-[300px] md:w-[320px] min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex-shrink-0 bg-[#13151A] rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="bg-[#8D4FEA] w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-semibold text-sm sm:text-base shrink-0">
                      {item.id}
                    </span>
                    <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-white leading-tight">{item.title}</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3">{item.description}</p>
                  <motion.button
                    className="mt-3 w-45 bg-white text-black py-2 sm:py-2.5 rounded-full font-[500] hover:opacity-90 transition text-xs sm:text-sm sm:w-50 h-10 sm:px-6"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {item.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Job Vacancy ── */}
        <section className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
            <div className="flex flex-col justify-center items-center gap-2">
              <InView>
                <h3 className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-center md:text-left text-sm sm:text-base">
                  Job Vacancy
                </h3>
              </InView>
              <InView custom={1}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  Discover the best job
                </h1>
              </InView>
              <InView custom={2}>
                <p className="text-white text-sm sm:text-base md:text-xl font-medium text-center max-w-lg">
                  Start career with the best company in the world, we ensure you get the best job possible.
                </p>
              </InView>
            </div>

            {/* Toggle */}
            <InView custom={3}>
              <div className="flex justify-center mt-5 sm:mt-6">
                <div className="inline-flex bg-[#0D0E11] border border-[#4A3A7680] rounded-full p-1 sm:p-1.5">
                  <motion.button
                    onClick={() => setRole2("popular")}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all
                      ${role2 === "popular" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    Popular
                  </motion.button>
                  <motion.button
                    onClick={() => setRole2("latest")}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all
                      ${role2 === "latest" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    Latest
                  </motion.button>
                </div>
              </div>
            </InView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {(role2 === "popular" ? popular : latest).map((onlooker, i) => (
                <motion.div
                  className="border border-[#4A3A7680] mt-3 flex flex-col gap-4 text-white font-[500] rounded-lg px-4 py-2"
                  key={onlooker.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="border border-[#4A3A7680] px-3 py-2 rounded-xl">
                        <img src={onlooker.icon} alt={onlooker.icon} className="w-10 h-10" />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-lg font-[400]">{onlooker.title}</h2>
                        <p className="text-xs sm:text-sm text-gray-400">{onlooker.company}</p>
                      </div>
                    </div>
                    <motion.button
                      className="w-16 sm:w-20 h-7 sm:h-8 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply
                    </motion.button>
                  </div>
                  <p className="text-xs sm:text-sm font-[400] text-gray-400 p-3 border-b border-b-gray-800">
                    {onlooker.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
                    <span className="flex gap-1 items-center"><Globe size={13} />{onlooker.location}</span>
                    <span className="flex gap-1 items-center"><Building2 size={13} />{onlooker.type}</span>
                    <span className="flex gap-1 items-center"><Coins size={13} />{onlooker.salary}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Profile Form ── */}
        <section className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
            <InView>
              <div className="border border-[#4A3A7680] bg-[#17191F80] grid grid-cols-1 md:grid-cols-2 p-4 sm:p-6 gap-4 sm:gap-6 rounded-lg">
                {/* Form Card */}
                <motion.div
                  className="bg-[#1F1B30] rounded-lg border border-[#4A3A7680] p-4 sm:p-6 flex flex-col gap-3"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex gap-3 items-center">
                      <span className="border border-[#4A3A7680] px-3 sm:px-4 py-2 rounded-xl shrink-0">
                        <User size={24} color="white" />
                      </span>
                      <h2 className="font-medium text-white text-base sm:text-lg truncate">Oliver Forslin</h2>
                    </div>
                    <motion.button
                      className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-full h-8 sm:h-9 font-medium gap-1.5 text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Upload size={12} />
                      upload your photo
                    </motion.button>
                  </div>

                  {[
                    { type: "text", placeholder: "Full name" },
                    { type: "email", placeholder: "Email" },
                    { type: "text", placeholder: "Position" },
                  ].map(({ type, placeholder }, i) => (
                    <motion.div
                      key={placeholder}
                      className="flex items-center bg-transparent border border-[#4A3A7680] rounded-lg px-4 py-2.5 focus-within:border-violet-500/40 transition-colors"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                    >
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="flex-1 min-w-0 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Text Side */}
                <motion.div
                  className="flex flex-col justify-center gap-2 text-center md:text-left"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <h1 className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base">01</h1>
                  <h2 className="text-white font-medium text-xl sm:text-2xl leading-snug">Discover Job Openings</h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Start by searching for job openings using our comprehensive search engine. Simply enter relevant keywords, location, and other criteria to find the positions that match your interests and qualifications.
                  </p>
                </motion.div>
              </div>
            </InView>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
            <InView>
              <div className="border border-[#4A3A7680] bg-[#944EE81A] rounded-2xl px-6 py-14 sm:py-20 flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <motion.h1
                    className="font-medium text-3xl sm:text-4xl md:text-5xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Job-search smarter?
                  </motion.h1>
                  <motion.span
                    className="font-semibold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    We make it easy.
                  </motion.span>
                </div>

                <motion.button
                  className="bg-white text-[#0D0E11] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Get Started for Free
                </motion.button>
              </div>
            </InView>
          </div>
        </section>

      </div>
    </>
  );
}

export default Homepage;