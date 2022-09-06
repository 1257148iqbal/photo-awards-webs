import React, { useEffect, useState } from "react";
import "../../assets/styles/results.css";


const initialTime = {
  days: "",
  hours: "",
  minutes: "",
  seconds: "",
};

const Results = () => {
  //#region State
  const [expiryTime, setExpiryTime] = useState("30 august 2023 15:30:25");
  const [countdownTime, setCountdownTime] = useState(initialTime);
  //#endregion

  //#region UDF's
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningTime = {
        days: totalDays,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
      };

      setCountdownTime(runningTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };
  //#endregion

  //#region Effect
  useEffect(() => {
    countdownTimer();
  });
  //#endregion

  return (
    <div className="wrapper row align-middle">
      <div className="countdown">
        <div className="box">
          <span className="text">Days</span>
          <span className="num" id="day-box">
            {countdownTime.days}
          </span>
        </div>
        <div className="box">
          <span className="text">Hours</span>
          <span className="num" id="hr-box">
          {countdownTime.hours}
          </span>
        </div>
        <div className="box">
          <span className="text">Minutes</span>
          <span className="num" id="min-box">
          {countdownTime.minutes}
          </span>
        </div>
        <div className="box">
          <span className="text">Seconds</span>
          <span className="num" id="sec-box">
          {countdownTime.seconds}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Results;
