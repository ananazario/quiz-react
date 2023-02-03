import { useContext, useEffect } from 'react';
import Question from './components/Questions/Questions';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import { QuizContext } from './context/quiz';
import GameOver from './components/TelaFinal/GameOver/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: 'Reorder_Questions'})
  }, [])

  return (
    <div className="App">
      <h1>Quiz JavaScript</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
