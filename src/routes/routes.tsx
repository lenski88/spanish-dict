import React from "react";
import { Home } from "../pages/Home";
import { Training } from "../pages/Training";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "training",
    element: <Training />,
  },
];
