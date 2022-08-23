import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline } from "./buttons"
import { Container, GridAuto, Section, Flex } from "./layoutComponents"

const ImageStyle = {
  width: "100px",
}

const AwardsList = styled.div`
  text-align: center;
  ul {
    list-style-type: none;
  }
`

export default function Awards() {
  return (
    <Section>
      <Container className="spacing-lg">
        <div className="spacing">
          <h2 className="headline center">
            mark is an active & awarded member in:
          </h2>
          <GridAuto>
            <a href="https://www.ppoc.ca/" target="_blank">
              <StaticImage
                style={ImageStyle}
                src="../images/awards/awarded-photographer-ppoc.jpg"
                alt="professional photographers of canada"
              />
            </a>
            <a href="https://www.ppa.com/" target="_blank">
              <StaticImage
                style={ImageStyle}
                src="../images/awards/awarded-photographer-ppoa.jpg"
                alt="professional photographers of america"
              />
            </a>
            <a href="https://swpp.co.uk/" target="_blank">
              <StaticImage
                style={ImageStyle}
                src="../images/awards/awarded-photographer-swpp.jpg"
                alt="professional photographers of swpp"
              />
            </a>
            <a href="https://www.worldphotographiccup.org/" target="_blank">
              <StaticImage
                style={ImageStyle}
                src="../images/awards/awarded-photographer-wpc.jpg"
                alt="professional photographers of wpc"
              />
            </a>
          </GridAuto>
        </div>
        <AwardsList className="spacing">
          <Flex>
            <h2 className="headline center">awards & certifications</h2>{" "}
            <StaticImage
              src="../images/master-photographic-arts.jpg"
              alt="master of photographic arts"
            />
          </Flex>
          <div>
            <h3 className="subhead italics accent">
              In the Professional Photographers of Canada (PPOC) Mark holds:
            </h3>
            <ul>
              <li>
                Master of Photographic Arts (only 2 photographers in Canada have
                earned more than 13 bars)
              </li>
              <li>Service of Photographic Arts</li>
              <li>Fellow of PPOC</li>
              <li>Yousuf Karsh Lifetime Achievement Award</li>
              <li>Photographer of the Year</li>
              <li>37 Accreditations</li>
              <li>Featured in Loan Collection Books</li>
              <li>National Accredited Judge</li>
              <li>National Convention Speaker</li>
              <li>Fellow of PPOC (F/PPCO)</li>
            </ul>
          </div>
          <div>
            <h3 className="subhead italics accent">
              In the Professional Photographers of America (PPA) Mark Holds:
            </h3>
            <ul>
              <li>Master of Photography Degree (M.Photog.)</li>
              <li>Photographic Craftsman Degree (Cr.Photog.)</li>
              <li>Featured in Loan Collection Books</li>
              <li>Instructor</li>
            </ul>
          </div>
          <div>
            <h3 className="subhead italics accent">
              In England, the Society for Wedding & Portrait Photographers Mark
              Holds (SWPP):
            </h3>
            <ul>
              <li>4 International Photographer of the Year Awards</li>
              <li>Fellowship Award</li>
              <li>National Accredited Judge</li>
              <li>National Convention Speaker</li>
            </ul>
          </div>
          <div>
            <h3 className="subhead italics accent">
              In the world photographic cup (WPC), Mark holds:
            </h3>
            <ul>
              <li>World Cup Judge</li>
              <li>Team Canada Judge</li>
              <li>Mexico Judge</li>
            </ul>
          </div>
          <div>
            <h3 className="subhead italics accent">
              Additionally, Mark is honoured to have been…
            </h3>
            <ul>
              <li>
                The recipient of hundreds (yes, really!) of trophies for Figure
                Study, Portrait, Experimental, and more
              </li>
              <li>
                The Photography Reality Show Best of The Best – Winner & Judge
              </li>
              <li>
                The host of the TV series Inner Spirit Photography Presents
              </li>
              <li>
                In{" "}
                <AnchorInline
                  href="https://en.wikipedia.org/wiki/Mark_Laurie_(photographer)"
                  target="_blank"
                >
                  Wikipedia Celebrity Profile
                </AnchorInline>
              </li>
            </ul>
          </div>
        </AwardsList>
      </Container>
    </Section>
  )
}
