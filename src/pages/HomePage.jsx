import React from "react";

// styles
import styles from "../styles/homePage.module.scss";

// images
import cseLogo from "../images/cse_logo.svg";

// helpers
import { getFirstSecondInputData } from "../utils/inputsData";

// context
import { GetContext } from "../context";

// components
import { Background } from "../components/Background";
import { PrimaryHeader } from "../components/Headers";
import Input from "../components/inputs/TextInput";
import TimeInput from "../components/inputs/TimeInput";
import Button from "../components/buttons/Button";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Background />
      <PrimaryHeader>
        CSE’S LIVE <br /> COUNTDOWN
      </PrimaryHeader>

      <InputsPanel />

      <div className={styles.logo}>
        <img src={cseLogo} alt="cse logo" />
      </div>
    </div>
  );
};

const InputsPanel = () => {
  return (
    <div className={styles.inputsPanel}>
      <InputsContainer />
      <ButtonsContainer />
    </div>
  );
};

const InputsContainer = () => {
  const { time, setTime, inputs, setInputs } = GetContext();

  const handleTextInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleTimeInputChange = (e) => {
    const timeType = e.target.name;
    const lastValue = e.target.value;

    if (timeValueValid(timeType, lastValue)) {
      setTime({ ...time, [timeType]: lastValue });
    }
  };

  const handleTimeInputKeydown = (e) => {
    if (e.key === "ArrowDown") {
      timeValuekeydownAction(e, "increment", time, setTime);
    } else if (e.key === "ArrowUp") {
      timeValuekeydownAction(e, "decrement", time, setTime);
    }
  };

  const inputsData = getFirstSecondInputData(
    inputs.firstText,
    inputs.secondText,
    handleTextInputChange
  );

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.textInputs}>
        {inputsData.map((inputData, index) => {
          return <Input key={index} {...inputData} />;
        })}
      </div>

      <div className={styles.timeInput}>
        <TimeInput
          name="minuts"
          type="text"
          value={time.minuts}
          onChange={handleTimeInputChange}
          onKeyDown={handleTimeInputKeydown}
        />
        <span>:</span>
        <TimeInput
          name="seconds"
          type="text"
          value={time.seconds}
          onChange={handleTimeInputChange}
          onKeyDown={handleTimeInputKeydown}
        />
      </div>
    </div>
  );
};

const timeValueValid = (type, value) => {
  if (isSeconds(type) && isValidSecondsValue(value)) {
    return true;
  } else if (isMinuts(type) && isValidMinutsValue(value)) {
    return true;
  }
  return false;
};

const isSeconds = (type) => type === "seconds";
const isValidSecondsValue = (value) =>
  Number(value) <= 60 && Number(value) >= 0;

const isMinuts = (type) => type === "minuts";
const isValidMinutsValue = (value) => Number(value) <= 99 && Number(value) >= 0;

const timeValuekeydownAction = (e, action, time, setTime) => {
  const timeType = e.target.name;
  const newValue =
    action === "increment"
      ? Number(e.target.value) + 1
      : Number(e.target.value) + 1;

  if (timeValueValid(timeType, newValue)) {
    setTime({ ...time, [e.target.name]: newValue });
  }
};

const ButtonsContainer = () => {
  const { setIsTimerSet } = GetContext();

  const handleStartButtonClick = () => {
    // * validate the inputs before submitting
    setIsTimerSet(true);
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button secondary>edit timer</Button>
      <Button primary onClick={handleStartButtonClick}>
        start
      </Button>
    </div>
  );
};

export default HomePage;
