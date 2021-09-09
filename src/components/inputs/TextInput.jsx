import styled from "styled-components";
import tw from "twin.macro";

const Input = styled.input`
  ${tw`font-bold p-6 bg-white mb-6 w-full`}
  border-radius: 10px;
  font-size: 22px;
  outline: none;

  &::placeholder {
    color: #acacac;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #acacac;
  }

  &::-ms-input-placeholder {
    color: #acacac;
  }
`;

export default Input;
