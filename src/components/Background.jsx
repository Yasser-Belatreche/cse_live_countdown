import styled from "styled-components";
import backgroundImage from "../images/bg.png";

const StyledBackground = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;

  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

const Background = ({ children }) => {
  return (
    <StyledBackground>
      <img src={backgroundImage} alt="background image" />
      {children}
    </StyledBackground>
  );
};

export { Background };
