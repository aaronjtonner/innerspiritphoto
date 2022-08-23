import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container, Flex, GridAuto, Section } from "./layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`

const Item = styled.div``

export default function Facts() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <h2 className="headline italics">
            what you might not know about inner spirit...
          </h2>
          <GridAuto>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                We were Canada’s first photography studio to exclusively offer
                boudoir photography, founded in 1980
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                During the late 1980s and early 1990s, Mark trained 90% of the
                boudoir photographers in Canada (boudoir photography is much
                different from wedding or family photography and requires
                specific expertise!)
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Psychiatrist Dr. Brown at the Calgary General Hospital did a
                medical white paper studying the mental health benefits of
                Mark's nude and boudoir work
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                The Voyager 3 space mission has 3 of Mark's images on board . .
                . in space!
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Disney World's Epcot Center opened with Mark's Silver body
                painted nude as part of their celebration
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Our Inner Spirit Sprite flying over our logo is our icon. She
                represents confidence, freedom, beauty, fun, and playfulness,
                but she has also been known to be a bit mischievous at times!
              </p>
            </Item>
            <Item>
              <StaticImage
                src="../images/sprite-white.jpg"
                alt="what you might not know about inner spirit photography"
              />
              <p>Mark has published 5 books</p>
            </Item>
          </GridAuto>
        </Container>
      </Section>
    </Wrapper>
  )
}
