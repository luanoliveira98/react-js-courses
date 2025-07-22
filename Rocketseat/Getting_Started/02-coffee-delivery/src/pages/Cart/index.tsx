import { FormProvider, useForm } from "react-hook-form";
import { CompleteYourOrder } from "./components/CompleteYourOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartContainer } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { PaymentMethodType } from "../../reducers/order/reducer";

const newOrderFormValidationSchema = z.object({
  zipcode: z.string().min(1, "CEP é obrigatório"),
  street: z.string().min(1, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  additionalInformation: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(1, "Estado é obrigatório"),
  paymentMethod: z.enum([
    PaymentMethodType.CREDIT_CARD,
    PaymentMethodType.DEBIT_CARD,
    PaymentMethodType.MONEY,
  ]),
});

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const { checkout } = useContext(OrderContext);

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipcode: "",
      street: "",
      number: "",
      additionalInformation: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: PaymentMethodType.CREDIT_CARD,
    },
  });

  const { handleSubmit } = newOrderForm;

  const handleCreateNewOrder = async (data: NewOrderFormData) => {
    try {
      checkout(data);
    } catch (error) {
      console.error("Error in handleCreateNewOrder:", error);
    }
  };

  return (
    <CartContainer>
      <FormProvider {...newOrderForm}>
        <form onSubmit={handleSubmit(handleCreateNewOrder)} id="order">
          <CompleteYourOrder />
          <SelectedCoffees />
        </form>
      </FormProvider>
    </CartContainer>
  );
}
