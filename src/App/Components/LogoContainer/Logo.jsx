import logo from "../../Assets/logos/main-logo.png";

function Logo() {
  return (
    <div className="w-fit h-fit">
      <div className=" w-fit h-fit">
        <img src={logo} alt="Logo" className="w-20" />
      </div>
    </div>
  );
}

export default Logo;
