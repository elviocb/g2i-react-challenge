import React, { FC, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import {
  getQuestionsSelector,
  getAnswersSelector,
  getScoreSelector,
} from "../selectors/quiz.selector";
import { compose, Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Question, Answer } from "../types";
import { Box } from "../../shared/components/box/box.comp";
import Typography from "../../shared/components/typography/typography.component";
import CheckIcon from "../../shared/components/icons/check-icon.comp";
import CloseIcon from "../../shared/components/icons/close-icon.comp";
import { RouteComponentProps } from "react-router";
import { QUIZ_START_ROUTE } from "../constants/quiz.route";
import { List } from "immutable";
import { playAgain } from "../actions";

interface QuizFinishProps extends RouteComponentProps {
  questions: List<Question>;
  answers: List<Answer>;
  score: number;
  actions: {
    playAgain: typeof playAgain;
  };
}

const QuizFinish: FC<QuizFinishProps> = ({ actions, answers, score, history }) => {
  useEffect(() => {
    if (answers.size < 10) {
      history.replace(`${QUIZ_START_ROUTE}`);
    }
  }, [answers.size]);

  return (
    <Box
      flexDirection="column"
      display="flex"
      height={"100%"}
      alignItems="center"
      marginX={[20, 30]}
    >
      <Box marginY={20} width={"100%"}>
        <Typography fontSize={[25, 40]} fontWeight={800} color="white">
          {`You scored ${score} / 10`}
        </Typography>
      </Box>
      <Box style={{ textAlign: "left" }} marginX={[20, 30]}>
        {answers &&
          answers.map((a, i) => {
            const Icon = a.isCorrect ? CheckIcon : CloseIcon;
            return (
              <Box mb={25} key={i}>
                <Icon color={a.isCorrect ? "green" : "red"} />
                <Typography
                  fontSize={[16, 20]}
                  fontWeight={800}
                  color={a.isCorrect ? "green" : "red"}
                  dangerouslySetInnerHTML={{ __html: a.question }}
                />
              </Box>
            );
          })}
      </Box>
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        onClick={() => actions.playAgain()}
        style={{ cursor: "pointer" }}
        marginY={20}
      >
        <Typography fontSize={50} fontWeight={700} color={"purple"}>
          Play again?
        </Typography>
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  questions: getQuestionsSelector() as any,
  answers: getAnswersSelector() as any,
  score: getScoreSelector() as any,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ playAgain }, dispatch),
  };
};

export default compose<FC<QuizFinishProps>>(connect(mapStateToProps, mapDispatchToProps))(
  QuizFinish,
);
