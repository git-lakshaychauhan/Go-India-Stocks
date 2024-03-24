import Discuss from "./Discuss";
import data from "./data";

const Discussion = () => {
  return (
    <div className="w-full h-full" id="disscussion">
      <div className="heading text-2xl text-red-600 font-bold hidden md:block max-w-[768px]:hidden mb-[2rem] ">
        DISSCUSSION FORUM
      </div>

      {data.map((el) => (
        <Discuss val={el} key={el.id} />
      ))}
    </div>
  );
};

export default Discussion;
