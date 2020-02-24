import { Dispatch } from "redux";
import actionTypes from "../constants/quiz.action-type";
import quizProvider from "../../../sdk/lib/quiz/quiz.provider";

export const loadAllQuestions = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.LOAD_ALL_QUESTIONS });

  const { ok, data } = await quizProvider.getQuestions({
    amount: 10,
    difficulty: "hard",
    type: "boolean",
  });
  console.log("data", data);
  if (ok && data) {
    dispatch(loadAllQuestionsSuccess(data.results));
  } else {
    dispatch(fetchEditSalePaymentsFail());
  }
};

export const loadAllQuestionsSuccess = (data: any) => ({
  type: actionTypes.LOAD_ALL_QUESTIONS_SUCCESS,
  payload: data,
});

export const fetchEditSalePaymentsFail = () => ({
  type: actionTypes.LOAD_ALL_QUESTIONS_FAIL,
});
