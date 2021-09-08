import React, { useContext, createContext, useState } from "react";

export const GlobalContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [time, setTime] = useState({ minuts: "00", seconds: "00" });
  const [inputs, setInputs] = useState({ firstText: "", secondText: "" });

  return (
    <GlobalContext.Provider value={{ time, setTime, inputs, setInputs }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GetContext = () => {
  return useContext(GlobalContext);
};

export default ContextProvider;
