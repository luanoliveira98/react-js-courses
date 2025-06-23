import { FormProvider, useForm } from "react-hook-form";
import { CompleteYourOrder } from "./components/CompleteYourOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartContainer } from "./styles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newOrderFormValidationSchema = z.object({
  zipcode: z.string(),
  street: z.string(),
  number: z.number().min(1),
  additionalInformation: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.string(),
});

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipcode: "",
      number: undefined,
      additionalInformation: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: undefined,
    },
  });

  return (
    <CartContainer>
      <FormProvider {...newOrderForm}>
        <CompleteYourOrder />
        <SelectedCoffees />
      </FormProvider>
    </CartContainer>
  );
}
