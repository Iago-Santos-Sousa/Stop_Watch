export interface MainType {
  isRunning: boolean;
  isPaused: boolean;
  elapsedTime: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}
