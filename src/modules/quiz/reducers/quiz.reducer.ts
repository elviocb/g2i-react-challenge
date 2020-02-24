import { Record, List, Map } from "immutable";
import actionType from "../constants/quiz.action-type";
import { IAction } from "../../shared/types/action.interface";
import { Question } from "../types";
export interface QuizModel {
  questions: List<Question[]>;
  loading: boolean;
}

export const QuizModel = Record<QuizModel>({
  questions: List([]),
  loading: false,
});

export class QuizModelState extends QuizModel {}

export function quizReducer(state: QuizModelState = new QuizModelState(), action: IAction) {
  switch (action.type) {
    case actionType.LOAD_ALL_QUESTIONS:
      return state.merge({ loading: true }).set("questions", List([]));
    case actionType.LOAD_ALL_QUESTIONS_SUCCESS:
      return state.merge({ loading: false }).set("questions", List(action.payload));
    case actionType.LOAD_ALL_QUESTIONS_FAIL:
      return state.merge({ loading: false });
    default:
      return state;
  }
}
