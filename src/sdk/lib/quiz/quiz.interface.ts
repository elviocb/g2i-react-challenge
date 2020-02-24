import { ApiResponse } from "apisauce";

interface OpenTdbResponse<T> {
  response_code: number;
  results: T[];
}

interface OpenTdbParams {
  amount: number;
  difficulty?: "easy" | "medium" | "hard";
  type?: "boolean" | "multiple";
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type GetQuestions = (
  params: OpenTdbParams,
) => Promise<ApiResponse<OpenTdbResponse<Question>>>;
