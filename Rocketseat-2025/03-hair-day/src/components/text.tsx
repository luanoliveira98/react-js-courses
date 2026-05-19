import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans font-normal", {
  variants: {
    size: {
      sm: "text-sm leading-5 text-gray-300",
      md: "text-base leading-6 text-gray-200",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  className,
  size,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ size, className }),
      ...props,
    },
    children,
  );
}
