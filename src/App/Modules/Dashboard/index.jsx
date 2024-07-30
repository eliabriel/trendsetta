import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";

function Dashboard() {
  return (
    <div className="w-full flex flex-col space-y-0 min-h-screen bg-black font-akira italic">
      <TopBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
