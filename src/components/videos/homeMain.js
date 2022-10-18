import React from "react"
import styled from "styled-components"
import { Container, Section } from "../layoutComponents"

const Video = styled.div`
  // iframe {
  //   height: 550px;
  //   width: 100%;
  //   border-radius: var(--br);

  //   @media screen and (max-width: 1510px) {
  //     height: auto;
  //   }
  // }
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
          <div style={{ padding: "42.6% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/743213878?h=6fa328954f&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Widescreen 1 Placeholder"
            />
          </div>
        </Video>
      </Container>
    </Section>
  )
}
