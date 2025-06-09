import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background-color: ${({ theme }) => theme.colors["base-input"]};

  transition: all 0.2s;

  input {
    padding: 0.75rem;

    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  span {
    color: ${({ theme }) => theme.colors["base-label"]};
    padding-right: 0.75rem;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`;
