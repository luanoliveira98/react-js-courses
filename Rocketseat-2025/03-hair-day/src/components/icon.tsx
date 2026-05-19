import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconVariants = cva("", {
  variants: {
    size: {
      md: "w-4 h-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IconProps
  extends VariantProps<typeof iconVariants>, React.ComponentProps<"svg"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  className,
  size,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({
        size,
        className,
      })}
      {...props}
    />
  );
}
