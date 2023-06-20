import React, { useContext } from "react";
import Button from "../Button";
import GameContainer from "../GameContainer";
import { QuizContext } from "../../contexts/quizContext";

import WinImg from "../../assets/win.png";
import { Text, Img, ButtonContainer } from "./styles";

const Win = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <GameContainer>
        <Img src={WinImg} alt="Win" />
      <Text>Parabéns,</Text>
      <Text>Você venceu!</Text>
      <Text>Dificuldade: 
        {(quizState.gameDifficulty === 10) 
        ? " Fácil" 
        : (quizState.gameDifficulty === 20)
        ? " Médio" 
        : (quizState.gameDifficulty === 30)
        ? " Difícil"
        : {}
        }
        </Text>
      
      <ButtonContainer>
        <Button text="Reiniciar" role={() => dispatch({ type: "NEW_GAME" })} />
      </ButtonContainer>
    </GameContainer>
  )
}

export default Win;