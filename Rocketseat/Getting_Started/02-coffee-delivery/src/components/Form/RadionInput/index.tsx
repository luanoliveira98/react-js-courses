import type { InputHTMLAttributes } from "react";
import { RadioInputContainer } from "./styles";

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export function RadioInput({ children, isSelected, ...rest }: RadioInputProps) {
  return (
    <RadioInputContainer data-state={isSelected}>
      <input type="radio" {...rest} />
      {children}
    </RadioInputContainer>
  );
}
