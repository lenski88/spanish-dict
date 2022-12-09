/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from "react";
import { getDict, updateDict } from "../fetch/fetch";

export const DictContext = createContext();

export const DictContextProvider = ({ children }) => {
  const [dict, setDict] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const data = await getDict();
      setDict(data);
    };
    callApi();
  }, []);

  const updDictHandler = (data) => {
    const callAPI = async () => {
      const newDict = await updateDict(JSON.stringify(data));
      setDict(newDict);
    };
    callAPI();
  };

  return (
    <DictContext.Provider value={{ dict, updDictHandler }}>
      {children}
    </DictContext.Provider>
  );
};
