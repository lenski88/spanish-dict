import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeForm } from "../components/HomeForm/HomeForm";

export const Home = () => {
  const navigate = useNavigate();
  const startTraining = () => {
    navigate("/training");
  };
  return (
    <>
      <HomeForm />
      <button onClick={startTraining}>Начать тренировкку</button>
    </>
  );
};
