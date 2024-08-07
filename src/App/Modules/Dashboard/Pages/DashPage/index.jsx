import { useContext } from "react";
import AppContext from "../../../../Provider/Context";
import TopSection from "../../../../Components/TopSection/TopSection";
import DashBody from "../../../../Components/DashBody/DashBody";

function DashPage() {
  const { user, setUser, width } = useContext(AppContext);


  console.log(width)
  return (
    <div className="w-full h-full text-baselightred mt-10">
      {/* <div className="w-fit h-auto">this is the DashPage</div> */}
      {/* <TopSection /> */}
      <DashBody />
      <p className="">and the user is: {user}</p>
      <p className="">page width is: {width} px</p>
    </div>
  );
}

export default DashPage;
