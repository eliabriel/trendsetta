import { useState } from "react";

export default function Newsletter() {
  const [emailValue, setEmailValue] = useState('')
  
  const handleChange = (e) => {
    setEmailValue(e.target.value );
  }
  
  console.log(emailValue)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`email submitted ${emailValue}`);
  }
  
  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} className="flex space-x-3 ">
          <input className="w-2/3 border-2 border-black rounded-md" type="email" value={emailValue} onChange={handleChange} required />
          <button type="submit" className=" bg-baselightred xxs:text-[9px] xxs:px-3 text-center rounded-md text-white">Newletter</button>
        </form>
      </div>
    </div>
  )
}