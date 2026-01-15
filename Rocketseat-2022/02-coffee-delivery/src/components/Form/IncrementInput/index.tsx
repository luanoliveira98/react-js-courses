import { Minus, Plus } from "phosphor-react";
import { IncrementInputContainer } from "./styles";

interface IncrementInputProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function IncrementInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: IncrementInputProps) {
  return (
    <IncrementInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </IncrementInputContainer>
  );
}
