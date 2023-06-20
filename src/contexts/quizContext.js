import { createContext, useReducer } from "react";

import pokemonData from "../data/pokemons";

const STAGES = ["Start", "Playing", "End", "Win"];

const initialState = {
  gameStage: STAGES[0],
  pokemonData,
  currentIndex: 0,
  score: 0,
  selectedAnswer: false,
  optionsList: [],
  gameDifficulty: 10,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_DATA":
      return {
        ...state,
        pokemonData: pokemonData.sort(() => Math.random() - 0.5),
      };

    case "SET_DIFFICULTY":
      const difficultySelected = action.payload.difficultySelected;
      return {
        ...state,
        gameDifficulty: difficultySelected,
      };

    case "GET_OPTIONS":
      const optionsList = [];
      optionsList.push(pokemonData[state.currentIndex].name);
      for (let i = 0; i < 3; i++) {
        let option =
          pokemonData[Math.floor(Math.random() * pokemonData.length)].name;
        while (optionsList.includes(option)) {
          option =
            pokemonData[Math.floor(Math.random() * pokemonData.length)].name;
        }
        optionsList.push(option);
      }
      return {
        ...state,
        optionsList: optionsList.sort(),
      };

    case "CHANGE_POKEMON":
      const nextIndex = state.currentIndex + 1;
      let win = false;

      if (nextIndex === state.gameDifficulty) win = true;

      return {
        ...state,
        currentIndex: nextIndex,
        gameStage: win ? STAGES[3] : state.gameStage,
        selectedAnswer: false,
      };

    case "NEW_GAME":
      return {
        gameStage: STAGES[0],
        pokemonData: pokemonData.sort(() => Math.random() - 0.5),
        currentIndex: 0,
        score: 0,
        selectedAnswer: false,
        optionsList: [],
        gameDifficulty: 10,
      };

    case "CHECK_ANSWER":
      if (state.selectedAnswer) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let isCorrect = false;
      if (answer === option) isCorrect = true;

      return {
        ...state,
        selectedAnswer: option,
        gameStage: isCorrect ? state.gameStage : STAGES[2],
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
