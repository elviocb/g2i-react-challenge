import React from "react";
import { ThemeColorNames, theme } from "../../theme";

export type IconProps = {
  width?: number;
  height?: number;
  viewbox?: string;
  color?: ThemeColorNames;
  disabled?: boolean;
  style?: any;
};

const IconHOC = (
  Icon: React.ComponentType<IconProps>,
  defaultWidth: number,
  defaultHeight: number,
) => (props: IconProps) => {
  const defaultFactor = defaultHeight / defaultWidth;

  const { width, height, viewbox, disabled, color } = props;

  const newWidth = width || defaultWidth;
  let newHeight = width ? width * defaultFactor : defaultHeight;
  const newViewbox = !!viewbox ? viewbox : `0 0 ${newWidth} ${newHeight}`;

  if (!!height) {
    newHeight = height;
  }

  const setColor = disabled ? theme.colors.gray : color ? theme.colors[color] : theme.colors.black;

  return (
    <Icon
      color={setColor as ThemeColorNames}
      viewbox={newViewbox}
      style={{ width: newWidth, height: newHeight }}
      width={newWidth}
      height={newHeight}
    />
  );
};

export default IconHOC;
