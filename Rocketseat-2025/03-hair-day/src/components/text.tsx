import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans text-gray-200 font-normal", {
  variants: {
    variant: {
      sm: "text-sm leading-5",
      md: "text-base leading-6",
    },
  },
  defaultVariants: {
    variant: "md",
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
