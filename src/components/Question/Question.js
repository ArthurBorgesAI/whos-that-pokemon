import React, { useContext, useEffect, useState } from "react";

import HiddenImg from "../HiddenImg/HiddenImg";
import Options from "../Options";
import GameContainer from "../GameContainer/GameContainer";
import { QuizContext } from "../../contexts/quizContext";

import { Text, OptionsContainer } from "./styles";
import Button from "../Button";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const pokemon = quizState.pokemonData[quizState.currentIndex];
  const [pokeImg, setPokeImg] = useState(pokemon.hiddenImage);

  const onOptionSelection = (option) => {
    setPokeImg(pokemon.originalImage);
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: pokemon.name, option },
    });
  };

  useEffect(() => {
    setPokeImg(pokemon.hiddenImage);
    dispatch({ type: "GET_OPTIONS" });
  }, [pokemon]);

  return (
    <GameContainer>
      <Text>#{quizState.currentIndex + 1}</Text>

      <HiddenImg image={pokeImg} />

      <OptionsContainer>
        {quizState.optionsList.map((opt, idx) => {
          return (
            <Options
              option={opt}
              name={pokemon.name}
              selectOption={() => onOptionSelection(opt)}
              key={idx}
            />
          );
        })}
      </OptionsContainer>

      {!quizState.selectedAnswer ? (
        <Button text="Próximo" role="disabled" />
      ) : (
        <Button
          text="Próximo"
          role={() => dispatch({ type: "CHANGE_POKEMON" })}
        />
      )}
    </GameContainer>
  );
};

export default Question;
