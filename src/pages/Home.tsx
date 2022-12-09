import React, { useEffect, useState } from "react";
import { getDict, updateDict } from "../fetch/fetch";
import { HomeForm } from "../components/HomeForm/HomeForm";
import { Dict } from "../types/types";

export const Home = () => {
  const [dict, setDict] = useState<Dict[] | []>([]);

  useEffect(() => {
    const callApi = async () => {
      const data = await getDict();
      setDict(data);
    };
    callApi();
  }, []);

  const updDictHandler = (data: Dict[]) => {
    const callAPI = async () => {
      const newDict = await updateDict(JSON.stringify(data));
      setDict(newDict);
    };
    callAPI();
  };

  return <HomeForm dict={dict} cbDictUpd={updDictHandler} />;
};
