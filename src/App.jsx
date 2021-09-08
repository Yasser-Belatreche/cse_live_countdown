import React from "react";

// context
import { GetContext } from "./context";

// components
import HomePage from "./components/HomePage";

function App() {
  const contextValues = GetContext();
  console.log(contextValues);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
