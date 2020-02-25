import React, { FC } from "react";

import {
  SpaceProps,
  BackgroundColorProps,
  BorderProps,
  FlexboxProps,
  flexbox,
  layout,
  LayoutProps,
} from "styled-system";
import styled from "styled-components";

import { space } from "styled-system";

const BoxContainer = styled.div`
  ${flexbox};
  ${space};
  ${layout};
`;

type BoxBaseProps = {
  children: any;
  width?: string | number;
  height?: string | number;
};

type BoxProps = SpaceProps &
  FlexboxProps &
  BackgroundColorProps &
  BorderProps &
  LayoutProps &
  BoxBaseProps &
  React.HTMLAttributes<HTMLDivElement>;

const Box: FC<BoxProps> = ({ children, ...props }: BoxProps) => {
  return <BoxContainer {...props}>{children}</BoxContainer>;
};

export { Box };
