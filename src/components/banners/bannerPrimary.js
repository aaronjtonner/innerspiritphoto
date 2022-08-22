import React from "react"
import styled from "styled-components"
import { Container, Actions } from "../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../buttons"
import Breadcrumb2Links from "../breadcrumbs/breadcrumb2links"

const Wrapper = styled.div`
  background: url("../../images/banner-primary.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  padding: 4em 0;
`

const Text = styled.div`
  max-width: 70ch;
  width: 100%;
  color: var(--txt-light);
`

// banner with only 2 links in the breadcrumb
export default function Banner(props) {
  return (
    <Wrapper>
      <Container className="spacing">
        <Text className="spacing">
          <div>
            <Breadcrumb2Links
              to1={props.to1}
              link1={props.link1}
              to2={props.to2}
              link2={props.link2}
            />
            <hr />
            <h1 className="title bold">{props.title}</h1>
          </div>
          <p className="body--small">
            We can help you with quality window, door, and glass products &
            services for your home.
          </p>
          <Actions>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
            <AnchorInline className="bold italics" href="tel: 403-891-3172">
              <span className="light">Or Call Us:</span> <br />
              403-891-3172
            </AnchorInline>
          </Actions>
        </Text>
      </Container>
    </Wrapper>
  )
}
