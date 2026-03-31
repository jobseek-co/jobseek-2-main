import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const COUNTRIES = [
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "NG", flag: "🇳🇬", dial: "+234" },
  { code: "CA", flag: "🇨🇦", dial: "+1" },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
  { code: "DE", flag: "🇩🇪", dial: "+49" },
  { code: "FR", flag: "🇫🇷", dial: "+33" },
  { code: "IN", flag: "🇮🇳", dial: "+91" },
];

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
  </svg>
);

const inputBase =
  "w-full bg-transparent border border-[#3a2e4a] rounded-full px-5 py-3 text-sm text-white placeholder-[#ffffff] focus:outline-none focus:border-[#7c3aed] transition-colors duration-200";

function Contactus() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="w-full  ">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center flex flex-col items-center mb-12"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white font-[500] leading-relaxed max-w-xl">
            We're here to help! Whether you need assistance with an account,
            have questions about our platform, or want to provide feedback, our
            team is dedicated to providing you with the support you need.
          </p>
        </motion.div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Form */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className={inputBase}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className={inputBase}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              className={inputBase}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            {/* Phone with country selector */}
            <div className="relative flex items-center border border-[#3a2e4a] rounded-full px-4 py-3 focus-within:border-[#7c3aed] transition-colors duration-200">
              <div className="relative flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex items-center gap-1 text-sm text-white pr-3 border-r border-[#3a2e4a] mr-3 focus:outline-none whitespace-nowrap"
                >
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.code}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1 text-[#6b5f7a]">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-[#1a1225] border border-[#3a2e4a] rounded-xl shadow-xl z-20 w-40 overflow-hidden">
                    {COUNTRIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(c);
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-[#2a1e3a] transition-colors"
                      >
                        <span>{c.flag}</span>
                        <span>{c.code}</span>
                        <span className="text-[#6b5f7a] ml-auto">{c.dial}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder-[#ffffff] focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Leave us a message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-[#3a2e4a] rounded-2xl px-5 py-4 text-sm text-white placeholder-[#ffffff] focus:outline-none focus:border-[#7c3aed] transition-colors duration-200 resize-none"
            />

            <button
              type="button"
              className="w-full py-3 bg-gradient-to-b from-[#6857F6] to-[#A549E2] rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              
            >
              Submit
            </button>
          </div>

          {/* Divider (vertical on lg) */}
          <div className="hidden lg:block w-px bg-[#2a1e3a] self-stretch" />
          <div className="block lg:hidden w-full h-px bg-[#2a1e3a]" />

          {/* Right Side Info */}
          <div className="lg:w-60 w-full flex flex-col gap-8">

            {/* Chat with us */}
            <div>
              <p className="text-[#7c3aed] font-semibold text-sm mb-1">Chat with us</p>
              <p className="text-[#6b5f7a] text-xs mb-4">Speak to our friendly team via live chat</p>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-[#7c3aed] transition-colors">
                  <ChatIcon />
                  <span className="underline underline-offset-2">Start a live chat</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-[#7c3aed] transition-colors">
                  <MailIcon />
                  <span className="underline underline-offset-2">Shoot us an email</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-[#7c3aed] transition-colors">
                  <XIcon />
                  <span className="underline underline-offset-2">Message us on X</span>
                </a>
              </div>
            </div>

            <div className="border-t border-[#2a1e3a]" />

            {/* Call Us */}
            <div>
              <p className="text-[#7c3aed] font-semibold text-sm mb-1">Call Us</p>
              <p className="text-[#6b5f7a] text-xs mb-4">Call our team Mon–Fri from 8am to 5pm</p>
              <a href="tel:+2345673456578" className="flex items-center gap-2 text-sm text-white hover:text-[#7c3aed] transition-colors">
                <PhoneIcon />
                <span className="underline underline-offset-2">+234 567 345 6578</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;