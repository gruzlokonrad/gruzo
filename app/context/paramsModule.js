'use client';
import { createContext, useContext, useState } from "react";

const ParamModuleContext = createContext()

export const ParamModuleContextProvider = ({ children }) => {
  const [paramModule, setParamModule] = useState({});

  return (
    <ParamModuleContext.Provider value={{ paramModule, setParamModule }}>
      {children}
    </ParamModuleContext.Provider>
  )
};

export const useParamModuleContext = () => useContext(ParamModuleContext);