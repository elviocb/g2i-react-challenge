import React from "react";
import IconHOC, { IconProps } from "./icon.hoc";

const ThumbsDownIcon: React.FC<IconProps> = (props) => {
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
      className="feather feather-thumbs-down"
      viewBox={viewbox}
    >
      <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></path>
    </svg>
  );
};

export default IconHOC(ThumbsDownIcon, 24, 24);
