import backtrend from "../../Assets/vibes/back-trend.png";

function TopSection() {
  return (
    <div className="w-full h-fit border-8 border-baseyellow">
      <div className="bg-baseyellow border-8 border-basered grid place-items-center">
        <img src={backtrend} alt="trendsetta" className="" />
      </div>
    </div>
  );
}

export default TopSection;
