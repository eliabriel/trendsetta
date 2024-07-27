import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";

function Dashboard() {
  return (
    <div className="w-full h-full bg-black text-red">
      <TopBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
