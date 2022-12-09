import React, { useState, useEffect } from "react";
import { Dict, Lang } from "../../types/types";

interface Props {
  dict: Dict[] | [];
  cbDictUpd: (data: Dict[]) => void;
}

export const HomeForm: React.FC<Props> = ({ dict, cbDictUpd }) => {
  const [data, setData] = useState(dict);
  const [wordRu, setWordRu] = useState<string>("");
  const [wordEs, setWordEs] = useState<string>("");

  useEffect(() => {
    setData(dict);
  }, [dict]);

  useEffect(() => {
    cbDictUpd(data);
  }, [JSON.stringify(data)]);

  const changeWord = (eo: React.FormEvent<HTMLInputElement>) => {
    const target = eo.target as HTMLInputElement;
    target.id === Lang.RU ? setWordRu(target.value) : setWordEs(target.value);
  };

  const addWord = () => {
    if (!wordRu || !wordEs) return;
    const newWord = {
      ru: wordRu,
      es: wordEs,
    };
    setData([...data, newWord]);
    setWordRu("");
    setWordEs("");
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
