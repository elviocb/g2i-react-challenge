import React, { FC } from "react";

import { SpaceProps, BackgroundColorProps, BorderProps, FlexboxProps } from "styled-system";
import styled from "styled-components";

import { space } from "styled-system";

const BoxContainer = styled.div`
  ${space};
`;

type BoxBaseProps = {
  children: any;
};

type BoxProps = SpaceProps & FlexboxProps & BackgroundColorProps & BorderProps & BoxBaseProps;

const Box: FC<BoxProps> = ({ children, ...props }: BoxProps) => {
  return <BoxContainer {...props}>{children}</BoxContainer>;
};

export { Box };
