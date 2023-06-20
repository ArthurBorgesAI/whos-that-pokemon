import React, { useContext } from "react";

import { QuizContext } from "../../contexts/quizContext";

import { CorrectOption, OptionsContainer, WrongOption } from "./styles";

const Options = ({ option, name, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <>
      {quizState.selectedAnswer && option === name ? (
        <CorrectOption> {option} </CorrectOption>
      ) : quizState.selectedAnswer && option !== name ? (
        <WrongOption> {option} </WrongOption>
      ) : (
        <OptionsContainer onClick={() => selectOption()}>       
          {option}
        </OptionsContainer>
      )}
    </>
  );
};

export default Options;
