import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { QUIZ_ROUTE } from "../constants/quiz.route";

interface QuizStartProps extends RouteComponentProps {}

const QuizStart: FC<QuizStartProps> = ({ history }) => {
  console.log("QUIZ START");

  return (
    <>
      <div>QuizStart Component</div>
      <div onClick={() => history.replace(`${QUIZ_ROUTE}/${1}`)}>start</div>
    </>
  );
};

export default QuizStart;
