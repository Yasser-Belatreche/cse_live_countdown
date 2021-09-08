import styled from "styled-components";
import tw from "twin.macro";

const PrimaryHeader = styled.h1`
  ${tw`text-primary font-bold uppercase`}
  font-size: 40px;
`;

const SecondaryHeader = styled.h1`
  ${tw`font-bold capitalize`}
  font-size: 30px;
`;

export { PrimaryHeader, SecondaryHeader };
