import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { QUIZ_ROUTE } from "../constants/quiz.route";
import { Dispatch, bindActionCreators, compose } from "redux";
import { goToNextQuestion } from "../actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentSectionSelector, getCurrentQuestionSelector } from "../selectors/quiz.selector";
import Typography from "../../shared/components/typography/typography.component";
import ThumbsUpIcon from "../../shared/components/icons/thumbs-up-icon.comp";
import { Box } from "../../shared/components/box/box.comp";

interface QuizStartProps extends RouteComponentProps {
  currentSection: "start" | "question" | "finish";
  currentQuestion: number;
  actions: {
    goToNextQuestion: typeof goToNextQuestion;
  };
}

const QuizStart: FC<QuizStartProps> = ({ history, actions, currentSection, currentQuestion }) => {
  useEffect(() => {
    if (currentSection === "question") {
      history.replace(`${QUIZ_ROUTE}/${currentQuestion}`);
    }
  }, [currentSection]);

  return (
    <>
      <Box mb={60}>
        <Typography>QuizStart Component</Typography>
      </Box>
      <ThumbsUpIcon />
      <div onClick={() => actions.goToNextQuestion()}>start</div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentSection: getCurrentSectionSelector() as any,
  currentQuestion: getCurrentQuestionSelector() as any,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ goToNextQuestion }, dispatch),
  };
};

export default compose<FC<Omit<QuizStartProps, "actions">>>(
  connect(mapStateToProps, mapDispatchToProps),
)(QuizStart);
