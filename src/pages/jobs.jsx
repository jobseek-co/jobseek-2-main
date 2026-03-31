import React, { useState } from "react";
import JobCard from "../components/common/jobcard";
import img1 from "../assets/icon2.png";
import img2 from "../assets/Group.png";
import img3 from "../assets/group2.png";
import img4 from "../assets/icon3.png";
import img5 from "../assets/Group 3.png";
import img6 from "../assets/icon.png";
import Rating from "../components/common/ratings";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// ── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
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

// ── Data ────────────────────────────────────────────────────────────────────
const jobsData = [
  { id: 1, title: "Web Developer", company: "Colored", description: "Collabrate with designers to translate visual designs into functional web pages.", location: "Paris", type: "Remote", logo: img1 },
  { id: 2, title: "Software Developer", company: "Fintechy", description: "Collabrate with cross-functional teams to gather requirements.", location: "New York", type: "Remote", logo: img2 },
  { id: 3, title: "Graphic Desginer", company: "Gradient", description: "Develop and design marketing collateral, including brochures, flyers , banners , and social media graphics", location: "Las Vegas", type: "Remote", logo: img3 },
  { id: 4, title: "Brand Manager", company: "Greenly", description: "Develop and execute brand strategies to establish and maintain a strong brand presence.", location: "Los Angelas", type: "Remote", logo: img4 },
  { id: 5, title: "Social Media Manager", company: "lineo", description: "Develop and implement social media strategies to increase brand awareness, engagement, and drive traffic to the company's website.", location: "California", type: "Remote", logo: img5 },
  { id: 6, title: "Marketing Coordinator", company: "Pipe", description: "Conduct market research to identify target audiences, market trends, and competitive analysis.", location: "London", type: "Remote", logo: img6 },
];

const categories = [
  "View all", "Digital", "Engineering", "Management",
  "Finance", "Marketing", "Design", "Development",
];

const SCROLL_AMOUNT = 356;

function Jobs() {
  const [activeCategory, setActiveCategory] = useState("View all");

  return (
    <div className="w-full h-full flex flex-col">

      {/* ── Hero / Vacancies ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-gray-700 pb-10">
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base">
              Vacancies
            </h2>
            <h1 className="text-3xl md:text-[52px] lg:text-[60px] font-[500] text-white leading-tight mt-1">
              Find the perfect jobs that you deserve
            </h1>
          </motion.div>

          <motion.p
            className="flex-1 min-w-0 font-[500] leading-[27px] text-white md:max-w-sm lg:max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            We constantly seek driven individuals who possess a strong
            commitment to creating an impact and aspire to be integral members
            of a vibrant and forward-thinking group.
          </motion.p>
        </div>
      </section>

      {/* ── Discover heading ── */}
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col items-center text-center gap-2">
          <InView>
            <h1 className="text-3xl md:text-[36px] font-[500] text-white">
              Discover the best job
            </h1>
          </InView>
          <InView custom={1}>
            <p className="font-[500] text-[18px] text-white max-w-xl">
              Start career with the best company in the world, we ensures you to
              get the best job possible.
            </p>
          </InView>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-4 w-full">
        <motion.div
          className="flex flex-wrap gap-2 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: "#1A192C", color: "#fff", border: "1.4px solid #4A3A7680" }
                  : { background: "transparent", color: "#aaa", border: "1px solid #2d2a4a" }
              }
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ── Job Cards Grid ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-6 w-full">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {jobsData.map((job) => (
            <motion.div
              key={job.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.button
            className="px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:opacity-90"
            style={{ background: "#fff", color: "#0a0915" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </motion.div>
      </section>

      <Rating />

    </div>
  );
}

export default Jobs;