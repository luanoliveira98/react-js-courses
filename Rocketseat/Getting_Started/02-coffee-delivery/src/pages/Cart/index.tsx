import { CompleteYourOrder } from "./components/CompleteYourOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <CompleteYourOrder />
      <SelectedCoffees />
    </CartContainer>
  );
}
