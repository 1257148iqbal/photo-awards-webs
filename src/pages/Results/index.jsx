import React, { useEffect, useState } from "react";

const initialTime={
  days: "",
  hours: "",
  minutes: "",
  seconds: "",
};

const Results = () => {
  //#region State
  const [expiryTime, setExpiryTime] = useState("25 july 2022 15:30:25");
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
    <div className="row text-center">
      <div className="col">
        <div className="btn-group my-3">
          {expiryTime !== false ? (
            <>
              <button type="button" className="btn btn-outline-success">
                {countdownTime.days} Days
              </button>
              <button type="button" className="btn btn-success">
                :
              </button>
              <button type="button" className="btn btn-outline-success">
                {countdownTime.hours} Hours
              </button>
              <button type="button" className="btn btn-success">
                :
              </button>
              <button type="button" className="btn btn-outline-success">
                {countdownTime.minutes} Minutes
              </button>
              <button type="button" className="btn btn-success">
                :
              </button>
              <button type="button" className="btn btn-outline-success">
                {countdownTime.seconds} Seconds
              </button>
            </>
          ) : (
            <p>Deal has been Expired</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Results;
