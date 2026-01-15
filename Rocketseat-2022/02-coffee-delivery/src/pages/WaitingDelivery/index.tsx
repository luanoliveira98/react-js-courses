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
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";
import { PaymentMethodPrintableType } from "../../reducers/order/reducer";

interface DeliveryForecast {
  min: number;
  max: number;
}

export function WaitingDelivery() {
  const { order } = useContext(OrderContext);

  const deliveryForecast: DeliveryForecast = {
    min: 20,
    max: 30,
  };

  const paymentMethod = PaymentMethodPrintableType[order.paymentMethod];

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
                    {order.street}, {order.number}{" "}
                    {order.additionalInformation
                      ? ` - ${order.additionalInformation}`
                      : null}
                  </strong>{" "}
                </span>

                <span>
                  {order.neighborhood} - {order.city}, {order.state}
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
