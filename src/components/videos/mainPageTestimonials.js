import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "../layoutComponents"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4em auto 20em;
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
  margin-bottom: var(--spacer-lg);
`

const Video2 = styled.div`
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
    object-fit: cover;
  }
`

const Spacer = styled.div`
  margin-bottom: var(--spacer-lg);
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
                "It turns out my presented bravado is really inside too, Mark
                showed me that. I literally went from terrified in baggy sweats
                to confidence in not much else. Being photographed unnerves me,
                I don’t even look in mirrors. This experience changed all that."
              </p>
              <p className="caps">Kenisha</p>
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
              <h2 className="subhead caps">Nude but Elegant</h2>
              <p className="italics">
                "Are you sure this is me? It is so elegant, It is nude but so
                elegant. I love it. It is so worth it. It’s even better than my
                first time, this is my favorite."
              </p>
              <p className="caps">Renilda</p>
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
              <h2 className="subhead caps">The Day was Empowering</h2>
              <p className="italics">
                "I am in awe, just blown away. The day was empowering, I saw a
                side of myself I never imagined! You have to do this!"
              </p>
              <p className="caps">Allison Orange</p>
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
              <h2 className="subhead caps">I did this for me</h2>
              <p className="italics">
                "I will have wall prints all over my house. All my fav parts are
                highlighted. I have some girlfriends excited to see these and
                have their time. I did this for myself, It is intended for have
                me feel better about myself. Once we started, I didn’t even
                notice I was naked. I was so proud of myself."
              </p>
              <p className="caps">Allison Moore</p>
            </ReviewText>
          </Video2>
        </GridAuto>
      </Container>
    </Section>
  )
}
