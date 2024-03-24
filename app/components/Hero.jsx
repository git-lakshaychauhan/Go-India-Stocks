"use client";
import React, { useState } from "react";
import Discussion from "./Disscussion/Discussion";
import Market from "./Market/Market";
import Sidebar from "./Sidebar/Sidebar";

const Hero = () => {
  const [isOpen, setIsOpen] = useState("false");
  const [activeTab, setActiveTab] = useState("discussion");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`bg-gray-200 min-h-screen px-[2rem] py-[1rem] ${
        isOpen ? "sm:w-[80%] sm:ml-[20%]" : "w-full"
      }`}
    >
      <div className="flex justify-center p-4 bg-white shadow md:hidden">
        <button
          className={`mx-2 px-4 py-2 text-sm font-semibold ${
            activeTab === "discussion"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("discussion")}
        >
          Discussion Forum
        </button>
        <button
          className={`mx-2 px-4 py-2 text-sm font-semibold ${
            activeTab === "market"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("market")}
        >
          Market Stories
        </button>
      </div>
      {/* Content */}
      <div className="p-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="md:hidden">
          {activeTab === "discussion" ? <Discussion /> : <Market />}
        </div>

        <div className="hidden md:flex md:flex-row gap-[2rem]">
          <div className="flex-1" style={{ flex: "60%" }}>
            <Discussion />
          </div>
          <div className="flex-1" style={{ flex: "40%" }}>
            <Market />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
