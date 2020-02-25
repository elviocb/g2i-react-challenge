import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { QUIZ_ROUTE } from "../constants/quiz.route";
import { Dispatch, bindActionCreators, compose } from "redux";
import { goToNextQuestion } from "../actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentSectionSelector, getCurrentQuestionSelector } from "../selectors/quiz.selector";
import Typography from "../../shared/components/typography/typography.component";
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
    <Box flexDirection="column" display="flex" height={"100%"} alignItems="center" marginX={50}>
      <Box display="flex" flex={1} alignItems="center">
        <Typography fontSize={[30, 60]} fontWeight={800} color="purple">
          Welcome to the Trivia Challenge!
        </Typography>
      </Box>
      <Box display="flex" flex={1} justifyContent="center" flexDirection="column">
        <Typography fontSize={[20, 30]} color="white" mb={20}>
          You will be presented with 10 True or False questions.
        </Typography>
        <Typography fontSize={[25, 35]} fontWeight={700} color="white">
          Can you score 100%?
        </Typography>
      </Box>
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        onClick={() => actions.goToNextQuestion()}
        style={{ cursor: "pointer" }}
      >
        <Typography fontSize={50} fontWeight={700} color="cyan">
          Begin
        </Typography>
      </Box>
    </Box>
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
