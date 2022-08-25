import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container, Flex, Section } from "./layoutComponents"
import styled from "styled-components"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 2em;
`

const Item = styled.div`
  display: flex;

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 5px;
  }

  .sprite-img {
    height: 20px;
    width: 20px;
  }
`

export default function Facts() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="headline italics">
            what you might not know about inner spirit...
          </h2>
          <GridAuto>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                We were Canada’s first photography studio to exclusively offer
                boudoir photography, founded in 1980.
              </p>
            </Item>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                During the late 1980s and early 1990s, Mark trained 90% of the
                boudoir photographers in Canada (boudoir photography is much
                different from wedding or family photography and requires
                specific expertise!).
              </p>
            </Item>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Psychiatrist Dr. Brown at the Calgary General Hospital did a
                medical white paper studying the mental health benefits of
                Mark's nude and boudoir work.
              </p>
            </Item>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                The Voyager 3 space mission has 3 of Mark's images on board . .
                . in space!
              </p>
            </Item>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Disney World's Epcot Center opened with Mark's Silver body
                painted nude as part of their celebration.
              </p>
            </Item>
            <Item>
              <StaticImage
                className="sprite-img"
                src="../images/small-sprite.png"
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
                className="sprite-img"
                src="../images/small-sprite.png"
                alt="what you might not know about inner spirit photography"
              />
              <p>
                Mark has published 4 photography books, and 1 poetry book in
                title Pages Of Man.
              </p>
            </Item>
          </GridAuto>
        </Container>
      </Section>
    </Wrapper>
  )
}
