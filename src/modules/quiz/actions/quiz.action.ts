import { Dispatch } from "redux";
import actionTypes from "../constants/quiz.action-type";

export const loadAllQuestions = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.LOAD_ALL_QUESTIONS });

  const ok = true;

  if (ok) {
    dispatch(loadAllQuestionsSuccess({}));
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
