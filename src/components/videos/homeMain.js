import React from "react"
import styled from "styled-components"
import { Container, Section } from "../layoutComponents"

const Video = styled.div`
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
    oject-fit: cover;
  }
`

export default function HomeMain() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="headline center">inner spirit photo slogan</h2>
        <Video>
          <iframe
            src="https://player.vimeo.com/video/741234082?h=2dcdadd194&badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Widescreen Sample.mov"
          />
        </Video>
      </Container>
    </Section>
  )
}
