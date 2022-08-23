import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"
import { TextBox, WrapperTextLeft, WrapperTextRight } from "./overlapStyles"

const BottomWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 2em auto;

    .img-top {grid-row: 1 / span 2; grid-column: 1 / -1; z-index: 1;}
    .text-bottom {grid-row: 2 / -1; grid-column: 1 / -1; z-index 2;}
`

export default function Why() {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <h2 className="headline center">
          why we only do nude, boudoir, & beauty photography
        </h2>
        <WrapperTextRight>
          <StaticImage
            className="img-left"
            src="../../images/why-we-do-boudoir.jpg"
            alt="why we do boudoir, nudes, & beauty"
          />
          <TextBox className="spacing text-right">
            <p>
              There’s profound power in pivotal moments to change someone’s life
              for the better. These are the moments you point to years later,
              saying, “That’s when everything changed for me.”
            </p>
            <p>
              Most pivotal moments happen spontaneously — you go through an
              unexpected breakup, you receive a new career opportunity, you meet
              someone who changes your life.
            </p>
            <p>But some pivotal moments can be consciously conjured.</p>
            <p>
              Amid a time when you feel lost, stuck, or just a little blah, you
              can shake up your perspective and{" "}
              <span className="bold italics">
                alter your life or mindset for the better…
              </span>
            </p>
          </TextBox>
        </WrapperTextRight>
      </Container>
      <BottomWrapper>
        <StaticImage
          class="img-top"
          src="../../images/do-something-bold.jpg"
          alt="do something bold with photography"
        />
        <Container className="text-bottom">
          <TextBox>
            <p className="headline italics">
              … by doing something bold and vulnerable, something you’ve never
              done before, challenging limiting beliefs about yourself.
            </p>
          </TextBox>
        </Container>
      </BottomWrapper>
      <Container>
        <WrapperTextLeft>
          <TextBox className="spacing text-left">
            <p>Something like: nude, boudoir, & beauty photography.</p>
            <p>
              After working with more than 5,100 women, Mark has witnessed
              thousands of such pivotal moments occur, seeing women go from
              nervous and withdrawn to bold and powerful … within the span of
              their session.
            </p>
            <p>
              That’s why at Inner Spirit, we strongly believe in boudoir and
              nude photography as a self-discovery journey. It’s so much more
              than the photograph.
            </p>
            <p>If this resonates with you, you’re in the right place.</p>
          </TextBox>
          <StaticImage
            className="img-right"
            src="../../images/nude-boudoir-beauty.jpg"
            alt="why we do boudoir, nudes, & beauty"
          />
        </WrapperTextLeft>
      </Container>
    </Section>
  )
}
