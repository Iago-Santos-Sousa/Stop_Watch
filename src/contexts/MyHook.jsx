import { useState, useEffect } from "react";

const MyHook = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning && isPaused === false) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    // setIsRunning(false);
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return {
    isRunning,
    isPaused,
    elapsedTime,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default MyHook;
