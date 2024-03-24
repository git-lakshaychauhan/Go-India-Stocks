import React from "react";
import Link from "next/link";
import Sidebarcss from "./Sidebar.css";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, setIsOpen }) => {
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`fixed top-1/2 left-0  bg-[#1a47ca] shadow-lg h-24 w-4 flex flex-col  ${
        isOpen ? "menu-bar fixed" : ""
      }`}
      style={{
        animation: `${isOpen ? "slideIn" : "slideOut"} 0.3s linear`,
      }}
    >
      {/* Icon */}
      <div
        className={`text-white py-[0.2rem]  mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] top-[30%] left-0 absolute ${
          isOpen ? "arrow" : ""
        }`}
        onClick={toggle}
      >
        {isOpen ? (
          <img
            className="hover:cursor-pointer"
            src="./assets/images/left-arrow.svg"
          />
        ) : (
          <svg
            className="hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="2rem"
            viewBox="0 0 434.002 434.002"
            fill="currentColor"
          >
            <path d="M95.457,434.002l-33.105-45.076l234.094-171.928L62.352,45.077L95.456,0L360.24,194.459c7.174,5.269,11.41,13.638,11.41,22.539c0,8.9-4.236,17.27-11.41,22.538L95.457,434.002z" />
          </svg>
        )}
      </div>

      {isOpen ? (
        <motion.div
          className="menu-content"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "linear", duration: 0.3 }}
        >
          <div className="menu-top pb-10 flex items-center justify-center gap-2 md:gap-2 sm:px-2 mb-[5rem] pt-10 border-b-4 border-b-gray-400 hover:cursor-pointer text-xs md:text-lg  ">
            <div className="user flex items-center justify-center md:gap-[0.3rem] ">
              <img
                className="mt-[-0.5rem] inline-block"
                src="./assets/images/men2.png"
                height={20}
                width={40}
              />
              <span className="text-xs md:text-sm   text-white">
                Hello,User
              </span>
            </div>

            <div className="notification">
              <img src="./assets/images/notify.png" height={20} width={60} />
            </div>
          </div>
          <div className="links text-lg max-[1050px]:text-[0.8rem] max-[750px]:text-[1rem]   flex flex-col items-center justify-center ">
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem]  hover:bg-blue-700">
                Discussion Forum
              </div>
            </Link>
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Market Stories
              </div>
            </Link>{" "}
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Sentiment
              </div>
            </Link>{" "}
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Market
              </div>
            </Link>{" "}
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Sector
              </div>
            </Link>{" "}
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Watchlist
              </div>
            </Link>
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                Events
              </div>
            </Link>
            <Link href="/">
              <div className="text-white py-[0.2rem]  max-[430px]:px-[0.5rem] px-[0.5rem] md:px-[2rem] mb-[0.5rem] md:mb-[1rem] lg:md-[2rem] hover:bg-blue-700">
                News/Interview
              </div>
            </Link>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Sidebar;
