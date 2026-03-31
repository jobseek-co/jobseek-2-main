import { motion } from "framer-motion";

export const TagBadge = ({ label }) => (
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
    className={`text-[10px] font-bold px-[7px] py-[2px] rounded ${
      label === "GIG" ? "bg-violet-500/20 text-violet-300" : "bg-sky-500/15 text-sky-300"
    }`}
  >{label}</motion.span>
);

export const StatusBadge = ({ status }) => {
  const map = {
    "Under Review": "bg-amber-500/15 text-amber-300",
    "Shortlisted": "bg-emerald-500/15 text-emerald-300",
    "Pending":      "bg-slate-500/20 text-slate-400",
  };
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
      className={`text-[11px] font-semibold px-2 py-[3px] rounded-full ${map[status]}`}
    >{status}</motion.span>
  );
};