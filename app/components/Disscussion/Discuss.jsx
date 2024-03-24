import React, { useState } from "react";
import "./style.css";

const Discuss = ({ val }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`h-[10rem] w-[100%] mb-[3rem]  `}>
      <div
        className="max-[550px]:p-[0.2rem] p-[1rem] bg-white shadow-lg max-[900px]:text-[0.7rem]  max-[850px]:text-[0.5rem] max-[575px]:text-sm  max-[400px]:text-xs   max-[500px]:p-[0.1rem ] 
       max-[785px]:text-[0.7rem] effect2"
      >
        <div className="top flex items-center justify-between max-[900px]:gap-[0.5rem] max-[400px]:gap-[0]">
          <div className="left-top flex gap-[2rem] max-[1050px]:gap-[0.5rem] max-[530px]:gap-[0.5rem] mb-[1rem] max-[765px]:mb-[0.5rem] items-center justify-between">
            <span className="profile rounded-full">
              <img
                src={val.url}
                style={{ width: "3rem" }}
                alt="Image is displayed"
              />
            </span>

            <span className="name ">{val.username}</span>
            <span className="sector text-white px-[0.5rem] md:px-[0.3rem] py-[0.1rem] bg-[#335cd0] rounded-lg">
              {val.sector}
            </span>
          </div>
          <div className="posted mt-[-3rem] font-semibold text-[#1b82e6]">
            {val.posted}
          </div>
        </div>
        <div className="content mb-[1.5rem] max-[765px]:mb-[1rem]">
          {val.desc}
        </div>
        <div className="buttons flex items-center max-[530px]:gap-[0.5rem] justify-between px-[4rem] max-[1200px]:px-[1rem] max-[530px]:px-[0.5rem]  ">
          <span
            className="flex items-center justify-center gap-1"
            onClick={toggleLike}
            style={{ cursor: "pointer" }}
          >
            <img
              src={
                liked ? "./assets/images/liked.svg" : "./assets/images/like.svg"
              }
              alt="Like"
            />{" "}
            {val.like}
          </span>
          <span className="flex items-center justify-center gap-1">
            <img src="./assets/images/watched.svg" />
            {val.watched}
          </span>
          <span className="flex items-center justify-center gap-1">
            <img src="./assets/images/comments.svg" />
            {val.comments}
          </span>
          <span className="flex items-center justify-center gap-1">
            {" "}
            <img src="./assets/images/share.svg" />
            share
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
