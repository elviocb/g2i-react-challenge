import { Record, List } from "immutable";
import actionType from "../constants/quiz.action-type";
import { IAction } from "../../shared/types/action.interface";
import { Question, Answer } from "../types";
export interface QuizModel {
  questions: List<Question>;
  answers: List<Answer>;
  loading: boolean;
  currentQuestion: number;
  currentSection: "start" | "finish" | "question";
}

export const QuizModel = Record<QuizModel>({
  questions: List([]),
  answers: List([]),
  loading: false,
  currentQuestion: 0,
  currentSection: "start",
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
    case actionType.GO_TO_NEXT_QUESTION: {
      let currQuestion = state.get("currentQuestion");
      if (currQuestion < 10) {
        return state.merge({ currentSection: "question", currentQuestion: currQuestion + 1 });
      } else {
        return state.merge({ currentSection: "finish", currentQuestion: 0 });
      }
    }
    case actionType.GO_TO_PREVIOUS_QUESTION: {
      let currQuestion = state.get("currentQuestion");
      if (currQuestion > 1) {
        return state.merge({ currentSection: "question", currentQuestion: currQuestion - 1 });
      } else {
        return state.merge({ currentSection: "start", currentQuestion: 0 });
      }
    }
    case actionType.SET_QUESTION_ANSWER: {
      let currQuestionNumber = state.get("currentQuestion");
      let question: Question = state.getIn(["questions", currQuestionNumber - 1]);
      const newAnswer: Answer = {
        question: question.question,
        response: action.payload,
        correctAnswer: question.correct_answer,
        isCorrect: question.correct_answer === action.payload,
      };
      return state.update("answers", (answers) => answers.push(newAnswer));
    }
    default:
      return state;
  }
}
