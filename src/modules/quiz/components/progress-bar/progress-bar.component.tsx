import React, { FC } from "react";

import {
  ProgressContainer,
  ProgressOutter,
  ProgressCounter,
  ProgressInner,
} from "./progress-bar.styled";

interface ProgressBarProps {
  current: number;
  total: number;
}

/* eslint-disable react/prefer-stateless-function */
const ProgressBar: FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <ProgressContainer>
      <ProgressOutter>
        <ProgressCounter>
          {current}/{total}
        </ProgressCounter>
        <ProgressInner style={{ width: `${10 * current}%` }} />
      </ProgressOutter>
    </ProgressContainer>
  );
};

export default ProgressBar;
