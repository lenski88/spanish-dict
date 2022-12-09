import React from "react";
import { RouterProvider } from "react-router-dom";
import { DictContextProvider } from "./context/DictContext";
import { router } from "./routes/index";

function App() {
  return (
    <DictContextProvider>
      <RouterProvider router={router} />
    </DictContextProvider>
  );
}

export default App;
