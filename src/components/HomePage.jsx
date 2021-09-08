import React from "react";

// styles
import styles from "../styles/homePage.module.scss";

// images
import cseLogo from "../images/cse_logo.svg";

// context
import { GetContext } from "../context";

// components
import { Background } from "./Background";
import { PrimaryHeader } from "./Headers";

const HomePage = () => {
  const { time, setTime, inputs, setInputs } = GetContext();

  return (
    <Background>
      <div className={styles.homePage}>
        <PrimaryHeader>
          cse's live <br /> countdown
        </PrimaryHeader>

        <InputsPanel />

        <div className={styles.logo}>
          <img src={cseLogo} alt="cse logo" />
        </div>
      </div>
    </Background>
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

  return <div className={styles.inputsContainer}></div>;
};

const ButtonsContainer = () => {
  return <div className={styles.buttonContainer}></div>;
};
export default HomePage;
