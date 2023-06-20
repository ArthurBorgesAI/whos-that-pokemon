import React from "react";
import { Container } from "./styles";

const GameContainer = (props) => {
  return <Container> {props.children} </Container>;
};

export default GameContainer;
