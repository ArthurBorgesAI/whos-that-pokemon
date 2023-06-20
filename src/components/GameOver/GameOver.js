import React, { useContext } from "react";

import Button from "../Button";
import GameContainer from "../GameContainer";
import { QuizContext } from "../../contexts/quizContext";

import Gameover from "../../assets/gameover2.png";
import { Text, Img, ButtonContainer } from "./styles";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameContainer>
      <Text>Você errou!</Text>
      <Text>Fim do jogo</Text>
      <Text>Acertos: {quizState.currentIndex}</Text>
      <Img src={Gameover} alt="Game Over" />
      <ButtonContainer>
        <Button text="Reiniciar" role={() => dispatch({ type: "NEW_GAME" })} />
      </ButtonContainer>
    </GameContainer>
  );
};

export default GameOver;
