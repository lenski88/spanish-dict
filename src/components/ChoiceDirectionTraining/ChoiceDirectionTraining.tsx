import React from "react";
import { Lang } from "../../types/types";

interface Props {
  cbSetDirection: (direction: string) => void;
}

export const ChoiceDirectionTraining: React.FC<Props> = ({
  cbSetDirection,
}) => {
  const setDirection = (eo: React.MouseEvent) => {
    const target = eo.target as HTMLElement;
    cbSetDirection(target.id === Lang.ES ? Lang.ES : Lang.RU);
  };
  return (
    <div>
      <p>Выберите тренировку:</p>
      <button id={Lang.ES} onClick={setDirection}>
        ES-RU
      </button>
      <button id={Lang.RU} onClick={setDirection}>
        RU-ES
      </button>
    </div>
  );
};
