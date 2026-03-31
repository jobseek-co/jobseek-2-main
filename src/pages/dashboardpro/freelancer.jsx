import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MessagesTab from "../../components/dashboard/messageTab";

import SettingsTab from "../../components/dashboard/settingsTab";
import { Sidebar } from "../../components/layout/sidebar";

// ── Main export ───────────────────────────────────────────────────────────────
export default function FreelancerDashboard() {
  const [active, setActive] = useState("Dashboard");

  const tabContent = {
    Dashboard: (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Dashboard page — coming soon
      </div>
    ),
    Messages: <MessagesTab filters={["General chat", "Unread chat"]} />,
    "Job History": (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Dashboard page — coming soon
      </div>
    ),
    "My Profile": (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Profile page — coming soon
      </div>
    ),
    Calendar: (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Calendar page — coming soon
      </div>
    ),
    Transactions: (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Dashboard page — coming soon
      </div>
    ),
    Settings: <SettingsTab />,
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0f1117] font-[system-ui,sans-serif]">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            {tabContent[active]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
