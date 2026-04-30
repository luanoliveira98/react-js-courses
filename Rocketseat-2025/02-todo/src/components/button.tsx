import type React from "react";
import Icon from "./icon";
import type { VariantProps } from "class-variance-authority";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./variants/button";
import Text from "./text";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}

export default function Button({
  children,
  variant,
  size,
  disabled,
  className,
  icon,
  handling,
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
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
