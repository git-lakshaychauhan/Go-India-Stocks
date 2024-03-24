import data from "./data";
import MarketStory from "./MarketStory";
const Market = () => {
  return (
    <div
      className="flex-col justify-centers items-center w-full h-full"
      id="market"
    >
      <div className=" heading text-2xl text-red-600 font-bold hidden md:block max-w-[768px]:hidden mb-[2rem]   ">
        <div className="flex items-center justify-center ">MARKET STORIES</div>
      </div>
      {data.map((el) => (
        <MarketStory mark={el} id={el.id} />
      ))}
    </div>
  );
};

export default Market;
