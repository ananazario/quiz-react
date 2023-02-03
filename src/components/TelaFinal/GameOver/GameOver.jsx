import { useContext } from "react";
import { QuizContext } from "../../../context/quiz";
import WellDone from '../../../img/welldone.svg'
import './GameOver.sass'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo</h2>
      <h3>Pontuação: {quizState.score}</h3>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
      <img src={WellDone} alt=""/>
      <button onClick={() => dispatch({type: "New_Game"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver
