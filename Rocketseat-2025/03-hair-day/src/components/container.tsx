import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const containerVariants = cva("flex flex-col w-full", {
  variants: {
    size: {
      md: "p-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  size,
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  );
}
