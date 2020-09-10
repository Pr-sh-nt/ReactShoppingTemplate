import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: --var(lightBlue);
  border: 0.05rem solid var(--lightBlue);
  color: var(--mainBlue);
  margin: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-all-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--lightWhite);
  }

  &:focus {
    outline: none;
  }
`;
