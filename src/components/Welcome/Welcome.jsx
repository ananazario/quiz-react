import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './Welcome.sass'
import Quiz from "../../img/quiz.svg"

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={() => dispatch({type: "Change_State"})}>Iniciar</button>
            <img src={Quiz} alt="Duas pessoas olhando para um grande sinal de interrogação no meio delas" />
        </div>
    )
}

export default Welcome