import React, { useContext, useEffect } from "react";

import Header from "../../components/Header";
import Welcome from "../../components/Welcome";
import Question from "../../components/Question";
import GameOver from "../../components/GameOver/GameOver";
import { QuizContext } from "../../contexts/quizContext";

import { HomeContainer } from "./styles";
import Footer from "../../components/Footer/Footer";
import Win from "../../components/Win";


const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_DATA" });
  }, []);
  useEffect(() => {
    dispatch({ type: "GET_OPTIONS" });
  }, []);

  return (
    <HomeContainer>
      <Header />
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      {quizState.gameStage === "Win" && <Win />}
      <Footer/>
    </HomeContainer>
  );
};

export default Home;
