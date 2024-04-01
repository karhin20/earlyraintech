// alertContext.js
import { createContext, useContext } from "react";


const AlertContext = createContext();

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertContextProvider");
  }
  return context;
};

export const AlertContextProvider = ({ children }) => {
  const onOpen = (type, message) => {
    // Define your alert logic here
    console.log(`Alert Type: ${type}, Message: ${message}`);
  };

  return <AlertContext.Provider value={{ onOpen }}>{children}</AlertContext.Provider>;
};