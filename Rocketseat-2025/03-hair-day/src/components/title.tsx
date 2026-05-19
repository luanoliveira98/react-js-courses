import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const titleVariants = cva("font-sans text-gray-100 font-bold", {
  variants: {
    variant: {
      sm: "text-sm leading-5",
      md: "text-base leading-6",
      lg: "text-2xl leading-6",
    },
  },
  defaultVariants: {
    variant: "md",
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
  variant,
  children,
  ...props
}: TitleProps) {
  return React.createElement(
    as,
    {
      className: titleVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
