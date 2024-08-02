import backtrend from "../../Assets/vibes/back-trend.png";
import shh from '../../Assets/vibes/shh.png'
import mainlogo from '../../Assets/logos/main-logo.png'

function TopSection() {
  return (
    <div className="w-full h-fit border-8 border-baseyellow">
      <div className="bg-baseyellow border-8 border-basered relative w-full h-80 ">
        <img src={backtrend} alt="trendsetta" className="w-20 h-fit absolute top-5" />
        <img src={shh} alt="trendsetta" className="absolute top-0" />
        <img src={mainlogo} alt="trendsetta" className="w-32 absolute " />
      </div>
    </div>
  );
}

export default TopSection;
