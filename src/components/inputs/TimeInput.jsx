import styled from "styled-components";
import tw from "twin.macro";

const TimeInput = styled.input`
  ${tw`bg-transparent text-white font-bold text-white p-0`}
  font-size: 170px;
  outline: none;

  @media (max-width: 1200px) {
    font-size: 120px;
  }

  @media (max-width: 900px) {
    font-size: 100px;
  }
`;

export default TimeInput;
