import * as React from "react";
import IconHOC, { IconProps } from "./icon.hoc";

const CheckIcon: React.FunctionComponent<IconProps> = (props) => {
  const { width, height, viewbox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewbox}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-check"
    >
      <path d="M20 6L9 17 4 12"></path>
    </svg>
  );
};

export default IconHOC(CheckIcon, 24, 24);
