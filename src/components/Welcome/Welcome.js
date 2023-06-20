import React, { useContext } from "react";

import Button from "../Button";
import GameContainer from "../GameContainer/GameContainer";
import DifficultyMenu from "../DifficultyMenu/DifficultyMenu";
import Help from "../Help";
import { QuizContext } from "../../contexts/quizContext";

import pikachu from "../../assets/pikachu2.png";

import { Text, Img, ButtonContainer } from "./styles";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameContainer>
      <Help/>

      <Text>Selecione a dificuldade do jogo</Text>
      <DifficultyMenu />

      <Text>Clique no botão abaixo para começar</Text>
      <ButtonContainer>
        <Button text="Iniciar" role={() => dispatch({ type: "START_GAME" })} />
      </ButtonContainer>
      <Img src={pikachu} alt="Inicio do Quiz" />
    </GameContainer>
  );
};

export default Welcome;
