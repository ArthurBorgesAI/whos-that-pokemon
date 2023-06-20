import React, { useState, useContext } from "react";

import { QuizContext } from "../../contexts/quizContext";

import { MenuContainer, Button, SelectedButton } from "./styles";

const DifficultyMenu = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [difficultySelected, setDifficultySelected] = useState(10);

  const onDifficultyClick = (nivel) => {
    setDifficultySelected(nivel);
    dispatch({
      type: "SET_DIFFICULTY",
      payload: { difficultySelected: nivel },
    });
  };

  return (
    <MenuContainer>
      {difficultySelected === 10 ? (
        <>
          <SelectedButton onClick={() => onDifficultyClick(10)}>
            {" "}
            Fácil{" "}
          </SelectedButton>
          <Button onClick={() => onDifficultyClick(20)}> Médio </Button>
          <Button onClick={() => onDifficultyClick(30)}> Difícil </Button>
        </>
      ) : difficultySelected === 20 ? (
        <>
          <Button onClick={() => onDifficultyClick(10)}> Fácil </Button>
          <SelectedButton onClick={() => onDifficultyClick(20)}>
            {" "}
            Médio{" "}
          </SelectedButton>
          <Button onClick={() => onDifficultyClick(30)}> Difícil </Button>
        </>
      ) : (
        <>
          <Button onClick={() => onDifficultyClick(10)}> Fácil </Button>
          <Button onClick={() => onDifficultyClick(20)}> Médio </Button>
          <SelectedButton onClick={() => onDifficultyClick(30)}>
            {" "}
            Difícil{" "}
          </SelectedButton>
        </>
      )}
    </MenuContainer>
  );
};

export default DifficultyMenu;
