import { ShoppingCart } from "phosphor-react";
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  CoffeeTags,
} from "./styles";
import { IncrementInput } from "../../../../components/Form/IncrementInput";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import type { Coffee } from "../../../../interfaces/coffee";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(1);

  const { name, image, tags, priceInCents, description } = coffee;

  const price = (priceInCents / 100).toFixed(2).toString().replace(".", ",");

  function handleAddToCart() {
    addToCart({
      coffee,
      quantity,
    });
    setQuantity(1);
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1);
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={name} />

      <CoffeeTags>
        {tags.map((tag, key) => {
          return <span key={key}>{tag}</span>;
        })}
      </CoffeeTags>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeBuy>
        <CoffeePrice>
          <span>R$</span>
          <span>{price}</span>
        </CoffeePrice>

        <CoffeeActions>
          <IncrementInput
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeCardContainer>
  );
}
