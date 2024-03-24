import "./style.css";
const MarketStory = ({ mark }) => {
  return (
    <div className="mains w-[100% h-[100%]] flex items-center justify-center ">
      <div className="flex flex-col w-[60%] max-[1150px]:w-[80%] bg-white mb-[1rem] shadow-xl height-[50%] effect max-[768]:w-[8rem] max-[768]:h-[15rem] fix  ">
        <div className="image" style={{ flex: "60%", width: "100%" }}>
          <img
            src={mark.img}
            style={{
              width: "100%",
              height: "11rem",
              objectFit: "cover",
            }}
            alt="Market Image"
          />
        </div>
        <div
          className="content p-[0.5rem]"
          style={{
            flex: "40%",

            width: "100%",
            height: "5rem",
          }}
        >
          <div className="title text-left text-lg adjusttext font-bold ">
            {mark.title}
          </div>
          <div className="description text-left adjusttext text-sm ">
            {mark.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStory;
