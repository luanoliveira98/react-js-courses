import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";
import { textVariants } from "./text";

export const inputTextVariants = cva(
  "border rounded-lg border-solid border-gray-500 bg-transparent outline-none gap-2 flex items-center",
  {
    variants: {
      variant: {
        primary: "focus-within:border-yellow",
      },
      size: {
        md: "p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const inputFieldVariants = cva(
  "bg-transparent outline-none w-full text-base leading-6 placeholder:text-gray-400",
  {
    variants: {
      size: {
        md: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const inputTextIconVariants = cva("transition shrink-0", {
  variants: {
    variant: {
      primary: "fill-yellow",
    },
    size: {
      sm: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface InputTextProps
  extends
    Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputTextVariants> {
  icon: React.FC<React.ComponentProps<"svg">>;
}

export default function InputText({
  size,
  variant,
  className,
  icon: IconComponent,
  ...props
}: InputTextProps) {
  return (
    <div
      className={cx(
        inputTextVariants({ size, variant }),
        textVariants(),
        className,
      )}
    >
      <Icon svg={IconComponent} className={inputTextIconVariants()} />
      <input className={inputFieldVariants({ size })} {...props} />
    </div>
  );
}
