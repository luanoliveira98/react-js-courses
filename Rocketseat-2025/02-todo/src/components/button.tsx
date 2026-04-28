import type React from "react";
import Icon from "./icon";
import type { VariantProps } from "class-variance-authority";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./variants/button";
import Text from "./text";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  children,
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
