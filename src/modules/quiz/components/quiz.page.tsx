import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, compose } from "redux";
import { loadAllQuestions } from "../actions";
import { withRouter, Switch, Route, Redirect, RouteComponentProps } from "react-router";
import { QUIZ_START_ROUTE, QUIZ_FINISH_ROUTE, QUIZ_ROUTE } from "../constants/quiz.route";
import QuizStart from "./start/quiz-start.component";
import QuizFinish from "./finish/quiz-finish.component";
import QuizQuestion from "./question/quiz-question.component";

interface QuizPageProps {
  actions: {
    loadAllQuestions: typeof loadAllQuestions;
  };
}

const QuizPage: FC<QuizPageProps & RouteComponentProps> = ({ actions }) => {
  useEffect(() => {
    actions.loadAllQuestions();
  }, []);

  return (
    <Switch>
      <Route exact={true} path={QUIZ_START_ROUTE} component={QuizStart} />
      <Route exact={true} path={QUIZ_FINISH_ROUTE} component={QuizFinish} />
      <Route path={QUIZ_ROUTE} component={QuizQuestion} />
      <Redirect from={"/"} to={QUIZ_START_ROUTE} />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ loadAllQuestions }, dispatch),
  };
};

export default compose<FC<Omit<QuizPageProps, "actions">>>(
  withRouter,
  connect(null, mapDispatchToProps),
)(QuizPage);
