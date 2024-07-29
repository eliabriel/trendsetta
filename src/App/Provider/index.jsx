import { useState, useEffect } from "react";
import AppContext from "./Context";

function AppProvider({ children }) {
  const [user, setUser] = useState(0);
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        width,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
