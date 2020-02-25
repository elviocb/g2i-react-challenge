import React, { FC } from "react";
import styled from "styled-components";
import { theme, ThemeColorNames } from "../../theme";
import { typography, TypographyProps, SpaceProps, space } from "styled-system";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

const baseFont = `'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`;

interface TypographyCompProps
  extends TypographyProps,
    SpaceProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  color?: ThemeColorNames;
  fontWeight?: number;
  lineHeight?: number;
  tag?: TypographyTag;
}

const Typography: FC<TypographyCompProps> = (props) => {
  const { tag, fontWeight, lineHeight, color, children } = props;

  const TagComponent = styled(tag || "p")<TypographyCompProps>`
    margin: 0;
    padding: 0;

    ${(props: TypographyCompProps) =>
      `font-family: ${baseFont};
        font-weight: ${fontWeight || 500};
        line-height: ${lineHeight || 1.5};
        color: ${color ? theme.colors[color] : theme.colors.black};
        `};
    ${typography}
    ${space}
  `;

  return <TagComponent {...props}>{children}</TagComponent>;
};

export default Typography;
