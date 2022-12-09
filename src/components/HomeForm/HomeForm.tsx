import React, { useState, useEffect, useContext } from "react";
import { DictContext } from "../../context/DictContext";
import { Dict, Lang } from "../../types/types";

export const HomeForm = () => {
  const { dict, updDictHandler } = useContext(DictContext);
  const [data, setData] = useState(dict);
  const [wordRu, setWordRu] = useState<string>("");
  const [wordEs, setWordEs] = useState<string>("");

  useEffect(() => {
    setData(dict);
  }, [dict]);

  const isWordExist = (word: string): boolean => {
    return data.some((pair: Dict) => pair.es === word);
  };

  const changeWord = (eo: React.FormEvent<HTMLInputElement>) => {
    const target = eo.target as HTMLInputElement;
    target.id === Lang.RU ? setWordRu(target.value) : setWordEs(target.value);
  };

  const addWord = () => {
    if (!wordRu || !wordEs) return;
    if (isWordExist(wordEs)) {
      alert("Слово уже есть в словаре");
      return;
    }
    const newWord = {
      ru: wordRu,
      es: wordEs,
    };
    const newData = [...data, newWord];
    setData(newData);
    setWordRu("");
    setWordEs("");
    updDictHandler(newData);
  };

  return (
    <div>
      <form>
        <label htmlFor={Lang.RU}>Слово на руском:</label>
        <br />
        <input type="text" value={wordRu} id={Lang.RU} onChange={changeWord} />
        <br />
        <label htmlFor={Lang.ES}>Слово на испанском:</label>
        <br />
        <input type="text" value={wordEs} id={Lang.ES} onChange={changeWord} />
      </form>
      <button onClick={addWord}>Добавить слово</button>
    </div>
  );
};
