import { createSelector } from "reselect";
import { QuizModelState } from "../reducers/quiz.reducer";
import { Record } from "immutable";
import { IAppState } from "../../../store/reducers";

const selectQuizDomain = (state: Record<IAppState>, props: any) => {
  return state.get("quiz", new QuizModelState());
};

const getQuestions = (state: QuizModelState) => state.get("questions");

export const getQuestionsSelector = () => createSelector(selectQuizDomain, getQuestions);

export const getQuestionSelector = (questionNumber: number) =>
  createSelector(getQuestionsSelector(), (state) => state.get(questionNumber));
