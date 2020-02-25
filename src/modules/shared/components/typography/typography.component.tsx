import React, { FC } from "react";
import styled from "styled-components";
import { theme, ThemeColorNames } from "../../theme";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

const baseFont = `'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`;

interface TypographyProps {
  color?: ThemeColorNames;
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
        color: ${color ? theme.colors[color] : theme.colors.black};
        `};
  `;

  return <TagComponent>{children}</TagComponent>;
};

export default Typography;
