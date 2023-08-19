import { MainType } from "../types/myTypes";

const ControlButtons = ({
  isRunning,
  isPaused,
  pauseTimer,
  startTimer,
  resetTimer,
}: MainType): JSX.Element => {
  const StartButton = (
    <button className="btn-start" onClick={startTimer}>
      Iniciar
    </button>
  );

  const ActiveButtons = (
    <>
      <button
        className={`${isPaused ? "btn-active" : "btn-resume"}`}
        onClick={pauseTimer}
      >
        {isPaused ? "Retomar" : "Pausar"}
      </button>
      <button className="btn-reset" onClick={resetTimer}>
        Zerar
      </button>
    </>
  );
  return (
    <div className="controlButtons">
      {isRunning ? ActiveButtons : StartButton}
    </div>
  );
};

export default ControlButtons;
