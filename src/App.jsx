import React from "react";
import "./App.css";
import MyHook from "./contexts/MyHook";
import Timer from "./components/Timer";
import ControlButtons from "./components/ControlButtons";

function App() {
  const {
    isRunning,
    isPaused,
    elapsedTime,
    startTimer,
    pauseTimer,
    resetTimer,
  } = MyHook();

  return (
    <div className="App">
      <h1>Cronômetro</h1>

      <Timer elapsedTime={elapsedTime} />
      <ControlButtons
        isRunning={isRunning}
        isPaused={isPaused}
        pauseTimer={pauseTimer}
        startTimer={startTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
