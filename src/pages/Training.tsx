import React, { useState, useContext, useEffect } from "react";
import { DictContext } from "../context/DictContext";
import { Dict, Lang, Statistic } from "../types/types";
import { ChoiceDirectionTraining } from "../components/ChoiceDirectionTraining/ChoiceDirectionTraining";
import { randomElement } from "../utils/utils";

export const Training = () => {
  const { dict } = useContext(DictContext);
  const [data, setData] = useState<Dict[] | null>(dict);
  console.log(data);
  const [direction, setDirection] = useState<string | null>(null);
  const [statistic, setStatistic] = useState<Statistic>({
    correct: 0,
    incorrect: 0,
    all: dict.length,
  });
  const [currentWord, setCurrentWord] = useState<Dict | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    setData(dict);
  }, [dict]);

  useEffect(() => {
    const newData = data?.filter((_v, i) => i !== currentIdx);
    setData(newData as Dict[]);
    const el = randomElement(0, (newData?.length as number) - 1);
    setCurrentIdx(el);
    setCurrentWord(data?.[el] as Dict);
  }, [statistic]);

  const changeAnswer = (eo: React.FormEvent) => {
    const target = eo.target as HTMLInputElement;
    setAnswer(target.value);
  };

  const setDirectionTraining = (direction: string) => {
    setDirection(direction);
  };

  const answerHandler = () => {
    if (!answer) return;
    switch (direction) {
      case Lang.ES:
        if (answer === currentWord?.ru) {
          setStatistic({
            ...statistic,
            correct: statistic.correct + 1,
          });
        } else {
          setStatistic({
            ...statistic,
            incorrect: statistic.incorrect + 1,
          });
        }
        break;
      case Lang.RU:
        if (answer === currentWord?.es) {
          setStatistic({
            ...statistic,
            correct: statistic.correct + 1,
          });
        } else {
          setStatistic({
            ...statistic,
            incorrect: statistic.incorrect + 1,
          });
        }
        break;
    }
    setAnswer("");
  };

  if (!direction)
    return <ChoiceDirectionTraining cbSetDirection={setDirectionTraining} />;
  if (!data?.length)
    return (
      <>
        <p>Правильно: {statistic.correct}</p>
        <p>Неправильно: {statistic.incorrect}</p>
        <p>Всего слов: {statistic.all}</p>
        <p>
          Процент: {((statistic.correct / statistic.all) * 100).toFixed(2)}%
        </p>
      </>
    );
  return (
    <div>
      <p>{direction === Lang.ES ? currentWord?.es : currentWord?.ru}</p>
      <label>Введите перевод:</label>
      <br />
      <input type="text" value={answer} onChange={changeAnswer} />
      <button onClick={answerHandler}>Ответить</button>
    </div>
  );
};
