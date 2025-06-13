import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("Vijay");
  const [showLogin, setShowLogin] = useState(false);

  const value = { user, setUser, showLogin, setShowLogin };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// We created a custom hook to access the AppContext using useContext
export const useAppContext = () => useContext(AppContext);
