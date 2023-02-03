import { createContext, useReducer } from "react";
import questions from '../data/questions';

const Stages = ["Start", "Playing", "End"]

const initialState = {
    gameStage: Stages[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case "Change_State":
            return {
                ...state,
                gameStage: Stages[1],
            };

        case "Reorder_Questions": 
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderedQuestions,
            };
        case "Change_Question": 
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage:endGame ? Stages[2] : state.gameStage,
                answerSelected: false,
            };

        case "New_Game": 
            return initialState;

        case "Check_Answer": 
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };

        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}