import { styled } from "styled-components";
import { IoIosHelpCircle } from "react-icons/io";

export const Helper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  top: 0.8rem;
  left: 1rem;
  justify-content: end;
`;

export const IconContainer = styled.div`
  &::before {
    content: ${(props) => props.$hovertext};
    white-space:pre;
    visibility: hidden;
    opacity: 0;
    width: 100%;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: -1rem;
    top: 0.8rem;
  }

  &:hover::before, &:active::before {
    opacity: 0.8;
    visibility: visible;
  }
`;

export const StyledIcon = styled(IoIosHelpCircle)`
  scale: 1.3;
`;
