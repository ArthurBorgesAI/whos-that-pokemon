import { styled } from "styled-components";
import { BsLink45Deg } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-top: 0.5px solid #696969;
  padding-top: .5rem;

  p {
    color: #c0c0c0;
  }

  a {
    text-decoration: none;
    color: #c0c0c0;
  }
`;

export const LinkIcon = styled(BsLink45Deg)`
  scale: 1.2;
  color: #c0c0c0;
  position: relative;
  top: .15rem;
`;
