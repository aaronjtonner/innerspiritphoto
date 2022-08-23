import styled from "styled-components"

export const WrapperTextRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 2em 0.5fr;

  @media screen and (max-width: 62em) {
    display: flex;
    flex-direction: column;
  }

  .img-left {
    grid-column: 1 / span 2;
    grid-row: 1 / -1;
    z-index: 1;
    border-radius: var(--br);
  }
`
export const WrapperTextLeft = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2em 1fr;

  @media screen and (max-width: 62em) {
    display: flex;
    flex-direction: column-reverse;
  }

  .img-right {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    z-index: 1;
    border-radius: var(--br);
  }
`

export const TextBoxRight = styled.div`
  background: var(--clr-light);
  color: var(--clr-accent);
  padding: 2em;
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);

  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 2;
  align-self: center;

  @media screen and (max-width: 62em) {
    width: 90%;
  }
`
export const TextBoxLeft = styled.div`
  background: var(--clr-light);
  color: var(--clr-accent);
  padding: 2em;
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);

  grid-column: 1 / span 2;
  grid-row: 1 / -1;
  z-index: 2;
  align-self: center;
  @media screen and (max-width: 62em) {
    width: 90%;
  }
`
