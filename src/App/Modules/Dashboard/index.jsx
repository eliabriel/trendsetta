import { Outlet } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";

function Dashboard() {
  return (
    <div className="relative w-full flex flex-col space-y-0 min-h-screen bg-white font-akira">
        <TopBar />
        <Outlet />
    </div>
  );
}

export default Dashboard;
