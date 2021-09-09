import styled from "styled-components";
import tw from "twin.macro";

const Button = styled.button`
  ${tw`font-bold p-8  uppercase mb-10`}
  border-radius: 15px;
  font-size: 28px;
  width: 300px;
  ${(props) => {
    if (props.primary) {
      return tw`text-white bg-secondary hover:bg-secondaryHover`;
    } else if (props.secondary) {
      return tw`text-primary bg-white`;
    }
  }}
`;

export default Button;
