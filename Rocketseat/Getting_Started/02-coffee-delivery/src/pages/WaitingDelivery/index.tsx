import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import {
  WaitingDeliveryContainer,
  WaitingDeliveryContent,
  WaitingDeliveryItemLocal,
  WaitingDeliveryItemPayment,
  WaitingDeliveryItemTimer,
  WaitingDeliveryOrder,
  WaitingDeliveryOrderInfo,
  WaitingDeliveryTitle,
} from "./styles";
import deliveryIllustration from "../../assets/delivery-illustration.png";

interface Address {
  street: string;
  number: number;
  additionalInformation?: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface DeliveryForecast {
  min: number;
  max: number;
}

interface DeliveryOrder {
  address: Address;
  deliveryForecast: DeliveryForecast;
  paymentMethod: string;
}

export function WaitingDelivery() {
  const deliveryOrder: DeliveryOrder = {
    address: {
      street: "Rua João Daniel Martinelli",
      number: 102,
      neighborhood: "Farrapos",
      city: "Porto Alegre",
      state: "RS",
    },
    deliveryForecast: {
      min: 20,
      max: 30,
    },
    paymentMethod: "Cartão de Crédito",
  };

  const { address, deliveryForecast, paymentMethod } = deliveryOrder;

  return (
    <WaitingDeliveryContainer>
      <WaitingDeliveryTitle>
        <h1>Uhu! Pedido confirmado</h1>

        <span>Agora é só aguardar que logo o café chegará até você</span>
      </WaitingDeliveryTitle>

      <WaitingDeliveryContent>
        <WaitingDeliveryOrder>
          <WaitingDeliveryOrderInfo>
            <WaitingDeliveryItemLocal>
              <MapPin size={32} weight="fill" />

              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {address.street}, {address.number}{" "}
                    {address.additionalInformation
                      ? ` - ${address.additionalInformation}`
                      : null}
                  </strong>{" "}
                </span>

                <span>
                  {address.neighborhood} - {address.city}, {address.state}
                </span>
              </div>
            </WaitingDeliveryItemLocal>

            <WaitingDeliveryItemTimer>
              <Timer size={32} weight="fill" />

              <div>
                <span>Previsão de entrega</span>

                <strong>
                  {deliveryForecast.min} min - {deliveryForecast.max} min
                </strong>
              </div>
            </WaitingDeliveryItemTimer>

            <WaitingDeliveryItemPayment>
              <CurrencyDollar size={32} />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod}</strong>
              </div>
            </WaitingDeliveryItemPayment>
          </WaitingDeliveryOrderInfo>
        </WaitingDeliveryOrder>

        <img
          src={deliveryIllustration}
          alt="Delivery man riding a motorcycle"
        />
      </WaitingDeliveryContent>
    </WaitingDeliveryContainer>
  );
}
