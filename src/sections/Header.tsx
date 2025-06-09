"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Projects", "About", "Contact"];

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              document
                .getElementById(tab.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`relative px-4 py-1.5 rounded-full text-sm transition-colors ${
              activeTab === tab
                ? "text-gray-900"
                : "text-white/80 hover:text-white"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-white rounded-full z-[-1]"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};
