import React from "react"
import styled from "styled-components"
import { Container, Section } from "../layoutComponents"

const Video = styled.div`
  iframe {
    height: 550px;
    width: 100%;
    border-radius: var(--br);
  }
`

export default function HomeMain() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <p className="subhead upper bold">
            our mission is to transform you to:
          </p>
          <h2 className="headline center accent italics">
            embrace, empower, & be glorious
          </h2>
        </div>
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
