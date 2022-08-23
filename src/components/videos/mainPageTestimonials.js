import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "../layoutComponents"

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

const ReviewText = styled.div`
  max-width: 70ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Video2 = styled.div`
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
    object-fit: cover;
  }
`

export default function MainPageTestimonials() {
  return (
    <Section>
      <Wrapper>
        <Bg>
          <div></div>
          <div></div>
        </Bg>
        <Video>
          <Container className="spacing">
            <Text className="center">
              <h3 className="subhead upper">what can you expect?</h3>{" "}
              <h2 className="headline">
                we'll let <span className="italics">our clients</span> answer
                that...{" "}
              </h2>
            </Text>
            <iframe
              src="https://player.vimeo.com/video/741234082?h=2dcdadd194&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Widescreen Sample.mov"
            />
            <ReviewText className="center spacing accent">
              <h2 className="subhead caps">from baggy sweats to confidence</h2>
              <p className="italics">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                id ipsam ab quisquam aspernatur cupiditate dignissimos voluptate
                porro impedit commodi?"
              </p>
              <p className="caps">customer name</p>
            </ReviewText>
          </Container>
        </Video>
      </Wrapper>
      <Container>
        <GridAuto>
          <Video2 className="spacing">
            <iframe
              src="https://player.vimeo.com/video/741245031?h=b531f2f7a5&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vertical Sample"
            />
            <ReviewText className="center spacing">
              <h2 className="subhead caps">from baggy sweats to confidence</h2>
              <p className="italics">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                id ipsam ab quisquam aspernatur cupiditate dignissimos voluptate
                porro impedit commodi?"
              </p>
              <p className="caps">customer name</p>
            </ReviewText>
          </Video2>
          <Video2 className="spacing">
            <iframe
              src="https://player.vimeo.com/video/741245031?h=b531f2f7a5&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vertical Sample"
            />
            <ReviewText className="center spacing">
              <h2 className="subhead caps">from baggy sweats to confidence</h2>
              <p className="italics">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                id ipsam ab quisquam aspernatur cupiditate dignissimos voluptate
                porro impedit commodi?"
              </p>
              <p className="caps">customer name</p>
            </ReviewText>
          </Video2>
          <Video2 className="spacing">
            <iframe
              src="https://player.vimeo.com/video/741245031?h=b531f2f7a5&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vertical Sample"
            />
            <ReviewText className="center spacing">
              <h2 className="subhead caps">from baggy sweats to confidence</h2>
              <p className="italics">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                id ipsam ab quisquam aspernatur cupiditate dignissimos voluptate
                porro impedit commodi?"
              </p>
              <p className="caps">customer name</p>
            </ReviewText>
          </Video2>
        </GridAuto>
      </Container>
    </Section>
  )
}
