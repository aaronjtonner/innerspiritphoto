import React from "react"
import styled from "styled-components"
import { Container, Actions, HeroBannerPadding } from "../layoutComponents"
import { ButtonLight, AnchorInline, ButtonPrimary } from "../buttons"
import Breadcrumb2Links from "../breadcrumbs/breadcrumb2links"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useContestQuery } from "../../hooks/useContestQuery"

const Wrapper = styled.div`
  background: var(--clr-dark);
  padding-bottom: 4em;

  .container {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    z-index: 2;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media screen and (max-width: 74em) {
      display: grid;
      grid-template-rows: auto 2em auto;

      .img {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        z-index: 1;
      }
    }

    & > * + * {
      margin-left: 2em;
    }
  }

  hr {
    background-color: var(--clr-light);
    height: 1px;
    border: none;

    @media screen and (max-width: 74em) {
      background-color: var(--clr-accent);
      height: 1px;
      border: none;
    }
  }

  .img {
    border-radius: var(--br);
    object-fit: cover;
  }
`

const GridWrapper = styled.div`
  // display: grid;
  // grid-template-rows: 10em 600px auto;
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-accent);
`

const Text = styled.div`
  color: var(--txt-light);

  .btn-accent {
    display: none;
  }
  @media screen and (max-width: 74em) {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    z-index: 2;
    padding: 2em;
    background: var(--clr-light);
    color: var(--clr-accent);

    .btn-accent {
      display: block;
    }

    .btn-light {
      display: none;
    }
  }
`

// banner with only 2 links in the breadcrumb
export default function ContestBanner(props) {
  const data = useContestQuery()
  return (
    <Wrapper>
      <HeroBannerPadding />
      <GridWrapper>
        {/* <Bg /> */}
        <Container className="container">
          {/* <StaticImage
            className="stretch clip-img"
            src="../../images/banners/contest-banner.jpg"
            alt="The inner spirit photography contest"
          /> */}
          <GatsbyImage
            class="img stretch clip-img"
            image={
              data.wpPage.ACF_ContestPage.hero.localFile.childImageSharp
                .gatsbyImageData
            }
            alt=""
          />
          <Text className="spacing">
            <div>
              <Breadcrumb2Links
                to1={props.to1}
                link1={props.link1}
                to2={props.to2}
                link2={props.link2}
              />
              <hr />
              <h1 className="headline">
                {data.wpPage.ACF_ContestPage.headline}
              </h1>
            </div>
            <p>{data.wpPage.ACF_ContestPage.subhead}</p>
          </Text>
        </Container>
      </GridWrapper>
    </Wrapper>
  )
}
