import styled from "styled-components";
import tw from "twin.macro";

const PrimaryHeader = styled.h1`
  ${tw`text-primary font-bold uppercase`}
  align-self: flex-start;
  font-size: 60px;
  line-height: 1;
  letter-spacing: 2px;

  @media (max-width: 800px) {
    ${tw`text-center self-center`}
    font-size: 40px;
    text-align: ${(props) => (props.left ? "left" : "center")};
  }
`;

const SecondaryHeader = styled.h1`
  ${tw`font-bold capitalize`}
  font-size: 45px;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export { PrimaryHeader, SecondaryHeader };
