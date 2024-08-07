import { useContext } from "react";
import AppContext from "../../Provider/Context";

function HorizontalBar() {
  const { width } = useContext(AppContext)
  
 return (
   <div>
      <div className="bg-basedarkred overflow-hidden flex xxs:space-x-3 xxs:text-xs ">
        <p>trendsetta</p>
        <p>trendsetta</p>
        <p>trendsetta</p>
        <p>trendsetta</p>
      </div>
   </div>
 ) 
}

export default HorizontalBar;