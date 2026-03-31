import React from "react";
import { motion } from "framer-motion";
import Rating from "../components/common/ratings";
import img1 from "../assets/anchor-point.png";
import img2 from "../assets/Ellipse 215.png";
import img3 from "../assets/vision.png";
import img4 from "../assets/Ellipse 215 (2).png";
import img5 from "../assets/blur.png";
import img6 from "../assets/Ellipse 215 (1).png";
import img8 from "../assets/bitcoin-03.png";
import img9 from "../assets/job-search.png";
import img10 from "../assets/Vector.png";
import Img11 from "../assets/grid lines.png";
import ZigZagSlider from "../components/common/slide";

const cards = [
  {
    id: "mission",
    title: "Mission",
    description:
      "To empower individuals and businesses by providing a trusted, decentralized platform that transforms how freelancing works in a digital economy.",
    icon: img1,
    ellipse: img2,
    titleColor: "text-orange-400",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "To be the world's most secure and trusted freelancing platform that integrates cryptocurrency, enabling freelancers and clients worldwide to connect and thrive.",
    icon: img3,
    ellipse: img4,
    titleColor: "text-red-400",
  },
  {
    id: "core-values",
    title: "Core Values",
    description:
      "We embrace the latest technologies to simplify freelancing, ensuring our platform remains at the cutting edge of digital payments and user experience.",
    icon: img5,
    ellipse: img6,
    titleColor: "text-gray-200",
  },
];

const example = [
  {
    id: "secure-crypto-payments",
    title: "Secure Crypto Payments",
    description:
      "Freelancers can connect popular crypto wallets (like MetaMask and Coinbase) directly to their profiles, enabling easy, secure payments.",
    icon: img8,
  },
  {
    id: "global-job-opportunities",
    title: "Global Job Opportunities",
    description:
      "Job Seek hosts a wide variety of jobs across industries and skills, from short-term gigs to long-term contracts, enabling freelancers to find projects.",
    icon: img9,
  },
  {
    id: "real-time-communication",
    title: "Real-Time Communication",
    description:
      "Our integrated chat system allows clients and freelancers to communicate in real time, making project discussions, status updates, and clarifications easy.",
    icon: img10,
  },
];

