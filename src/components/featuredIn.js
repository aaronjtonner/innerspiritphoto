import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container, Section } from "./layoutComponents"

const ImageStyle = {
  width: "100px",
  objectFit: "contain",
}

const ImageStyleEpcot = {
  width: "60px",
}

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

export default function FeaturedIn() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="headline center">
          Mark’s boudoir & nude photography work & intuitive process have been{" "}
          <span className="italics accent">featured in:</span>
        </h2>
        <GridAuto>
          <a href="https://www.citytv.com/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-citytv.jpg"
              alt="calgary boudoir photographer featured in city tv"
            />
          </a>
          <a href="https://www.cbc.ca/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-cbc.jpg"
              alt="calgary boudoir photographer featured in cbc"
            />
          </a>
          <a href="https://calgarysun.com/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-calgary-sun.jpg"
              alt="calgary boudoir photographer featured in calgary sun"
            />
          </a>
          <a href="https://www.ctvnews.ca/live" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-ctv-live.jpg"
              alt="calgary boudoir photographer featured in ctv live"
            />
          </a>
          <a href="" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-best-of-best.jpg"
              alt="calgary boudoir photographer featured in best of the best"
            />
          </a>
          <a href="https://www.thebestcalgary.com/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-best-in-calgary.jpg"
              alt="calgary boudoir photographer featured in best in calgary"
            />
          </a>

          <a href="https://www.divorcemag.com/region/AB" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-divorce-magazine.jpg"
              alt="calgary boudoir photographer featured in divorce magazine"
            />
          </a>
          <a href="https://weddingbells.ca/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-wedding-bells.jpg"
              alt="calgary boudoir photographer featured in wedding bells"
            />
          </a>
          <a href="" target="_blank">
            <StaticImage
              style={ImageStyleEpcot}
              src="../images/featured-in/calgary-boudoir-photographer-featured-epcot-center.jpg"
              alt="calgary boudoir photographer featured in best in epcot center"
            />
          </a>
          <a href="https://www.nationalgeographic.com/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-nat-geo.jpg"
              alt="calgary boudoir photographer featured in national geographic"
            />
          </a>
          <a href="" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-gallerie.jpg"
              alt="calgary boudoir photographer featured in gallerie"
            />
          </a>
          <a href="https://www.ppoc.ca/" target="_blank">
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-professional-photographer.jpg"
              alt="calgary boudoir photographer featured in professional photographer"
            />
          </a>
          <a
            href="https://thesocieties.net/professionalimagemaker/"
            target="_blank"
          >
            <StaticImage
              style={ImageStyle}
              src="../images/featured-in/calgary-boudoir-photographer-featured-image-maker.jpg"
              alt="calgary boudoir photographer featured in image maker"
            />
          </a>
        </GridAuto>
      </Container>
    </Section>
  )
}
