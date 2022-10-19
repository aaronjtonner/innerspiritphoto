import React from "react"
import { ButtonPrimary } from "./buttons"
import { Actions, Container, Section } from "./layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: url("../../images/cta-secondary-alley-nude.jpg"),
    rgba(0, 0, 0, 0.2);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10em 0;

  @media screen and (max-width: 43em) {
    padding: 0;
    background-position: bottom right;
  }
`

const Text = styled.div`
  padding-bottom: 4em;
  max-width: 70ch;
  margin-left: auto;
  width: 100%;
  color: var(--txt-light);
`

export default function CTAsecondary() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="headline italics">
              book your complimentary planning session
            </h2>
            <p>
              We know, our clients have been there - feeling insecure in your
              body can keep you from feeling confident and sexy. A boudoir
              photography session can empower you to start feeling better in
              your own skin!{" "}
            </p>
            <ButtonPrimary to="/book-now">
              book planning session now &#x2192;
            </ButtonPrimary>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  )
}