function Aboutus() {
  return (
    <div>
      {/* Section 1: Who We Are Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-gray-700 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full min-w-0 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base"
            >
              Vacancies
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-[52px] lg:text-[60px] font-[500] text-white leading-tight mt-1"
            >
              Who We Are
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 min-w-0 font-[500] leading-[27px] text-white md:max-w-sm lg:max-w-lg text-center md:text-left"
          >
            We are an innovative online marketplace web application designed to
            facilitate secure and transparent transactions between individuals
            seeking services and those offering them. Our platform aims to
            streamline the process of finding and delivering services while
            ensuring a high level of user satisfaction and financial security.
          </motion.p>
        </div>
      </motion.section>

      {/* Section 2: Brief Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col items-center text-center gap-2">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base list-none"
          >
            Who We Are
          </motion.li>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-[36px] font-[500] text-white text-center"
          >
            Brief introduction to
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent"
            >
              {" "}
              JobSeek
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-[500] text-[16px] text-white max-w-2xl text-center"
          >
            Job Seek is an innovative freelance platform that connects clients
            and freelancers through the power of cryptocurrency. Designed for a
            digital-first world, Job Seek provides secure, fast, and borderless
            payments, allowing freelancers to get paid in crypto and businesses
            to access a global pool of talent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mt-10"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex-1 relative pt-10 animate-fade-up"
              >
                {/* Floating platform: icon + ellipse */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-44 z-20">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-lift w-16 h-16 object-contain z-10 -mb-4"
                  />
                  <img src={card.ellipse} alt="platform" className="w-44" />
                </div>

                {/* Card */}
                <div className="bg-[#1a1a1a] rounded-2xl pt-16 pb-9 px-6 text-center border border-white/5 transition-all duration-300 h-full">
                  <h3 className={`font-syne text-lg font-semibold mb-3 ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="font-dm text-[#aaaaaa] text-sm leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Why Choose Job Seek */}
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col items-center text-center gap-2">
          <li className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base list-none">
            Unique Offering
          </li>
          <h1 className="text-3xl md:text-[36px] font-[500] text-white text-center">
            Why Choose Job Seek?
          </h1>
          <p className="font-[500] text-[16px] text-white max-w-2xl text-center">
            Job Seek is not just a freelancing platform; it's a comprehensive
            solution for today's digital workforce. We go beyond traditional
            freelancing with our unique offering of secure, crypto-based
            payments, allowing freelancers and clients to work together with
            ease, no matter where they are.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10 w-full max-w-6xl">
            {example.map((examples, i) => (
              <motion.div
                key={examples.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col flex-1 p-6 text-center justify-center gap-1 items-center"
                style={{
                  border: "2px solid",
                  borderImage: "linear-gradient(90deg, #6857F6, #A549E2) 1",
                  borderRadius: "16px",
                }}
              >
                <div className="flex justify-center w-full">
                  <img
                    src={examples.icon}
                    alt={examples.title}
                    className="w-10 h-10 mb-4"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg text-center">
                  {examples.title}
                </h3>
                <p className="text-[#aaaaaa] text-sm mt-2 text-center">
                  {examples.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Meet The Team */}
      <section className="w-full" >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col items-center text-center gap-2">
          <li className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base list-none">
            Our Team
          </li>
          <h1 className="text-3xl md:text-[36px] font-[500] text-white text-center">
            Meet The Team
          </h1>
          <p className="font-[500] text-[16px] text-white max-w-2xl text-center">
            Our team is the driving force behind our success. Composed of
            experienced professionals who are passionate about their work, each
            member brings a unique set of skills and expertise to the table.
          </p>
          <ZigZagSlider />
        </div>
      </section>

      {/* Section 5: Security */}
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full flex flex-col items-center text-center gap-2">
          <li className="font-semibold bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent text-sm sm:text-base list-none">
            Security
          </li>
          <h1 className="text-3xl md:text-[36px] font-[500] text-white text-center">
            Our Commitment to Security
          </h1>
          <p className="font-[500] text-[16px] text-white max-w-3xl text-center">
            At Job Seek, we prioritize your safety and peace of mind. We
            understand that security is a key concern when working online, and
            we've built robust features to ensure every transaction,
            communication, and collaboration on our platform is secure and
            transparent.
          </p>

          <div className="flex flex-col bg-[#17191F99] mt-14 p-6 rounded-tr-4xl rounded-sm gap-4 w-full max-w-3xl border-2 border-[#A549E2] text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-white mb-2 text-center ">
              At 2022
            </h2>
            <p className="text-[#aaaaaa] text-sm max-w-2xl text-center sm:text-left">
              78% of freelancers prefer platforms with secure payment options,
              and crypto payments are seen as the most secure method for
              international transactions.
            </p>
          </div>
          <div className="flex flex-col bg-[#17191F99] mt-3 p-6 rounded-tr-4xl rounded-sm gap-4 w-full max-w-3xl border-2 border-[#A549E2] items-center">
            <h2 className="text-2xl font-semibold text-white mb-2 text-center  w-full">
              62%
            </h2>
            <p className="text-[#aaaaaa] text-sm text-center max-w-2xl">
              Research shows that 62% of freelancers prefer platforms with
              secure, encrypted messaging, reducing the risk of sensitive
              project information being compromised.
            </p>
          </div>
        </div>
      </section>

      <Rating />

      {/* Section 6: CTA */}
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          <div
            className="border border-[#4A3A7680] bg-[#944EE81A] rounded-2xl px-6 py-14 sm:py-20 flex flex-col items-center gap-6 text-center"
            style={{
              backgroundImage: `url(${Img11})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl text-center">
                Start Your Freelancing Journey with Job Seek
              </h1>
              <p className="text-white max-w-xl text-sm sm:text-base text-center">
                At Job Seek, we're redefining freelancing by blending security
                with flexibility. Join a vibrant network of talented freelancers
                and innovative clients, and take advantage of seamless crypto
                payments, real-time collaboration, and global job opportunities
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-[#0D0E11] border border-[#A549E2] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;