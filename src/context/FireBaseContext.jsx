import React, { createContext } from "react";
import { Children } from "react";

const dataContext = createContext(null);

const DataContextProvider = ({ children }) => {
 
  const value = {
    name:"someone "
  };
 
 
  return <dataContext.Provider value={value}>{Children}</dataContext.Provider>;
};


export default DataContextProvider;
