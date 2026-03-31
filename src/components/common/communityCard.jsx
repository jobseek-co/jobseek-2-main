import { motion } from "framer-motion";

function CommunityCard() {
  const avatarColors = ["#1a1a2e","#16213e","#0f3460","#533483","#2d132c","#1b1b2f","#162447","#1f4068"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="bg-[#b8ff3c] rounded-2xl p-3.5" style={{ width: 200 }}
    >
      <p className="text-[#0a0a0f] text-[11px] font-bold leading-tight mb-0.5">
        Join The Jobseek comunity
      </p>
      <p className="text-[#0a0a0f]/70 text-[11px] font-semibold mb-2">500+</p>
      <div className="flex">
        {avatarColors.map((bg, i) => (
          <div
            key={i}
            style={{ backgroundColor: bg, marginLeft: i === 0 ? 0 : -7, zIndex: 10 - i }}
            className="relative w-7 h-7 rounded-full border-2 border-[#b8ff3c]"
          />
        ))}
      </div>
    </motion.div>
  );
}
export default CommunityCard
