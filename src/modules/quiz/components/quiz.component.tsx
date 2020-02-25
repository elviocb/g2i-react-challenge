import React, { FC, useEffect } from "react";
import { Question } from "../types";
import { bindActionCreators, Dispatch, compose } from "redux";
import { IAppState } from "../../../store/reducers";
import { Record } from "immutable";
import {
  getQuestionSelector,
  getCurrentQuestionSelector,
  getCurrentSectionSelector,
} from "../selectors/quiz.selector";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { QUIZ_START_ROUTE, QUIZ_ROUTE, QUIZ_FINISH_ROUTE } from "../constants/quiz.route";
import { getQuestionNumber } from "../../../utils";
import { goToNextQuestion, goToPreviousQuestion } from "../actions";

interface QuizProps extends RouteComponentProps {
  question: Question;
  currentQuestion: number;
  currentSection: "start" | "question" | "finish";
  actions: {
    goToNextQuestion: typeof goToNextQuestion;
    goToPreviousQuestion: typeof goToPreviousQuestion;
  };
}

const Quiz: FC<QuizProps> = ({ question, currentQuestion, currentSection, history, actions }) => {
  useEffect(() => {
    if (currentSection === "start" || !question) {
      history.replace(QUIZ_START_ROUTE);
    } else if (currentSection === "finish") {
      history.replace(QUIZ_FINISH_ROUTE);
    } else if (currentSection === "question") {
      history.replace(`${QUIZ_ROUTE}/${currentQuestion}`);
    }
  }, [currentSection]);

  useEffect(() => {
    if (currentQuestion) {
      history.replace(`${QUIZ_ROUTE}/${currentQuestion}`);
    }
  }, [currentQuestion]);

  const q = question || {};

  return (
    <>
      <div>Quiz Question</div>
      <div>{q.question}</div>
      <div>{q.type}</div>
      <div>{q.difficulty}</div>
      <div onClick={actions.goToPreviousQuestion}>previous</div>
      <div onClick={actions.goToNextQuestion}>next</div>
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
    currentQuestion: getCurrentQuestionSelector()(state, props),
    currentSection: getCurrentSectionSelector()(state, props),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(
      {
        goToNextQuestion,
        goToPreviousQuestion,
      },
      dispatch,
    ),
  };
};

export default compose<FC<QuizProps>>(connect(mapStateToProps, mapDispatchToProps))(Quiz);
