import React from "react"
import styled from "styled-components"
import { AnchorUnderline } from "../buttons"
import { Container, GridAuto, Section, Flex } from "../layoutComponents"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4em auto 12em;
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-accent);
`

const Video = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
  }
`

const Text = styled.div`
  color: var(--txt-light);
`

export default function MarkAdvantage() {
  return (
    <Section className="spacing-lg">
      <Wrapper>
        <Bg>
          <div></div>
          <div></div>
        </Bg>
        <Video>
          <Container className="spacing">
            <Text className="center">
              <h3 className="subhead upper">the mark advantage</h3>{" "}
              <h2 className="headline">
                The Advantages of a{" "}
                <span className="italics">male photographer</span> with a female
                team
              </h2>
            </Text>
            <iframe
              src="https://player.vimeo.com/video/741234082?h=2dcdadd194&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Widescreen Sample.mov"
            />
            <center>
              <AnchorUnderline href="">
                watch the full video &#x2192;
              </AnchorUnderline>
            </center>
          </Container>
        </Video>
      </Wrapper>
      <Container>
        <Flex className="center spacing accent">
          <div className="center">
            <h3 className="subhead accent caps">advantage 1</h3>
            <p className="accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas. Asperiores tempora corporis recusandae reiciendis, quidem
              unde saepe cumque molestias dolor sapiente, explicabo aspernatur,
              repellat nesciunt accusamus aliquam eos fugit.
            </p>
          </div>
          <div className="center">
            <h3 className="subhead accent caps">advantage 2</h3>
            <p className="accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas. Asperiores tempora corporis recusandae reiciendis, quidem
              unde saepe cumque molestias dolor sapiente, explicabo aspernatur,
              repellat nesciunt accusamus aliquam eos fugit.
            </p>
          </div>
          <div className="center">
            <h3 className="subhead accent caps">advantage 3</h3>
            <p className="accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quas. Asperiores tempora corporis recusandae reiciendis, quidem
              unde saepe cumque molestias dolor sapiente, explicabo aspernatur,
              repellat nesciunt accusamus aliquam eos fugit.
            </p>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
