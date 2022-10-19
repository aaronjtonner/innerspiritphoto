import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Actions, Container, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
  border-bottom: 1px solid var(--clr-light);
  .cta-img {
    border-radius: vavr(--br);
    border: 1px solid var(--clr-light);
    width: 80%;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: 57em) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 57em) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const Text = styled.div`
  color: var(--txt-light);

  h3 {
    color: var(--txt-light-secondary);
  }
`

export default function CTA(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <StaticImage
              className="stretch cta-img"
              src="../images/book-your-calgary-boudoir-session.jpg"
              alt="cbook your calgary boudoir session"
            />
            <Text className="spacing">
              <div>
                <h2 className="headline">{props.headline}</h2>
                <h3 className="subhead caps">{props.subhead}</h3>
              </div>
              <p>{props.description}</p>
              <ButtonPrimary to="/book-now">
                yes, i want to take the leap &#x2192;
              </ButtonPrimary>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
