import styled from "styled-components"

export const WrapperTextRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 2em 0.5fr;

    @media screen and (max-width: 62em) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto 2em auto;
    
        .img-left {grid-row: 1 / span 2; grid-column: 1 / -1; z-index: 1;}
        .text-right {grid-row: 2 / -1; grid-column: 1 / -1; z-index 2;}
    }

  .img-left {
    grid-column: 1 / span 2;
    grid-row: 1 / -1;
    z-index: 1;
    border-radius: var(--br);
  }

  .text-right {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    z-index: 2;
    align-self: center;
  }
`
export const WrapperTextLeft = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2em 1fr;

  @media screen and (max-width: 62em) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 2em auto;

    .img-right {grid-row: 1 / span 2; grid-column: 1 / -1; z-index: 1;}
    .text-left {grid-row: 2 / -1; grid-column: 1 / -1; z-index 2;}
}

  .text-left {
    grid-column: 1 / span 2;
    grid-row: 1 / -1;
    z-index: 2;
    align-self: center;
  }

  .img-right {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    z-index: 1;
    border-radius: var(--br);
  }
`

export const TextBox = styled.div`
  background: var(--clr-light);
  color: var(--clr-accent);
  padding: 2em;
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
`
