import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Title from "./title";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow hover:outline-2 hover:outline-yellow-light hover:-outline-offset-2",
      },
      size: {
        md: "h-14 p-4",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      handling: false,
    },
  },
);

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  children,
  variant,
  size,
  disabled,
  handling,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
        className,
      })}
      {...props}
    >
      <Title size="sm" className={buttonTextVariants({ variant })}>
        {children}
      </Title>
    </button>
  );
}
