import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Actions, Container, Flex, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

export default function CTA(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <StaticImage
              src="../images/get-your-quote.svg"
              alt="call now to get your quote"
            />
            <Text className="spacing">
              <div>
                <p className="italics caps">{props.subtitle}</p>
                <h3 className="title bold">book your glass service today!</h3>
              </div>
              <p>
                By giving us a call, or writing us a message using our online
                contact form, our experienced team can provide you with an
                estimate on your next window or door project!
              </p>
              <Actions>
                <ButtonPrimary to="/contact">book online</ButtonPrimary>
                <AnchorInline className="bold italics" href="tel: 403-891-3172">
                  <span className="light">Or Call Us:</span> <br />
                  403-891-3172
                </AnchorInline>
              </Actions>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
