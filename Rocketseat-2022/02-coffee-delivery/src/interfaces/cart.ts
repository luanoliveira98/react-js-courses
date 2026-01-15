import type { Coffee } from "./coffee";

export interface CoffeeCart {
  coffee: Coffee;
  quantity: number;
  totalPriceInCents: number;
}

export interface Cart {
  coffees: CoffeeCart[];
  totalItemsInCents: number;
  totalDeliveryInCents: number;
  totalPriceInCents: number;
}
