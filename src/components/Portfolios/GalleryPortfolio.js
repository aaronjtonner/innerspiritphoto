import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { useGalleryQuery } from "../../hooks/useGalleryQuery"
import { Section, Container } from "../layoutComponents"

export const StyledImg = styled(GatsbyImage)

export default function GalleryPortfolio() {
  const data = useGalleryQuery()
  // console.log(data.wpPage.ACF_GalleryPage.gallery)
  return (
    <Section>
      <Container>
        {data.wpPage.ACF_GalleryPage.gallery.map(gallery => {
          console.log(gallery.sourceUrl);
          <GatsbyImage image={gallery.sourceUrl} />
        })}
      </Container>
    </Section>
  )
}
