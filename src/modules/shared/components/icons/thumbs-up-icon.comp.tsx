import * as React from "react";
import IconHOC, { IconProps } from "./icon.hoc";

const ThumbsUpIcon: React.FunctionComponent<IconProps> = (props) => {
  const { width, height, viewbox, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-thumbs-up"
      viewBox={viewbox}
    >
      <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>
    </svg>
  );
};

export default IconHOC(ThumbsUpIcon, 24, 24);
