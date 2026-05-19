import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans font-bold", {
  variants: {
    variant: {
      "title-sm": "text-sm leading-5 text-gray-300 font-bold",
      "title-md": "text-base leading-6 text-gray-200 font-bold",
      "title-lg": "text-2xl leading-6 text-gray-100 font-bold",
      "body-sm": "text-sm leading-5 text-gray-300 font-normal",
      "body-md": "text-base leading-6 text-gray-200 font-normal",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "h1",
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
