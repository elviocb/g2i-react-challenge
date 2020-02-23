import { Record, List, Map } from "immutable";
import actionType from "../constants/quiz.action-type";
import { IAction } from "../../shared/types/action.interface";
import { IQuestion } from "../types";
export interface IQuizModel {
  questions: List<IQuestion[]>;
}

export const QuizModel = Record<IQuizModel>({
  questions: List([]),
});

export class QuizModelState extends QuizModel {}

export function quizReducer(state: QuizModelState = new QuizModelState(), action: IAction) {
  switch (action.type) {
    case actionType.LOAD_ALL_QUESTIONS:
      return state.set("questions", List([]));
    default:
      return state;
  }
}
