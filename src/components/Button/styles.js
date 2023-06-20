import { styled } from "styled-components";

export const CustomButton = styled.button`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgb(211, 18, 18) 0%,
    rgb(255, 255, 255) 100%
  );
  border-radius: 3rem;
  border: none;
  max-width: 150px;

  &:hover {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(211, 18, 18) 100%
    );
  }
`;

export const DisabledButton = styled(CustomButton)`
  opacity: 0.5;
  &:hover {
    background: #000;
    opacity: 0.1;
  }
`;
