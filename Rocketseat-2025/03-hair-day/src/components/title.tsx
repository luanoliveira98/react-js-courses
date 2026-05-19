import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const titleVariants = cva("font-sans font-bold", {
  variants: {
    size: {
      sm: "text-sm leading-5 text-gray-300",
      md: "text-base leading-6 text-gray-200",
      lg: "text-2xl leading-6 text-gray-100",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface TitleProps extends VariantProps<typeof titleVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Title({
  as = "h1",
  className,
  size,
  children,
  ...props
}: TitleProps) {
  return React.createElement(
    as,
    {
      className: titleVariants({ size, className }),
      ...props,
    },
    children,
  );
}
