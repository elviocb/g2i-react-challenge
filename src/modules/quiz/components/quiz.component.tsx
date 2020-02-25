import React, { FC, useEffect } from "react";
import { Question } from "../types";
import { bindActionCreators, Dispatch, compose } from "redux";
import { IAppState } from "../../../store/reducers";
import { Record } from "immutable";
import { getQuestionSelector } from "../selectors/quiz.selector";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { QUIZ_START_ROUTE } from "../constants/quiz.route";

interface QuizProps extends RouteComponentProps {
  question: Question;
}

const Quiz: FC<QuizProps> = ({ question, history }) => {
  useEffect(() => {
    if (!question) {
      history.replace(QUIZ_START_ROUTE);
    }
  }, []);

  console.log("question", question);
  return <div>Quiz Component</div>;
};

const mapStateToProps = (state: Record<IAppState>, props: QuizProps) => {
  const { location } = props;
  const questionNumber = Number(location.pathname.replace("/quiz/", ""));
  return {
    question: getQuestionSelector(questionNumber)(state, props),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default compose<FC<QuizProps>>(connect(mapStateToProps, mapDispatchToProps))(Quiz);
