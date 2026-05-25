import { useState } from "react";
import { Facebook, Youtube, Globe, Instagram, Linkedin, Settings, DivideCircle } from "lucide-react";
import { Logo } from "../ui/icon";

const links = {
  company: ["about", "Our team", "jobs"],
  Resources: ["news", "FAQs", "Candidates"],
  contacts: ["CV post", "job post", "contact"],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5">

      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row gap-10 md:gap-16">

        {/* Subscribe Box */}
        <div className="w-full md:w-[45%] border border-[#4A3A7680] rounded-2xl p-6 flex flex-col gap-3 bg-[#0f0f0f]">
          <div>
            <h3 className="text-white font-semibold text-xl mb-1">subscribe</h3>
            <p className="text-gray-500 text-sm">Stay current with all things JobSeek</p>
          </div>

          {/* Email Input */}
          <div className="flex items-center bg-transparent border border-[#4A3A7680] rounded-full px-4 py-2.5 gap-3 mt-2 focus-within:border-violet-500/40 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 min-w-0 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
            />
            <button className="bg-white text-[#0a0a0a] font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Nav Link Columns */}
        <div className="w-full md:w-[55%] grid grid-cols-3 gap-6 md:gap-8">
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-3">
              <h4 className="text-white font-medium text-sm sm:text-base">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">

        {/* Logo */}
        <div className="flex items-center gap-0.5 select-none">
        <div className="w-10 h-10  flex items-center justify-center">
          <Logo className="w-6 h-6" />
          </div>
          <span className="text-white text-sm font-semibold">JOOB SEEK</span>
        
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 sm:gap-7">
          {[
            { icon: Facebook, href: "#" },
            { icon: Youtube, href: "#" },
            { icon: Globe, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}