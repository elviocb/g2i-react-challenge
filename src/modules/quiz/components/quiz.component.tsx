import React, { FC, useEffect } from "react";
import { Question } from "../types";
import { bindActionCreators, Dispatch, compose } from "redux";
import { IAppState } from "../../../store/reducers";
import { Record } from "immutable";
import { getQuestionSelector } from "../selectors/quiz.selector";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { QUIZ_START_ROUTE, QUIZ_ROUTE, QUIZ_FINISH_ROUTE } from "../constants/quiz.route";
import { getQuestionNumber } from "../../../utils";

interface QuizProps extends RouteComponentProps {
  question: Question;
  currentQuestion: number;
}

const Quiz: FC<QuizProps> = ({ question, currentQuestion, history }) => {
  useEffect(() => {
    if (!question) {
      history.replace(QUIZ_START_ROUTE);
    }
  }, [currentQuestion]);

  const q = question || {};

  const goTo = (questionNumber: number) => {
    if (questionNumber > 10) {
      history.replace(`${QUIZ_FINISH_ROUTE}`);
    } else if (questionNumber < 1) {
      history.replace(`${QUIZ_START_ROUTE}`);
    } else {
      history.replace(`${QUIZ_ROUTE}/${questionNumber}`);
    }
  };

  return (
    <>
      <div>Quiz Question</div>
      <div>{q.question}</div>
      <div>{q.type}</div>
      <div>{q.difficulty}</div>
      <div onClick={() => goTo(currentQuestion - 1)}>previous</div>
      <div onClick={() => goTo(currentQuestion + 1)}>next</div>
    </>
  );
};

const mapStateToProps = (state: Record<IAppState>, props: QuizProps) => {
  const { location } = props;
  const questionNumber = getQuestionNumber(location.pathname);

  return {
    question: !Number.isNaN(questionNumber)
      ? getQuestionSelector(questionNumber)(state, props)
      : null,
    currentQuestion: questionNumber,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default compose<FC<QuizProps>>(connect(mapStateToProps, mapDispatchToProps))(Quiz);
