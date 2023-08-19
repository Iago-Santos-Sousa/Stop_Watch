const Timer = ({ elapsedTime }) => {
  const hours = Math.floor(elapsedTime / 360000);
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = (elapsedTime / 10) % 100;

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
