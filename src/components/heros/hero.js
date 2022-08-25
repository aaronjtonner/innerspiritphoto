import React from "react"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
import {
  ButtonPrimary,
  ButtonLight,
  ButtonSecondaryDark,
  ButtonOutlineLight,
} from "../buttons"
import { HeroBannerPadding } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  padding-bottom: 4em;
  border-bottom: 1px solid var(--clr-light);

  // @media screen and (max-width: 32em) {
  //   padding: 8em 0 4em 0;
  // }

  // @media screen and (max-width: 22em) {
  //   padding: 6em 0 4em 0;
  // }
`

const Text = styled.div`
  h1 {
    display: flex;
    flex-direction: column;

    @media (min-width: 89em) {
      .span-1 {
        font-size: 5rem;
        line-height: 0.7;
      }
      .span-2 {
        font-size: 4rem;
      }
      .span-3 {
        font-size: 2rem;
      }
      .span-4 {
        font-size: 3rem;
      }
    }
  }
`

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
`
const Logo = styled.div`
  display: flex;
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <HeroBannerPadding />
      <Container>
        <Flex className="spacing-lg">
          <Video>
            <iframe
              src="https://player.vimeo.com/video/741244788?h=49cdbe3471&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Square Sample.mov"
            />
            <p className="italics center subhead">
              “When I saw my photos, I broke into tears because I thought, I
              can't believe how beautiful that person is.” - Deanna
            </p>
          </Video>
          <Text className="spacing-md">
            <h1 className="headline">
              <span className="span-1">the Creative</span>{" "}
              <span className="span-2">nude & boudoir</span>{" "}
              <span className="span-3">
                photography in Calgary <br /> for those seeking adventure
              </span>
              <span className="span-4">and empowerment</span>
            </h1>

            <ActionsDesktop>
              <ButtonOutlineLight to="/experience">
                explore the experience &#x2192;
              </ButtonOutlineLight>
              <ButtonPrimary to="/book-now">
                book planning session now &#x2192;
              </ButtonPrimary>
            </ActionsDesktop>
            <Logo>
              <StaticImage
                src="../../images/logo-white.svg"
                alt="nude & boudoir photography in calgary"
                width={150}
              />
            </Logo>
          </Text>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
