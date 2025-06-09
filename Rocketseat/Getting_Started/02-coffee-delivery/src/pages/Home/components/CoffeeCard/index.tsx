import { ShoppingCart } from "phosphor-react";
import type { Coffee } from "../CoffeeList";
import {
  CoffeeActions,
  CoffeeBuy,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  CoffeeTags,
} from "./styles";
import { IncrementInput } from "../../../../components/IncrementInput";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { name, image, tags, priceInCents, description } = coffee;

  const price = (priceInCents / 100).toFixed(2).toString().replace(".", ",");

  return (
    <CoffeeCardContainer>
      <img src={image} alt={name} />

      <CoffeeTags>
        {tags.map((tag) => {
          return <span>{tag}</span>;
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
          <IncrementInput quantity={1} />

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeCardContainer>
  );
}
