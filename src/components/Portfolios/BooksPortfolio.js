import React from "react"
import styled from "styled-components"
import { useBooksQuery } from "../../hooks/useBooksQuery"
import { Section, Container, GridAuto } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const StyledImg = styled(GatsbyImage)`
border-radius: var(--br);
`

export default function BooksPortfolio() {
  const data = useBooksQuery()
  return (
    <Section>
      <Container>
        <GridAuto>
        {data.wpPage.ACF_BooksPage.gallery.map(localFile => {
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
