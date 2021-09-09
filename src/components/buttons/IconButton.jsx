import { ReactSVG } from "react-svg";
import styled from "styled-components";
import tw from "twin.macro";

const getBgColorStyles = (props) => {
  switch (props.bgColor) {
    case "primary":
      return tw`bg-primary hover:bg-primaryHover`;
      break;

    case "secondary":
      return tw`bg-secondary hover:bg-secondaryHover`;
      break;

    case "red":
      return tw`bg-red hover: bg-redHover`;
      break;

    default:
      break;
  }
};

const StyledIconButton = styled.button`
  ${(props) => getBgColorStyles(props)}
  ${tw`flex items-center justify-center`}

  width: 80px;
  height: 80px;
  border-radius: 10px;

  svg {
    width: 20px;
    height: auto;
    fill: white;
  }
`;

const IconButton = ({ iconSrc, bgColor, onClick }) => {
  return (
    <StyledIconButton bgColor={bgColor} onClick={onClick}>
      <ReactSVG src={iconSrc} />
    </StyledIconButton>
  );
};

export default IconButton;
