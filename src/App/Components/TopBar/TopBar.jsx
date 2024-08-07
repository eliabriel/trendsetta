import Logo from "../LogoContainer/Logo";
import { IoMenu } from "react-icons/io5";
import AppContext from "../../Provider/Context";
import { useContext, useState } from "react";
import NavButton from "../Buttons/NavButton";
import NavRSMenu from "../MenuList/NavRSMenu";
import { GiCrossMark } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri";

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
    <div className=" w-full border-t-4 border-baselightred text-baselightred flex items-center justify-between p-3">
      <div className="xxs:ml-3 m:ml-10">
        <Logo />
      </div>
      <div className="flex items-center space-x-3">
        <div><RiShoppingCartFill size={25} /></div>
        <button
          className=" focus:outline-none m:hidden flex "
          onClick={toggleMenu}
        >
          
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
      <div className="xxs:hidden m:flex mr-10">
        <NavRSMenu />
      </div>
    </div>
  );
}

export default TopBar;
