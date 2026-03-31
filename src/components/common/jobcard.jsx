import { motion } from "framer-motion";
import { Globe, Building2 } from "lucide-react";

function JobCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="bg-[#12121A] border border-[#4A3A7680] rounded-2xl p-6 flex flex-col h-full"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <div className="border border-[#4A3A7680] p-2 rounded-xl flex-shrink-0">
          <img
            src={job.logo}
            alt={job.company}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-white text-lg font-semibold leading-tight truncate">
            {job.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1 truncate">{job.company}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mt-4 leading-relaxed border-b border-[#4A3A7680] pb-5 flex-1">
        {job.description}
      </p>

      {/* Footer: Location/Type + Apply */}
      <div className="flex items-center justify-between gap-3 pt-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 min-w-0">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Globe size={13} className="flex-shrink-0" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Building2 size={13} className="flex-shrink-0" />
            {job.type}
          </span>
        </div>
        <button className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:opacity-90 transition-opacity">
          Apply
        </button>
      </div>
    </motion.div>
  );
}

export default JobCard;