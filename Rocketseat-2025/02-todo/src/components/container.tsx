import type { VariantProps } from "class-variance-authority";
import { containerVariants } from "./variants/container";
import React from "react";

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  children,
  className,
  size,
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
