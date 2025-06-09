import { coffees } from "../../../../../data.json";

import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListCards, CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeListCards>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeeListCards>
    </CoffeeListContainer>
  );
}
