import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ethIcon from "../assets/Group (4).png";
import btcIcon from "../assets/Group (5).png";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I sign up?",
      answer: "To get started, visit our registration page and choose your user type (freelancer or client). You'll need to provide a valid email and create a profile. Freelancers also have the option to connect a crypto wallet."
    },
    {
      question: "Payment and Transactions",
      answer: "We support various payment methods including cryptocurrency transactions. All payments are secured through smart contracts to ensure safety for both freelancers and clients."
    },
    {
      question: "Do I need a crypto wallet to use Job Seek?",
      answer: "No, a crypto wallet is optional. While freelancers can connect a wallet for crypto payments, you can also use traditional payment methods like bank transfers or credit cards."
    },
    {
      question: "Are there fees for using Job Seek?",
      answer: "Job Seek charges a small service fee on completed transactions. The fee structure varies depending on your user type and the payment method used. Check our pricing page for detailed information."
    },
    {
      question: "Who can use Job Seek?",
      answer: "Job Seek is available to freelancers and clients worldwide. Whether you're a developer, designer, writer, or any other professional, you can join our platform to find opportunities or hire talent."
    },
    {
      question: "Can I delete my Job Seek account?",
      answer: "Yes, you can delete your account at any time from your account settings. Please note that this action is irreversible and all your data will be permanently removed from our servers."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 w-full">
        
        {/* Header Section - Mobile Optimized */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex items-center justify-center h-48 sm:h-64 mb-8 sm:mb-12"
        >
          {/* Top Left - ETH */}
          <img
            src={ethIcon}
            alt="Ethereum"
            className="absolute top-0 left-4 sm:left-[15%] w-8 h-8 sm:w-12 sm:h-12 animate-bounce-slow"
          />
          
          {/* Top Right - BTC */}
          <img
            src={btcIcon}
            alt="Bitcoin"
            className="absolute top-0 right-4 sm:right-[15%] w-8 h-8 sm:w-12 sm:h-12 animate-bounce-slow"
          />
          
          {/* Bottom Left - BTC */}
          <img
            src={btcIcon}
            alt="Bitcoin"
            className="absolute bottom-0 left-4 sm:left-[12%] w-8 h-8 sm:w-12 sm:h-12 animate-bounce-slow"
          />
          
          {/* Bottom Right - ETH */}
          <img
            src={ethIcon}
            alt="Ethereum"
            className="absolute bottom-0 right-4 sm:right-[12%] w-8 h-8 sm:w-12 sm:h-12 animate-bounce-slow"
          />

          {/* Center Text */}
          <div className="text-center text-white z-10">
            <h2 className="text-base sm:text-lg md:text-3xl font-semibold tracking-wide">
              GOT QUESTIONS ?
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-3xl font-medium tracking-wide">
              WE'VE GOT ANSWERS
            </p>
          </div>
        </motion.section>

      {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-blue-900/30 border border-purple-500/60 shadow-[0_0_30px_rgba(147,51,234,0.3)]' 
                  : 'bg-[#13131a] border border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/10 pointer-events-none" />
              )}
              
              <button
                onClick={() => toggleFaq(index)}
                className="relative w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none group"
              >
                <span className={`font-medium text-sm sm:text-base pr-4 transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]' 
                    : 'border border-purple-500/50 text-purple-400 group-hover:border-purple-400'
                }`}>
                  {openIndex === index ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>

              {/* ✅ Replace CSS max-h trick with framer-motion */}
              <motion.div
                initial={false}
                animate={openIndex === index
                  ? { height: 'auto', opacity: 1 }
                  : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
