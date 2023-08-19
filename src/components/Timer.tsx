type TimerCount = {
  elapsedTime: number;
};

const Timer = ({ elapsedTime }: TimerCount): JSX.Element => {
  const hours: number = Math.floor(elapsedTime / 360000);
  const minutes: number = Math.floor(elapsedTime / 60000);
  const seconds: number = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds: number = (elapsedTime / 10) % 100;

  // if (elapsedTime === 1000) {
  //   console.log("chegou a 1 segundo");
  // }

  return (
    <div className="timer">
      <span>
        {`${hours.toString().padStart(2, "0")}`} :{" "}
        {`${minutes.toString().padStart(2, "0")}`} :{" "}
        {`${seconds.toString().padStart(2, "0")}`}
      </span>
      <span className="mil-seconds">
        .{milliseconds.toString().padStart(2, "0").slice(-2)}
      </span>
    </div>
  );
};

export default Timer;
