export const getQuestionNumber = (location: string): number =>
  Math.abs(Number(location.replace("/quiz/", "")));
