import React from "react"
import styled from "styled-components"
import { useGalleryQuery } from "../../hooks/useGalleryQuery"
import { Section, Container, GridAuto } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  border-radius: var(--br);
`

export default function GalleryPortfolio() {
  const data = useGalleryQuery()
  return (
    <Section>
      <Container>
        <GridAuto>
          {data.wpPage.ACF_GalleryPage.gallery.map(localFile => {
            return (
              <GatsbyImage
                image={localFile.localFile.childImageSharp.gatsbyImageData}
                alt=""
              />
            )
          })}
        </GridAuto>
      </Container>
    </Section>
  )
}
