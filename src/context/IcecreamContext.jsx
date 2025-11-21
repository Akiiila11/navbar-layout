import { useContext } from "react";
import { createContext } from "react";
import { iceCreamData } from "../assets/data/icecream";

const IcecreamContext = createContext();

export const IcecreamProvider = ({ children }) => {
  const value = {
    iceCreamData,
  };

  return (
    <IcecreamContext.Provider value={value}>
      {children}
    </IcecreamContext.Provider>
  );
};

export const useIcecreamContext = () => useContext(IcecreamContext);

