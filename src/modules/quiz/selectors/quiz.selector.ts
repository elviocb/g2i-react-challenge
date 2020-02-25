import { createSelector } from "reselect";
import { QuizModelState } from "../reducers/quiz.reducer";
import { Record } from "immutable";
import { IAppState } from "../../../store/reducers";

const selectQuizDomain = (state: Record<IAppState>, props: any) => {
  return state.get("quiz", new QuizModelState());
};

const getQuestions = (state: QuizModelState) => state.get("questions");
const getCurrentQuestion = (state: QuizModelState) => state.get("currentQuestion");
const getCurrentSection = (state: QuizModelState) => state.get("currentSection");

export const getQuestionsSelector = () => createSelector(selectQuizDomain, getQuestions);

export const getQuestionSelector = (questionNumber: number) =>
  createSelector(getQuestionsSelector(), (state) => state.get(questionNumber - 1));

export const getCurrentQuestionSelector = () =>
  createSelector(selectQuizDomain, getCurrentQuestion);
export const getCurrentSectionSelector = () => createSelector(selectQuizDomain, getCurrentSection);
