import { useState, useEffect } from "react";
import { MainType } from "../types/myTypes";

const MyHook = (): MainType => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isRunning && isPaused === false) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const startTimer = (): void => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = (): void => {
    // setIsRunning(false);
    setIsPaused(!isPaused);
  };

  const resetTimer = (): void => {
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
