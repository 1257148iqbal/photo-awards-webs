import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../assets/styles/results.css";

const initialTime = {
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
  
  const renderDay = () => {
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{countdownTime.days}</div>
        <div className="text">Days</div>
      </div>
    );
  };

  const renderHours = () => {
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{countdownTime.hours}</div>
        <div className="text">Hours</div>
      </div>
    );
  };

  const renderMinutes = () => {
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{countdownTime.minutes}</div>
        <div className="text">Minutes</div>
      </div>
    );
  };

  const renderSeconds = () => {
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{countdownTime.seconds}</div>
        <div className="text">Seconds</div>
      </div>
    );
  };

  return (
    <div className="row text-center me-60">
      <div className="col">
        <div className="btn-group my-3">
          {expiryTime !== false ? (
            <>
              <div className="timer-wrapper">
                <CountdownCircleTimer
                  isPlaying
                  duration={countdownTime.days}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[countdownTime.days, countdownTime.hours, countdownTime.minutes, countdownTime.seconds]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                 {renderDay}
                </CountdownCircleTimer>

                <CountdownCircleTimer
                  isPlaying
                  duration={countdownTime.hours}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[countdownTime.days, countdownTime.hours, countdownTime.minutes, countdownTime.seconds]}
                  onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                >
                 {renderHours}
                </CountdownCircleTimer>

                <CountdownCircleTimer
                  isPlaying
                  duration={countdownTime.minutes}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[countdownTime.days, countdownTime.hours, countdownTime.minutes, countdownTime.seconds]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                 {renderMinutes}
                </CountdownCircleTimer>

                <CountdownCircleTimer
                  isPlaying
                  duration={countdownTime.seconds}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[countdownTime.days, countdownTime.hours, countdownTime.minutes, countdownTime.seconds]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1})}
                >
                 {renderSeconds}
                </CountdownCircleTimer>
              </div>
              
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
