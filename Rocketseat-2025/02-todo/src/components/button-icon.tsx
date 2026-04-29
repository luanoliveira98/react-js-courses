import type React from "react";
import Icon from "./icon";
import type { VariantProps } from "class-variance-authority";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./variants/button-icon";
import Skeleton from "./skeleton";

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
    </button>
  );
}
