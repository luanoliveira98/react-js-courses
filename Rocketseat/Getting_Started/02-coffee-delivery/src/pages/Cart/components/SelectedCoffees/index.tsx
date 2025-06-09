import { Trash } from "phosphor-react";
import { Fragment } from "react/jsx-runtime";
import { IncrementInput } from "../../../../components/Form/IncrementInput";
import {
  SelectedCoffeesContainer,
  CartTotalCard,
  CartCoffee,
  CardTitle,
  CartTotalInfo,
  CartCoffeeInfo,
  CheckoutButton,
} from "./styles";

interface Coffee {
  id: number;
  name: string;
  quantity: number;
  totalPriceInCents: number;
  image: string;
}

export interface CartInfo {
  coffees: Coffee[];
  totalItemsInCents: number;
  totalDeliveryInCents: number;
  totalPriceInCents: number;
}

export function SelectedCoffees() {
  const cart: CartInfo = {
    coffees: [
      {
        id: 1,
        name: "Expresso Tradicional",
        totalPriceInCents: 990,
        quantity: 1,
        image: "/images/coffees/expresso.png",
      },
      {
        id: 6,
        name: "Latte",
        totalPriceInCents: 1980,
        quantity: 2,
        image: "/images/coffees/latte.png",
      },
    ],
    totalItemsInCents: 2970,
    totalDeliveryInCents: 350,
    totalPriceInCents: 3320,
  };

  return (
    <SelectedCoffeesContainer>
      <CardTitle>Cafés selecionados</CardTitle>

      <CartTotalCard>
        {cart.coffees.map((coffee) => {
          return (
            <Fragment key={coffee.id}>
              <CartCoffee>
                <div>
                  <img src={coffee.image} alt={coffee.name} />

                  <div>
                    <span>{coffee.name}</span>
                    <CartCoffeeInfo>
                      <IncrementInput quantity={coffee.quantity} />

                      <button>
                        <Trash size={16} />
                        Remover
                      </button>
                    </CartCoffeeInfo>
                  </div>

                  <aside>
                    R${" "}
                    {(coffee.totalPriceInCents / 100)
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")}
                  </aside>
                </div>
              </CartCoffee>

              <span />
            </Fragment>
          );
        })}
        <CartTotalInfo>
          <div>
            <span>Total de itens</span>

            <span>
              R${" "}
              {(cart.totalItemsInCents / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </div>

          <div>
            <span>Entrega</span>

            <span>
              R${" "}
              {(cart.totalDeliveryInCents / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </div>

          <div>
            <span>Total</span>

            <span>
              R${" "}
              {(cart.totalPriceInCents / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </div>
        </CartTotalInfo>

        <CheckoutButton type="submit" form="order">
          Confirmar Pedido
        </CheckoutButton>
      </CartTotalCard>
    </SelectedCoffeesContainer>
  );
}
