import React, { useEffect, useState } from "react";

// styles
import styles from "../styles/timerPage.module.scss";

// images and icons
import cseLogo from "../images/cse_logo.svg";
import pauseIcon from "../images/pause.svg";
import startIcon from "../images/start.svg";
import restartIcon from "../images/restart.svg";
import left_arrowIcon from "../images/left_arrow.svg";

// context
import { GetContext } from "../context";

// components
import { Background } from "../components/Background";
import { PrimaryHeader, SecondaryHeader } from "../components/Headers";
import IconButton from "../components/buttons/IconButton";

const TimerPage = () => {
  const {
    time: { seconds, minuts },
  } = GetContext();

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    seconds: formatNumber(Number(seconds)),
    minuts: formatNumber(Number(minuts)),
  });

  return (
    <div className={styles.timerPage}>
      <Background />
      <Headers />
      <Timer
        isTimerStart={isTimerStart}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <ActionButtons
        isTimerStart={isTimerStart}
        setIsTimerStart={setIsTimerStart}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
};

const Headers = () => {
  const {
    inputs: { firstText, secondText },
  } = GetContext();

  return (
    <div className={styles.headers}>
      <PrimaryHeader left>{firstText}</PrimaryHeader>
      <SecondaryHeader>{secondText}</SecondaryHeader>
    </div>
  );
};

const Timer = ({ isTimerStart, currentTime, setCurrentTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      startCountDown(currentTime, setCurrentTime, isTimerStart);
    }, 1000);

    if (stopInterval(isTimerStart, currentTime)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerStart, currentTime, setCurrentTime]);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.logoContainer}>
        <img src={cseLogo} alt="logo" />
      </div>
      <div className={styles.textContainer}>
        <h1>We're starting in</h1>
        <div className={styles.timeContainer}>
          <p>{currentTime.minuts}</p>
          <span>:</span>
          <p>{currentTime.seconds}</p>
        </div>
      </div>
    </div>
  );
};

const startCountDown = (currentTime, setCurrentTime) => {
  const { seconds, minuts } = currentTime;

  if (Number(seconds) >= 1) {
    setCurrentTime({
      ...currentTime,
      seconds: formatNumber(Number(seconds) - 1),
    });
  } else {
    setCurrentTime({
      minuts: formatNumber(Number(minuts) - 1),
      seconds: 59,
    });
  }
};

const stopInterval = (isTimerStart, currentTime) => {
  const seconds = Number(currentTime.seconds);
  const minuts = Number(currentTime.minuts);
  return !isTimerStart || (seconds === 0 && minuts === 0);
};

const formatNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  }
  return number;
};

const ActionButtons = ({ isTimerStart, setIsTimerStart, setCurrentTime }) => {
  const {
    time: { seconds, minuts },
    setIsTimerSet,
  } = GetContext();

  const handleRestart = () => {
    setIsTimerStart(false);
    setCurrentTime({
      seconds: formatNumber(Number(seconds)),
      minuts: formatNumber(Number(minuts)),
    });
  };

  return (
    <div className={styles.buttonsContainer}>
      <IconButton
        bgColor="primary"
        iconSrc={left_arrowIcon}
        onClick={() => setIsTimerSet(false)}
      />
      <IconButton
        bgColor="red"
        iconSrc={isTimerStart ? pauseIcon : startIcon}
        onClick={() => setIsTimerStart(!isTimerStart)}
      />
      <IconButton
        bgColor="secondary"
        iconSrc={restartIcon}
        onClick={handleRestart}
      />
    </div>
  );
};

export default TimerPage;
