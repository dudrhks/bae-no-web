import { forwardRef, ReactNode } from "react";

import { ClassValue } from "clsx";

import { ComponentBaseProps } from "src/types";

import { Box } from "../Box";
import { FontCss, fontCss } from "../fontBase.css";
import { Sprinkles } from "../sprinkles.css";

type TypographyProps = ComponentBaseProps &
  Pick<Sprinkles, "color" | "textAlign" | "whiteSpace" | "wordBreak"> &
  FontCss & {
    as?:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "p"
      | "label"
      | "span"
      | "em"
      | "strong"
      | "del"
      | "pre";
    children: ReactNode;
    className?: ClassValue;
    htmlFor?: string;
  };

const Typography = forwardRef(
  (
    {
      children,
      as = "p",
      color,
      fontSize,
      className,
      textAlign,
      whiteSpace = "pre-wrap",
      ...rest
    }: TypographyProps,
    ref,
  ) => (
    <Box
      {...rest}
      as={as}
      className={[
        fontCss({
          fontSize,
        }),
        className,
      ]}
      color={color}
      display="inline"
      ref={ref}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
    >
      {children}
    </Box>
  ),
);

export default Typography;
