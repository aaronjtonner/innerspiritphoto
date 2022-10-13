import React from 'react'
import { useContestQuery } from '../../hooks/useContestQuery'
import styled from "styled-components"
import { Section, Container, GridAuto } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`

`

export default function ContestHero() {
    const data = useContestQuery()
  return (
    <Section>
        <GatsbyImage image={data.wpPage.ACF_ContestPage.hero.localFile.childImageSharp.gatsbyImageData} alt="" />
    </Section>
  )
}
