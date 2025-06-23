import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CompleteYourOrderContainer = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const CardTitle = styled.span`
  ${mixins.fonts.titleXS};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const CartCardHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span:first-child {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span:last-child {
      ${mixins.fonts.textS};
    }
  }
`;

const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const CartAddressCard = styled(CartCard)`
  svg {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const CartAddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "zipcode . ."
    "street street street"
    "number additionalInformation additionalInformation"
    "neighborhood city state";
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`;

export const CartPaymentCard = styled(CartCard)`
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;
