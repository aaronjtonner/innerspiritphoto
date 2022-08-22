import React from "react"
import styled from "styled-components"
import { Actions, Container, Flex } from "../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../buttons"
import Breadcrumb3Links from "../breadcrumbs/breadcrumb3links"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8em auto 8em;
`

const Bg = styled.div`
  background: url("../../images/banner-primary.jpg"), rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  z-index: 1;
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
`

const Bottom = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;

  z-index: 2;
  grid-row: 2 / -1;
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  @media screen and (max-width: 48em) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  img {
    border-radius: var(--br);
    object-fit: cover;
  }
`

const Text = styled.div`
  background: var(--clr-light-secondary);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);

  h2 {
    color: var(--clr-dark);
  }
`

// banner with only 2 links in the breadcrumb
export default function BannerSecondary(props) {
  return (
    <Wrapper>
      <Bg />
      <Bottom>
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
            <h2 className="title bold">{props.title}</h2>
          </div>
          <p className="body--small">{props.description}</p>
          <Actions>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
            <AnchorInline className="bold italics" href="tel: 403-891-3172">
              <span className="dark">Or Call Us:</span> <br />
              403-891-3172
            </AnchorInline>
          </Actions>
        </Text>
        <img className="stretch" src={props.img} alt={props.alt} />
      </Bottom>
    </Wrapper>
  )
}
