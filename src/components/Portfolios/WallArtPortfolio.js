import React from "react"
import styled from "styled-components"
import { useWallArtQuery } from "../../hooks/useWallArtQuery"
import { Section } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  border-radius: var(--br);
`

const Wrapper = styled.div`
  background: black;
`

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 95rem;
  background: black;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40em, 1fr));

  & > * {
    // justify-self: center;
    // align-self: center;
  }
`

export default function WallArtPortfolio() {
  const data = useWallArtQuery()
  return (
    <Wrapper>
      <Section>
        <Container>
          <Grid>
            {data.wpPage.ACF_WallArtPage.gallery.map(localFile => {
              return (
                <GatsbyImage
                  image={localFile.localFile.childImageSharp.gatsbyImageData}
                  alt=""
                />
              )
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  )
}
