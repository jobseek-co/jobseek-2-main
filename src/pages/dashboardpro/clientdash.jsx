import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SettingsTab from "../../components/dashboard/settingsTab";
import MessagesTab from "../../components/dashboard/messageTab";
import { Sidebar } from "../../components/layout/sidebar";

export default function ClientDashboard() {
  const [active, setActive] = useState("Dashboard");

  const tabContent = {
   Dashboard: (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Dashboard page — coming soon
      </div>
    ),
    "Post a Job": (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Post a Job — coming soon
      </div>
    ),
    Candidates: (
      <div className="text-white/40 text-[14px] p-8 flex items-center justify-center h-screen">
        Candidate page — coming soon
      </div>
    ),
    Messages: <MessagesTab  filters={["General chat",  "New Requests"] } isClient={true}/>,
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
    <div className="flex h-screen  bg-[#0f1117] ">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full overflow-y-auto"
          >
            {tabContent[active]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
