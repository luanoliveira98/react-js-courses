import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { RadioInput } from "../../../../components/Form/RadionInput";
import { TextInput } from "../../../../components/Form/TextInput";
import {
  CompleteYourOrderContainer,
  CardTitle,
  CartAddressCard,
  CartCardHeader,
  CartAddressForm,
  CartPaymentCard,
  PaymentOptions,
} from "./styles";
import { PaymentMethodType } from "../../../../reducers/order/reducer";
import { useFormContext } from "react-hook-form";
import type { NewOrderFormData } from "../..";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function CompleteYourOrder() {
  const { checkout } = useContext(OrderContext);

  const { register, watch, handleSubmit } = useFormContext<NewOrderFormData>();

  const selectedPaymentMethod = watch("paymentMethod");

  const handleCreateNewOrder = async (data: NewOrderFormData) => {
    try {
      checkout(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CompleteYourOrderContainer>
      <CardTitle>Complete seu pedido</CardTitle>

      <form action="" onSubmit={handleSubmit(handleCreateNewOrder)} id="order">
        <CartAddressCard>
          <CartCardHeader>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CartCardHeader>
          <CartAddressForm>
            <TextInput
              placeholder="CEP"
              containerProps={{ style: { gridArea: "zipcode" } }}
              {...register("zipcode")}
            />
            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: "street" } }}
              {...register("street")}
            />
            <TextInput
              placeholder="Número"
              containerProps={{ style: { gridArea: "number" } }}
              {...register("number")}
            />
            <TextInput
              placeholder="Complemento"
              containerProps={{
                style: { gridArea: "additionalInformation" },
              }}
              optional
              {...register("additionalInformation")}
            />
            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: "neighborhood" } }}
              {...register("neighborhood")}
            />
            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: "city" } }}
              {...register("city")}
            />
            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: "state" } }}
              {...register("state")}
            />
          </CartAddressForm>
        </CartAddressCard>
        <CartPaymentCard>
          <CartCardHeader>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CartCardHeader>
          <PaymentOptions>
            <RadioInput
              isSelected={
                selectedPaymentMethod === PaymentMethodType.CREDIT_CARD
              }
              {...register("paymentMethod")}
              value={PaymentMethodType.CREDIT_CARD}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </RadioInput>
            <RadioInput
              isSelected={
                selectedPaymentMethod === PaymentMethodType.DEBIT_CARD
              }
              {...register("paymentMethod")}
              value={PaymentMethodType.DEBIT_CARD}
            >
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </RadioInput>
            <RadioInput
              isSelected={selectedPaymentMethod === PaymentMethodType.MONEY}
              {...register("paymentMethod")}
              value={PaymentMethodType.MONEY}
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioInput>
          </PaymentOptions>
        </CartPaymentCard>
      </form>
    </CompleteYourOrderContainer>
  );
}
