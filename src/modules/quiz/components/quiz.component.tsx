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
import { Box } from "../../shared/components/box/box.comp";
import Typography from "../../shared/components/typography/typography.component";

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
      <Box flexDirection="column" display="flex" height={"100%"} alignItems="center" marginX={50}>
        <Box display="flex" flex={1} alignItems="center">
          <Typography fontSize={[30, 60]} fontWeight={800} color="purple">
            {q.category}
          </Typography>
        </Box>
        <Box display="flex" flex={1} justifyContent="center" flexDirection="column">
          <Typography
            fontSize={[20, 30]}
            color="white"
            dangerouslySetInnerHTML={{ __html: q.question }}
          />
        </Box>
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          onClick={() => actions.goToNextQuestion()}
          style={{ cursor: "pointer" }}
        >
          <Typography fontSize={50} fontWeight={700} color="cyan">
            True
          </Typography>
          <Typography fontSize={50} fontWeight={700} color="cyan">
            False
          </Typography>
        </Box>
      </Box>
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
