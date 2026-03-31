import { motion } from "framer-motion";
import { Icon } from "../ui/icon";
import { icons } from "../../constants/freelancerdata";

export const Field = ({ label, value, name, verified, icon, type = "text", setForm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 min-w-[200px] basis-[calc(50%-12px)]"
    >
      <div className="flex items-center justify-between mb-2">
        <label className="text-[13px] text-white/70 font-medium">{label}</label>
        {verified && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="text-[11px] text-emerald-500 flex items-center gap-1"
          >
            <Icon d={icons.verified} size={12} /> Verified
          </motion.span>
        )}
      </div>

      {/* Outer: 1px gradient border */}
      <div className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] p-[1px] rounded-[10px]">
        {/* Inner: 1px smaller radius so gradient strip stays exactly 1px */}
        <div className="relative bg-[#0f1117] rounded-[9px]">
          <input
            type={type}
            value={value}
            onChange={(e) =>
              setForm((f) => ({ ...f, [name]: e.target.value }))
            }
            className="w-full bg-transparent text-white text-[13.5px] outline-none py-[11px] pr-[38px] pl-[14px]"
          />
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none"
            >
              <Icon d={icon} size={15} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const SelectField = ({ label, value, name, options, setForm }) => (
  <div className="flex-1 min-w-[200px] basis-[calc(50%-12px)]">
    <label className="text-[13px] text-white/70 font-medium block mb-2">
      {label}
    </label>

    {/* Outer: 1px gradient border */}
    <div className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] p-[1px] rounded-[10px]">
      {/* Inner: 1px smaller radius */}
      <div className="relative bg-[#0f1117] rounded-[9px]">
        <select
          value={value}
          onChange={(e) =>
            setForm((f) => ({ ...f, [name]: e.target.value }))
          }
          className="w-full bg-transparent text-white text-[13.5px] outline-none py-[11px] pr-[38px] pl-[14px] appearance-none cursor-pointer"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#1a1d28]">
              {o}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
          <Icon d={icons.chevDown} size={15} />
        </div>
      </div>
    </div>
  </div>
);

export const PlaceholderTab = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex flex-col items-center justify-center text-center py-[80px] px-[40px] gap-4"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[64px] h-[64px] rounded-[18px] flex items-center justify-center bg-gradient-to-r from-[#6857F6] to-[#A549E2] mb-4"
    >
      <Icon d={icon} size={28} />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="font-bold text-[18px] text-white"
    >
      {title}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="text-[14px] text-white/40 max-w-[320px] leading-[1.6] mt-2"
    >
      {desc}
    </motion.div>
  </motion.div>
);
