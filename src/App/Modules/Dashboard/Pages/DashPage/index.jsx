import { useContext } from "react";
import AppContext from "../../../../Provider/Context";

function DashPage() {
  const { user, setUser } = useContext(AppContext);
  return (
    <div className="w-full h-full bg-gray-400 text-red-500">
      <div className="w-fit h-auto">this is the DashPage</div>
      <p className="">and the user is: {user}</p>
    </div>
  );
}

export default DashPage;
