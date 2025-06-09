import { Minus, Plus } from "phosphor-react";
import { IncrementInputContainer } from "./styles";

interface IncrementInputProps {
  quantity: number;
}

export function IncrementInput({ quantity }: IncrementInputProps) {
  return (
    <IncrementInputContainer>
      <button>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button>
        <Plus size={14} />
      </button>
    </IncrementInputContainer>
  );
}
