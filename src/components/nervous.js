import React from "react"
import styled from "styled-components"
import { AnchorPrimary, ButtonPrimary } from "./buttons"
import { Container, Section } from "./layoutComponents"
import { BsFillTelephoneFill } from "react-icons/bs"
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 2em auto;
`

const Text = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  text-align: center;

  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const ButtonWrapper = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  justify-self: center;
`

export default function Nervous() {
  return (
    <Section>
      <Container>
        <Wrapper className="spacing">
          <Text className="spacing">
            <div>
              <h2 className="headline italics accent">nervous? excited?</h2>
              <h3 className="subhead italics accent caps">
                take the leap, we'll catch you!
              </h3>
            </div>
            <p className="accent">
              Getting butterflies before booking your first nude or boudoir
              photography session is normal… whether it’s because you’re excited
              or nervous (or both!). We’ll meet you where you are and help you
              navigate through the emotions that come up.
            </p>
          </Text>
          <ButtonWrapper>
            <AnchorPrimary href="tel: 403-252-2662">
              <div>
                <BsFillTelephoneFill />
                <span>make the leap</span>
              </div>
            </AnchorPrimary>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}
