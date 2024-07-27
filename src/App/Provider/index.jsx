import { useState } from "react";
import AppContext from "./Context";

function AppProvider({ children }) {
  const [user, setUser] = useState(0);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
