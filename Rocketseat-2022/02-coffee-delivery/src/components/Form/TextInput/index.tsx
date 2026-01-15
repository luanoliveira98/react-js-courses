import type { HTMLAttributes, InputHTMLAttributes } from "react";
import { Box, TextInputContainer } from "./styles";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

export function TextInput({
  optional,
  containerProps,
  ...rest
}: TextInputProps) {
  return (
    <Box {...containerProps}>
      <TextInputContainer>
        <input type="text" {...rest} />
        {optional ? <span>Opcional</span> : null}
      </TextInputContainer>
    </Box>
  );
}
