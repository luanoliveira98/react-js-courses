import React from "react";
import { type VariantProps } from "class-variance-authority";
import { textVariants } from "./variants/text";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

function Text({
  as = "span",
  className,
  variant,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}

export default Text;
