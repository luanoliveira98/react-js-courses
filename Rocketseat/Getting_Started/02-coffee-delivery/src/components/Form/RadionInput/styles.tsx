import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const RadioInputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  min-width: 11.25rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }
`;
