import React, { FC } from "react";
import styled from "styled-components";

const colors = {
  lighterBlue: "#8bbef5" as "#8bbef5",
  blue: "#007aff" as "#007aff",
  darkerBlue: "#049" as "#049",
  green: "#287D3C" as "#287D3C",
  lighterGreen: "#287D3C" as "#287D3C",
  darkerGreen: "#287D3C" as "#287D3C",
  red: "#FF1A1A" as "#FF1A1A",
  lighterRed: "#FF1A1A" as "#FF1A1A",
  darkerRed: "#FF1A1A" as "#FF1A1A",
  orange: "#FF8C1A" as "#FF8C1A",
  lighterOrange: "#FF8C1A" as "#FF8C1A",
  darkerOrange: "#FF8C1A" as "#FF8C1A",
  pink: "#fe3e81" as "#fe3e81",
  lighterPink: "#fe3e81" as "#fe3e81",
  darkerPink: "#fe3e81" as "#fe3e81",
  purple: "#842BAD" as "#842BAD",
  lighterPurple: "#af5af5" as "#af5af5",
  darkerPurple: "#522973" as "#522973",
  disabledPurple: "#d29bff" as "#d29bff",
  yellow: "#fedc2a" as "#fedc2a",
  lighterYellow: "#fedc2a" as "#fedc2a",
  darkerYellow: "#fedc2a" as "#fedc2a",
  cyan: "#58C0B3" as "#58C0B3",
  lighterCyan: "#63DACB" as "#63DACB",
  darkerCyan: "#58C0B3" as "#58C0B3",
  black: "#4D4D4D" as "#4D4D4D",
  darkestGray: "#696969" as "#696969",
  darkerGray: "#999999" as "#999999",
  gray: "#A9A9A9" as "#A9A9A9",
  lighterGray: "#D3D3D3" as "#D3D3D3",
  lightestGray: "#F4F4F4" as "#F4F4F4",
  white: "#FAFAFA" as "#FAFAFA",
};

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

const baseFont = `'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`;

interface TypographyProps {
  color?: keyof typeof colors;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  tag?: TypographyTag;
}

const Typography: FC<TypographyProps> = ({
  tag,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  children,
}) => {
  const TagComponent = styled(tag || "p")<TypographyProps>`
    margin: 0;
    padding: 0;

    ${(props: TypographyProps) =>
      `font-family: ${baseFont};
        font-size: ${fontSize || 14}px;
        font-weight: ${fontWeight || 500};
        line-height: ${lineHeight || 1.5};
        color: ${color ? colors[color] : colors.black};
        `};
  `;

  return <TagComponent>{children}</TagComponent>;
};

export default Typography;
