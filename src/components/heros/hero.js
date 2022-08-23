import React from "react"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
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

const ActionsDesktop = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
    text-align: center;
  }

  & > * + * {
    margin-left: 10px;
  }

  @media screen and (max-width: 103em) {
    flex-direction: column;
    text-align: center;
    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  @media screen and (max-width: 31em) {
    display: none;
  }
`
const ActionsMobile = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
    text-align: center;
  }

  & > * + * {
    margin-left: 10px;
  }

  @media screen and (max-width: 103em) {
    flex-direction: column;
    text-align: center;
    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  @media screen and (min-width: 31em) {
    display: none;
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
            <ActionsDesktop>
              <ButtonOutlineLight to="/experience">
                explore the experience &#x2192;
              </ButtonOutlineLight>
              <ButtonLight to="/book-now">
                book planning session now &#x2192;
              </ButtonLight>
            </ActionsDesktop>
            <ActionsMobile>
              <ButtonOutlineLight to="/experience">
                the experience &#x2192;
              </ButtonOutlineLight>
              <ButtonLight to="/book-now">book now &#x2192;</ButtonLight>
            </ActionsMobile>
          </Text>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
