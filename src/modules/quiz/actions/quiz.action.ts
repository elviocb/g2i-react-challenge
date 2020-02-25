import { Dispatch } from "redux";
import actionTypes from "../constants/quiz.action-type";
import quizProvider from "../../../sdk/lib/quiz/quiz.provider";
import { IAppState } from "../../../store/reducers";
import { Record } from "immutable";

export const loadAllQuestions = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.LOAD_ALL_QUESTIONS });

  const { ok, data } = await quizProvider.getQuestions({
    amount: 10,
    difficulty: "hard",
    type: "boolean",
  });

  if (ok && data) {
    dispatch(loadAllQuestionsSuccess(data.results));
  } else {
    dispatch(fetchEditSalePaymentsFail());
  }
};

const loadAllQuestionsSuccess = (data: any) => ({
  type: actionTypes.LOAD_ALL_QUESTIONS_SUCCESS,
  payload: data,
});

const fetchEditSalePaymentsFail = () => ({
  type: actionTypes.LOAD_ALL_QUESTIONS_FAIL,
});

export const goToNextQuestion = () => async (
  dispatch: Dispatch,
  getState: () => Record<IAppState>,
) => {
  dispatch({ type: actionTypes.GO_TO_NEXT_QUESTION });
};

export const goToPreviousQuestion = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.GO_TO_PREVIOUS_QUESTION });
};
