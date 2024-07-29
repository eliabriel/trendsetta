import NavButton from "../Buttons/NavButton";

function NavRSMenu() {
  return (
    <div className="flex *:text-xs xxs:flex-col xxs:my-5 xxs:space-y-10 xxs:items-center md:space-y-0 md:flex-row md:space-x-40">
      <div className="flex xxs:flex-col xxs:space-y-10 xxs:items-center md:space-y-0 md:flex-row md:space-x-36">
        <NavButton btnname={"accessories"} link={"#"} />
        <NavButton btnname={"limited"} link={"#"} />
        <NavButton btnname={"about"} link={"#"} />
      </div>
      <div>
        <NavButton btnname={"login"} link={"#"} />
      </div>
    </div>
  );
}

export default NavRSMenu;
