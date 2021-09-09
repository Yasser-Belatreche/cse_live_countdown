import React from "react";

// context
import { GetContext } from "./context";

// pages
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";

function App() {
  const { isTimerSet } = GetContext();

  return <>{!isTimerSet ? <HomePage /> : <TimerPage />}</>;
}

export default App;
