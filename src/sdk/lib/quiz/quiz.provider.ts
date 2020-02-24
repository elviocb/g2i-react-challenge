import { httpClient as http } from "../../core/http-client";

import { GetQuestions } from "./quiz.interface";

const ENDPOINTS = {
  QUIZ: `/`,
};

class QuizProvider {
  public getQuestions: GetQuestions = async (params) => http.get(ENDPOINTS.QUIZ, { ...params });
}

export default new QuizProvider();
