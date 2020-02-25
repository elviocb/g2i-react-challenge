export type AnswerResponse = "True" | "False";

export interface Answer {
  question: string;
  response: AnswerResponse;
  isCorrect: boolean;
  correctAnswer: string;
}
