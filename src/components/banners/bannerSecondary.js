import React from "react"
import styled from "styled-components"
import { Container, Actions, HeroBannerPadding } from "../layoutComponents"
import { ButtonLight, AnchorInline, ButtonPrimary } from "../buttons"
import Breadcrumb3Links from "../breadcrumbs/breadcrumb3links"

const Wrapper = styled.div`
  background: var(--clr-dark);
  padding-bottom: 4em;
  border-bottom: 1px solid var(--clr-light);

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media screen and (max-width: 74em) {
      display: grid;
      grid-template-rows: auto 2em auto;

      img {
        grid-row: 1 / span 2;
        grid-column: 1 / -1;
        z-index: 1;
      }
    }

    & > * + * {
      margin-left: 2em;
    }
  }

  hr {
    background-color: var(--clr-light);
    height: 1px;
    border: none;

    @media screen and (max-width: 74em) {
      background-color: var(--clr-accent);
      height: 1px;
      border: none;
    }
  }

  img {
    border-radius: var(--br);
    object-fit: cover;
  }
`

const Text = styled.div`
  color: var(--txt-light);

  .btn-accent {
    display: none;
  }
  @media screen and (max-width: 74em) {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    z-index: 2;
    padding: 2em;
    background: var(--clr-light);
    color: var(--clr-accent);

    .btn-accent {
      display: block;
    }

    .btn-light {
      display: none;
    }
  }
`

// banner with only 2 links in the breadcrumb
export default function BannerSecondary(props) {
  return (
    <Wrapper>
      <HeroBannerPadding />
      <Container className="container">
        <img className="stretch clip-img" src={props.img} alt={props.alt} />
        <Text className="spacing">
          <div>
            <Breadcrumb3Links
              to1={props.to1}
              link1={props.link1}
              to2={props.to2}
              link2={props.link2}
              to3={props.to3}
              link3={props.link3}
            />
            <hr />
            <h1 className="headline">{props.headline}</h1>
          </div>
          <p>{props.description}</p>
          <Actions>
            <ButtonPrimary className="btn-light" to="/book-now">
              book now &#x2192;
            </ButtonPrimary>
            <ButtonPrimary className="btn-accent" to="/book-now">
              book now &#x2192;
            </ButtonPrimary>
          </Actions>
        </Text>
      </Container>
    </Wrapper>
  )
}
