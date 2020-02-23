import { combineReducers } from "redux-immutable";
import { quizReducer, QuizModelState } from "../modules/quiz/reducers/quiz.reducer";

export interface IAppState {
  quiz: QuizModelState;
}

const appReducer = combineReducers({
  quiz: quizReducer,
});

export default appReducer;
