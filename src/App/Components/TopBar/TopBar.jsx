import Logo from "../LogoContainer/Logo";
import { IoMenu } from "react-icons/io5";
import AppContext from "../../Provider/Context";
import { useContext, useState } from "react";
import NavButton from "../Buttons/NavButton";
import NavRSMenu from "../MenuList/NavRSMenu";
import { GiCrossMark } from "react-icons/gi";

function TopBar() {
  const { width } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const rightMenu = () => {
    return <div></div>;
  };

  return (
    <div className=" w-full border-y-4 border-basered text-basered flex items-center justify-between p-3">
      <div className="xxs:ml-3 md:ml-10">
        <Logo />
      </div>
      <div className="">
        <button
          className=" focus:outline-none md:hidden flex "
          onClick={toggleMenu}
        >
          {/* <IoMenu size={40} /> */}
          {isOpen ? (
            <div className="flex items-center justify-center">
            <GiCrossMark size={40} />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <IoMenu size={40} />
          </div>
        )
        }
        </button>
        {isOpen && (
          <div className="absolute z-[1] top-16 right-0 w-1/2 h-fit bg-baseyellow border-4 border-basered shadow-sm shadow-baseyellow">
            <NavRSMenu />
          </div>
        )}
      </div>
      <div className="xxs:hidden md:flex mr-10">
        <NavRSMenu />
      </div>
    </div>
  );
}

export default TopBar;
