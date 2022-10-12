import React from "react"
import styled from "styled-components"
import { useWallArtQuery } from "../../hooks/useWallArtQuery"
import { Section, Container, GridAuto } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const StyledImg = styled(GatsbyImage)`
border-radius: var(--br);
`

export default function WallArtPortfolio() {
  const data = useWallArtQuery()
  return (
    <Section>
      <Container>
        <GridAuto>
        {data.wpPage.ACF_WallArtPage.gallery.map(localFile => {
          console.log(localFile.localFile.childImageSharp.fluid.src)
          return(
            <GatsbyImage image={localFile.localFile.childImageSharp.gatsbyImageData} alt="" /> 
          )
       })}
       </GridAuto>
      </Container>
    </Section>
  )
}
