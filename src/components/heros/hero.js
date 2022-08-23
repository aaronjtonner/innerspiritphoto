import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  ButtonPrimary,
  ButtonLight,
  ButtonSecondaryDark,
  ButtonOutlineLight,
} from "../buttons"
import { StaticImage } from "gatsby-plugin-image"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
  padding: 4em;
`

const Text = styled.div``

const Video = styled.div`
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
    object-fit: cover;
  }
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Container>
        <Flex>
          <Video>
            <iframe
              src="https://player.vimeo.com/video/741244788?h=49cdbe3471&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Square Sample.mov"
            />
          </Video>
          <Text className="spacing">
            <h1 className="headline">
              Creative nude & boudoir photography in Calgary for those seeking
              empowerment & adventure
            </h1>
            <p className="italics">
              “When I saw my photos, I broke into tears because I thought, I
              can't believe how beautiful that person is.” - Deanna
            </p>
            <Actions>
              <ButtonOutlineLight to="/experience">
                explore the experience &#x2192;
              </ButtonOutlineLight>
              <ButtonLight to="/book-now">
                book planning session now &#x2192;
              </ButtonLight>
            </Actions>
          </Text>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
