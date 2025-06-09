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

export function CompleteYourOrder() {
  return (
    <CompleteYourOrderContainer>
      <CardTitle>Complete seu pedido</CardTitle>
      <form id="order">
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
            />
            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: "street" } }}
            />
            <TextInput
              placeholder="Número"
              containerProps={{ style: { gridArea: "number" } }}
            />
            <TextInput
              placeholder="Complemento"
              containerProps={{
                style: { gridArea: "additionalInformation" },
              }}
              optional
            />
            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: "neighborhood" } }}
            />
            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: "city" } }}
            />
            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: "state" } }}
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
            <RadioInput isSelected={true}>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </RadioInput>
            <RadioInput isSelected={false}>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </RadioInput>
            <RadioInput isSelected={false}>
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioInput>
          </PaymentOptions>
        </CartPaymentCard>
      </form>
    </CompleteYourOrderContainer>
  );
}
