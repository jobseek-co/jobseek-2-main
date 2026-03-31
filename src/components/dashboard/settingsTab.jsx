import { useState } from "react";
import { icons } from "../../constants/freelancerdata";
import { Icon } from "../ui/icon";
import { Field, SelectField, PlaceholderTab } from "../forms/fields";

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    country: "",
    bio: `About Me:
`,
  });

  const tabs = [
    "Profile",
    "Account",
    "Notification",
    "Payment",
    "Security",
    "Language",
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0f1117] h-screen overflow-hidden font-sans">
      {/* ── Fixed top: title + tabs ── */}
      <div className="shrink-0 px-4 sm:px-6 lg:px-9 pt-6 sm:pt-8">
        <h2 className="text-white font-extrabold text-xl sm:text-2xl mb-6 sm:mb-7 tracking-[-0.5px]">
          Settings
        </h2>

        {/* Tab bar — horizontally scrollable, no scrollbar shown */}
        <div
          className="flex gap-[2px] border-b border-white/10 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3 sm:px-4 py-2 sm:py-[9px] text-[12px] sm:text-[13px] font-semibold whitespace-nowrap rounded-t-[8px] transition
                ${
                  activeTab === t
                    ? "bg-gradient-to-r from-[#6857F6] to-[#A549E2] text-white"
                    : "text-white/45 hover:text-white/70"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrollable content area ── */}
      <div
        className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-9 py-5"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#6857F6 transparent",
        }}
      >
        {/* Webkit scrollbar styling */}
        <style>{`
          .settings-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .settings-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .settings-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #6857F6, #A549E2);
            border-radius: 99px;
          }
          .settings-scroll::-webkit-scrollbar-thumb:hover {
            background: #A549E2;
          }

          /* Hide scrollbar on tab bar */
          .tabs-no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          className="settings-scroll h-full overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#6857F6 transparent",
          }}
        >
          {activeTab === "Profile" && (
            <div className="bg-[linear-gradient(rgba(104,87,246,0.05)_0%,rgba(165,73,226,0.05)_100%),linear-gradient(90deg,rgba(27,27,27,0.5)_0%,rgba(27,27,27,0.5)_100%)] rounded-[16px] px-4 sm:px-6 lg:px-7 pt-5 sm:pt-7 pb-7 sm:pb-8">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-xl sm:text-[26px] font-extrabold text-white bg-gradient-to-r from-[#6857F6] to-[#A549E2]">
                      EG
                    </div>
                    <button className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border-2 border-[#0f1117] bg-gradient-to-r from-[#6857F6] to-[#A549E2]">
                      <Icon d={icons.camera} size={10} />
                    </button>
                  </div>

                  <div>
                    <div className="font-bold text-white text-sm sm:text-[15px]">
                      Emily Grace
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-white/40 mt-1">
                      UI Designer ·
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-[11px] rounded-[10px] font-bold text-[13px] sm:text-[14px] text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#6857F6] to-[#A549E2] transition hover:opacity-90"
                >
                  {saved ? (
                    <>
                      <Icon d={icons.check} size={14} />
                      Saved!
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  label="First Name"
                  value={form.firstName}
                  name="firstName"
                  icon={icons.user}
                />
                <Field
                  label="Last Name"
                  value={form.lastName}
                  name="lastName"
                  icon={icons.user}
                />
                <Field
                  label="Email"
                  value={form.email}
                  name="email"
                  icon={icons.mail}
                  verified
                />
                <Field
                  label="Phone Number"
                  value={form.phone}
                  name="phone"
                  icon={icons.phone}
                  verified
                />
                <Field
                  label="Occupation"
                  value={form.occupation}
                  name="occupation"
                  icon={icons.briefcase}
                />
                <SelectField
                  label="Country"
                  value={form.country}
                  name="country"
                  options={[
                    "Bangladesh",
                    "United States",
                    "United Kingdom",
                    "Canada",
                    "Australia",
                    "Germany",
                    "France",
                    "India",
                    "Nigeria",
                    "Brazil",
                  ]}
                />
              </div>

              {/* Bio — inner scroll when textarea grows */}
              <div className="mt-6">
                <label className="text-[13px] text-white/70 font-medium block mb-2">
                  Bio
                </label>
                <div className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] p-[1px] rounded-[12px]">
                  <textarea
                    placeholder={form.bio}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, bio: e.target.value }))
                    }
                    rows={10}
                    className="w-full bg-[#0f1117] rounded-[12px] px-4 py-3.5 text-white/80 text-[13px] leading-[1.75] outline-none resize-y"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "#6857F6 transparent",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Account" && (
            <PlaceholderTab
              icon={icons.user}
              title="Account Settings"
              desc="Manage your account details, username, and connected accounts."
            />
          )}
          {activeTab === "Notification" && (
            <PlaceholderTab
              icon={icons.bell}
              title="Notification Preferences"
              desc="Control how and when you receive alerts."
            />
          )}
          {activeTab === "Payment" && (
            <PlaceholderTab
              icon={icons.creditcard}
              title="Payment Methods"
              desc="Add or manage billing details and payout accounts."
            />
          )}
          {activeTab === "Security" && (
            <PlaceholderTab
              icon={icons.shield}
              title="Security"
              desc="Update password and enable two-factor authentication."
            />
          )}
          {activeTab === "Language" && (
            <PlaceholderTab
              icon={icons.language}
              title="Language & Region"
              desc="Set your preferred language and timezone."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
