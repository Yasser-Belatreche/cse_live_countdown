import styled from "styled-components";
import tw from "twin.macro";
import backgroundImage from "../images/bg.png";

const Background = styled.img.attrs(() => {
  return { src: backgroundImage };
})`
  ${tw`fixed top-0 left-0`}
  z-index: -1;
  width: 100vw;
  height: 100vh;

  @media (max-width: 800px) {
    object-fit: cover;
    object-position: center;
  }
`;

export { Background };
