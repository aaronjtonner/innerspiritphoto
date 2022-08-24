import React from "react"
import { Container, GridAuto, Section } from "./layoutComponents"

export default function Guarantee() {
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <h2 className="headline italics">our guarantees to you</h2>
          <p className="subhead caps">Our goal is nothing short of “wow!”...</p>
        </div>
        <GridAuto>
          <div className="spacing-sm center">
            <h3 className="caps teriatary upper accent">
              best experience ever guarantee
            </h3>
            <p className="italics">
              We guarantee you will have an amazing photography experience.
            </p>
          </div>
          <div className="spacing-sm center">
            <h3 className="caps teriatary upper accent">
              You Gotta Be Thrilled Guarantee:
            </h3>
            <p className="italics">
              We guarantee that when you first see your images you will be
              thrilled, even moved to tears.
            </p>
          </div>
          <div className="spacing-sm center">
            <h3 className="caps teriatary upper accent">
              Perfection Guarantee:
            </h3>
            <p className="italics">
              Your images will be perfect by your standards when you pick them
              up.
            </p>
          </div>
        </GridAuto>
      </Container>
    </Section>
  )
}
