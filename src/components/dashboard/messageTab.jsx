import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons, convos, chatmessages } from "../../constants/freelancerdata";
import { Icon } from "../ui/icon";
import { TagBadge } from "../ui/TagBadge";

const Avatar = ({ c, size = "md" }) => {
  const dim =
    size === "lg"
      ? "w-[72px] h-[72px] text-[22px]"
      : size === "sm"
      ? "w-7 h-7 text-[11px]"
      : "w-9 h-9 text-[13px]";
  const ring = size === "lg" ? "ring-2 ring-violet-500/40" : "";

  return c.image ? (
    <img
      src={c.image}
      alt={c.name}
      className={`${dim} rounded-full object-cover ${ring} shrink-0`}
    />
  ) : (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-bold text-white shrink-0 ${ring}`}
      style={{ background: c.color }}
    >
      {c.avatar}
    </div>
  );
};

const MessagesTab = ({
  filters = ["General chat", "Unread chat"],
  isClient = false,
}) => {
  const [activeId, setActiveId] = useState(1);
  const [msg, setMsg] = useState("");
  const [messageFilter, setMessageFilter] = useState("General chat");

  // Panel states:
  // mobile: "list" | "chat" | "profile"
  // tablet+: showList toggle, showPanel toggle
  const [mobileView, setMobileView] = useState("list"); // "list" | "chat" | "profile"
  const [showPanel, setShowPanel] = useState(false);

  const active = convos.find((c) => c.id === activeId);
  const messages = chatmessages[activeId] ?? [];

  const filteredConvos =
    messageFilter === "General chat"
      ? convos
      : messageFilter === "Unread chat"
      ? convos.filter((c) => c.unread > 0)
      : messageFilter === "New Requests"
      ? convos.filter((c) => c.tag === "GIG" && c.unread > 0)
      : convos;

  const handleSelectConvo = (id) => {
    setActiveId(id);
    setMobileView("chat");
    setShowPanel(false);
  };

  // ── Conversation List ──
  const ConvoList = ({ onSelect }) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 flex flex-col gap-3 border-b border-white/[0.06] shrink-0">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-[15px]">Messages</span>
          <div className="w-7 h-7 bg-white/[0.06] rounded-lg flex items-center justify-center text-white/50 cursor-pointer">
            <Icon d={icons.search} size={14} />
          </div>
        </div>

        {/* Filter Pills — scroll horizontally if needed */}
        <div className="overflow-x-auto no-scrollbar">
          <div
            className="flex gap-2 rounded-full px-3 py-2 w-max mt-2 md:mt-0"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(#111318,#111318), linear-gradient(90deg,#6857F6,#A549E2)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              borderRadius: "20px",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setMessageFilter(filter)}
                className={`px-3 py-[6px] text-[12px] font-medium rounded-lg border cursor-pointer transition-all whitespace-nowrap
                  ${
                    messageFilter === filter
                      ? "bg-violet-700 border-violet-600 text-white"
                      : "bg-transparent border-white/[0.1] text-white/40 hover:text-white/60"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {filteredConvos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full gap-2 text-white/20 text-[13px] py-10"
          >
            <span>No conversations</span>
          </motion.div>
        ) : (
          <AnimatePresence>
            {filteredConvos.map((c, index) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                onClick={() => onSelect(c.id)}
                className={`px-4 py-[10px] flex gap-[10px] cursor-pointer transition-all border-l-2
                  ${
                    activeId === c.id
                      ? "bg-white/[0.04] border-violet-500 scale-[1.02]"
                      : "border-transparent hover:bg-white/[0.02] hover:scale-[1.01]"
                  }`}
              >
                <Avatar c={c} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[5px] mb-[3px]">
                    <span className="text-[13px] font-semibold text-slate-200 truncate max-w-[80px]">
                      {c.name}
                    </span>
                    <TagBadge label={c.tag} />
                    <span className="ml-auto text-[10px] text-white/25 whitespace-nowrap">
                      {c.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {c.audio ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1 text-[11px] text-white/40"
                      >
                        <Icon d={icons.mic ?? icons.send} size={11} />
                        {c.audio}
                      </motion.span>
                    ) : (
                      <span className="text-[12px] text-white/30 truncate max-w-[130px]">
                        {c.preview}
                      </span>
                    )}
                    {c.unread > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        className="bg-violet-600 text-white rounded-full px-[6px] text-[10px] font-bold shrink-0"
                      >
                        {c.unread}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );

  // ── Chat Window ──
  const ChatWindow = ({ showBack, onBack, onProfileToggle, profileOpen }) => (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      {/* Chat header */}
      <div className="px-4 py-[14px] border-b border-white/[0.06] flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* Back arrow on mobile */}
          {showBack && (
            <button
              onClick={onBack}
              className="text-white/50 hover:text-white/80 transition-colors mr-1 shrink-0"
              aria-label="Back to list"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11 4L6 9L11 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <button
            onClick={onProfileToggle}
            className={`rounded-full ring-2 ring-offset-1 ring-offset-transparent transition-all cursor-pointer border-none shrink-0
              ${profileOpen ? "ring-violet-500" : "ring-transparent hover:ring-violet-500/50"}`}
          >
            <Avatar c={active ?? convos[0]} size="md" />
          </button>
          <div className="min-w-0">
            <div className="text-white font-bold text-[14px] truncate">
              {active?.name}
            </div>
            <div className="text-white/30 text-[12px]">Active now</div>
          </div>
        </div>

        <button
          onClick={onProfileToggle}
          className={`flex items-center gap-1.5 px-3 py-[6px] rounded-lg text-[12px] border cursor-pointer transition-all shrink-0
            ${
              profileOpen
                ? "bg-violet-700/30 border-violet-500/40 text-violet-300"
                : "bg-white/[0.04] border-white/[0.08] text-white/40 hover:text-white/60"
            }`}
        >
          <Icon d={icons.user ?? icons.search} size={12} />
          <span className="hidden sm:inline">
            {profileOpen ? "Hide" : "View"} profile
          </span>
        </button>
      </div>

      {/* Messages */}
      <AnimatePresence>
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4"
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className={`flex items-end gap-[10px] ${m.mine ? "flex-row-reverse" : ""}`}
            >
              {!m.mine && <Avatar c={active ?? convos[0]} size="sm" />}
              <div className="min-w-0 max-w-[80%] sm:max-w-[340px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`px-[15px] py-[11px] text-[13px] leading-[1.6] text-white break-words
                    ${
                      m.mine
                        ? "bg-violet-700 rounded-[16px_16px_4px_16px] ml-auto"
                        : "bg-white/[0.08] rounded-[16px_16px_16px_4px]"
                    }`}
                >
                  {m.text}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-[10px] text-white/20 mt-1 ${m.mine ? "text-right" : ""}`}
                >
                  {m.time}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Input */}
      <div className="px-4 py-[14px] border-t border-white/[0.06] flex items-center gap-[10px] shrink-0">
        <div className="flex-1 bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-[10px] min-w-0">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type a message…"
            className="w-full bg-transparent border-none outline-none text-white text-[13px] placeholder-white/30"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 bg-violet-700 rounded-xl flex items-center justify-center text-white cursor-pointer border-none hover:bg-violet-600 transition-colors shrink-0"
        >
          <Icon d={icons.send} size={15} />
        </motion.button>
      </div>
    </div>
  );

  // ── Profile Panel ──
  const ProfilePanel = ({ onClose, isMobile }) => (
    <div
      className={`flex flex-col bg-[#0f1117] overflow-hidden shrink-0
        ${
          isMobile
            ? "fixed inset-0 z-30 flex"
            : "transition-all duration-300 ease-in-out border-l border-white/[0.06] " +
              (showPanel
                ? "w-[260px] min-w-[260px] opacity-100"
                : "w-0 min-w-0 opacity-0 pointer-events-none")
        }`}
    >
      <div
        className={`${
          isMobile ? "w-full" : "w-[260px]"
        } flex flex-col h-full overflow-y-auto no-scrollbar`}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <span className="text-white/50 text-[11px] uppercase tracking-widest font-semibold">
            About the company
          </span>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-white/40
              hover:text-white/70 hover:bg-white/[0.1] transition-all cursor-pointer border-none text-[14px] leading-none"
          >
            ✕
          </button>
        </div>

        {/* Avatar + Name */}
        <div className="flex flex-col items-center gap-2 px-5 pt-3 pb-5 border-b border-white/[0.06]">
          <Avatar c={active ?? convos[0]} size="lg" />
          <div className="text-white font-bold text-[17px] mt-1">
            {active?.name}
          </div>
          <div className="flex items-center gap-2 text-white/40 text-[12px]">
            <Icon d={icons.phone ?? icons.search} size={13} />
            <span>+33758146384646</span>
          </div>
        </div>

        {/* About */}
        <div className="px-5 py-4 border-b border-white/[0.06]">
          <div className="text-white/50 text-[11px] uppercase tracking-widest font-semibold mb-2">
            About
          </div>
          <p className="text-white/40 text-[12.5px] leading-[1.7]">
            This {active?.name} professional product manager at Google, I'm
            passionated in…
            <span className="text-violet-400 cursor-pointer"> Read More</span>
          </p>
        </div>

        {/* Address */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex flex-col gap-3">
          <div className="flex items-start gap-3 text-white/50 text-[12.5px]">
            <Icon d={icons.mappin} size={14} />
            <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-[12.5px]">
            <Icon d={icons.globe} size={14} />
            <span>House HMKD-100</span>
          </div>
        </div>

        {/* Jobs / Gigs toggle */}
        <div className="px-5 py-4 border-b border-white/[0.06]">
          <div className="flex bg-white/[0.04] border border-white/[0.08] rounded-full p-[3px]">
            {["JOBS", "GIGS"].map((t) => (
              <button
                key={t}
                className={`flex-1 py-[7px] text-[12px] font-bold rounded-full border-none cursor-pointer transition-all
                  ${
                    t === "JOBS"
                      ? "bg-violet-700 text-white shadow-[0_2px_10px_rgba(124,58,237,0.4)]"
                      : "bg-transparent text-white/40 hover:text-white/60"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Job Card */}
        <div className="px-5 py-4 flex flex-col gap-3">
          <div className="text-white font-bold text-[15px]">Brand Manager</div>
          <div className="flex items-center gap-3 text-white/50 text-[13px]">
            <Icon d={icons.globe} size={14} />
            <span>Nigeria</span>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-[13px]">
            <Icon d={icons.mappin} size={14} />
            <span>Remote</span>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-[13px]">
            <Icon d={icons.dollar} size={14} />
            <span>$65k</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-5 pb-6 mt-auto">
          <button className="w-full bg-white hover:bg-white/90 text-[#0f1117] text-[13px] font-bold px-4 py-[11px] rounded-full transition-all cursor-pointer border-none shadow-[0_4px_18px_rgba(255,255,255,0.1)]">
            {isClient ? "Approve Work" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ════════════════════════════════════════
          MOBILE  (<md) — stacked views
      ════════════════════════════════════════ */}
      <div className="flex md:hidden w-full h-full bg-white/[0.02] border border-white/[0.07] overflow-hidden relative">
        {/* List view */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ${
            mobileView === "list" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ConvoList onSelect={handleSelectConvo} />
        </div>

        {/* Chat view */}
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ${
            mobileView === "chat" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ChatWindow
            showBack={true}
            onBack={() => setMobileView("list")}
            onProfileToggle={() => setMobileView("profile")}
            profileOpen={false}
          />
        </div>

        {/* Profile view (slides in from right) */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ${
            mobileView === "profile" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ProfilePanel
            isMobile={false}
            onClose={() => setMobileView("chat")}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════
          TABLET  (md–lg) — list + chat, profile overlay
      ════════════════════════════════════════ */}
      <div className="hidden md:flex lg:hidden w-full h-full bg-white/[0.02] border border-white/[0.07] overflow-hidden">
        {/* Conversation list — narrower on tablet */}
        <div className="w-[220px] min-w-[220px] border-r border-white/[0.06] flex flex-col shrink-0">
          <ConvoList onSelect={(id) => { setActiveId(id); setShowPanel(false); }} />
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          <ChatWindow
            showBack={false}
            onBack={() => {}}
            onProfileToggle={() => setShowPanel((v) => !v)}
            profileOpen={showPanel}
          />

          {/* Profile slides in over chat on tablet */}
          {showPanel && (
            <div className="absolute top-0 right-0 bottom-0 w-[260px] z-20 shadow-2xl">
              <ProfilePanel
                isMobile={false}
                onClose={() => setShowPanel(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (lg+) — full 3-col layout
      ════════════════════════════════════════ */}
      <div className="hidden lg:flex w-full h-full bg-white/[0.02] border border-white/[0.07] overflow-hidden">
        {/* Conversation list */}
        <div className="w-[260px] min-w-[260px] border-r border-white/[0.06] flex flex-col shrink-0">
          <ConvoList onSelect={(id) => { setActiveId(id); }} />
        </div>

        {/* Chat */}
        <ChatWindow
          showBack={false}
          onBack={() => {}}
          onProfileToggle={() => setShowPanel((v) => !v)}
          profileOpen={showPanel}
        />

        {/* Profile panel */}
        <ProfilePanel isMobile={false} onClose={() => setShowPanel(false)} />
      </div>
    </>
  );
};

export default MessagesTab;