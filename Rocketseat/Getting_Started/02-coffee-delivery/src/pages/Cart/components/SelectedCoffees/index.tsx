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
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function SelectedCoffees() {
  const {
    cart,
    removeToCart,
    incrementCoffeeQuantity,
    decrementCoffeeQuantity,
  } = useContext(OrderContext);

  const {
    coffees,
    totalPriceInCents,
    totalDeliveryInCents,
    totalItemsInCents,
  } = cart;

  function handleRemoveToCart(coffeeId: number) {
    removeToCart(coffeeId);
  }

  function handleIncrementCoffeeQuantity(coffeeId: number) {
    incrementCoffeeQuantity(coffeeId);
  }

  function handleDecrementCoffeeQuantity(coffeeId: number) {
    decrementCoffeeQuantity(coffeeId);
  }

  const isSubmitDisabled = cart.coffees.length === 0;

  return (
    <SelectedCoffeesContainer>
      <CardTitle>Cafés selecionados</CardTitle>

      <CartTotalCard>
        {coffees.map((coffeeCart) => {
          return (
            <Fragment key={coffeeCart.coffee.id}>
              <CartCoffee>
                <div>
                  <img
                    src={coffeeCart.coffee.image}
                    alt={coffeeCart.coffee.name}
                  />

                  <div>
                    <span>{coffeeCart.coffee.name}</span>
                    <CartCoffeeInfo>
                      <IncrementInput
                        quantity={coffeeCart.quantity}
                        incrementQuantity={() =>
                          handleIncrementCoffeeQuantity(coffeeCart.coffee.id)
                        }
                        decrementQuantity={() =>
                          handleDecrementCoffeeQuantity(coffeeCart.coffee.id)
                        }
                      />

                      <button
                        onClick={() => handleRemoveToCart(coffeeCart.coffee.id)}
                      >
                        <Trash size={16} />
                        <span>Remover</span>
                      </button>
                    </CartCoffeeInfo>
                  </div>

                  <strong>
                    {new Intl.NumberFormat("pt-br", {
                      currency: "BRL",
                      style: "currency",
                    }).format(coffeeCart.totalPriceInCents / 100)}
                  </strong>
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
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(totalItemsInCents / 100)}
            </span>
          </div>

          <div>
            <span>Entrega</span>

            <span>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(totalDeliveryInCents / 100)}
            </span>
          </div>

          <div>
            <span>Total</span>

            <span>
              {new Intl.NumberFormat("pt-br", {
                currency: "BRL",
                style: "currency",
              }).format(totalPriceInCents / 100)}
            </span>
          </div>
        </CartTotalInfo>

        <CheckoutButton disabled={isSubmitDisabled} type="submit">
          Confirmar Pedido
        </CheckoutButton>
      </CartTotalCard>
    </SelectedCoffeesContainer>
  );
}
