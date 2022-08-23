import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section } from "../layoutComponents"
import styled from "styled-components"
import { AnchorUnderline } from "../buttons"
import { FaStar } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const Wrapper = styled.div`
  .slider {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const ItemGrid = styled.div`
  display: grid;
  grid-template-rows: 500px 300px auto;

  .slider-img {
    grid-row: 1 / span 2;
    grid-column: 1 / -1;
    z-index: 1;
    border-radius: var(--br);
  }

  .review-box {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    z-index: 2;
  }
`

const ReviewWrapper = styled.div`
  background: var(--clr-light);
  color: var(--clr-accent);
  border-radius: var(--br);
  border: 1px solid var(--clr-accent);
  text-align: center;
  padding: 2em;
`

const FlexStars = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 2px;
  }
`

const FlexName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-left: 2px;
  }
`

const ReviewBox = props => {
  return (
    <ReviewWrapper className="spacing">
      <div>
        <StaticImage
          src="../../images/frill.jpg"
          alt="review of boudoir studio in Calgary"
        />
        <FlexStars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </FlexStars>
      </div>
      <p className="italics">"{props.review}"</p>
      <FlexName>
        <FcGoogle />
        <p className="upper">{props.name}</p>
      </FlexName>
      <AnchorUnderline href="https://www.google.com/maps/place/Inner+Spirit+Photography/@50.977725,-114.0806245,15z/data=!4m7!3m6!1s0x0:0xbbb2559053a55ca5!8m2!3d50.977725!4d-114.0806245!9m1!1b1">
        read more google reviews &#x2192;
      </AnchorUnderline>
    </ReviewWrapper>
  )
}

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Section>
      <Container>
        <Wrapper>
          <Slider className="slider" {...settings}>
            <ItemGrid>
              <StaticImage
                className="slider-img"
                src="../../images/calgary-boudoir-joy.jpg"
              />
              <ReviewBox
                className="review-box"
                review="At first I resisted, saying it was extravagant and unnecessary, but the more I talked to Mark and saw his work I realized it was a fantastic opportunity. We shot a mix of boudoir, sexy and sporty poses and once I saw the completed album,  my confidence soared! I was a huge fan from that point on. Do this now for yourself or a loved one. You will never stop enjoying the results!"
                name="Joy Buckley"
              />
            </ItemGrid>
            <ItemGrid>
              <StaticImage
                className="slider-img"
                src="../../images/calgary-boudoir-kolbi.jpg"
              />
              <ReviewBox
                className="review-box"
                review="I love the unexpected creativity of Mark's studio. I arrive and I get to be myself. I just finished my 6th session, it was as different and inspiring as the rest. Each one is a new adventure. No other studio touches what Mark does, he is on a whole different level. Mark gives you the confidence to be beautiful and he will find that beauty in every shot. You will never be disappointed in his professionalism, creativity and the beauty of you"
                name="Kolbi Brost"
              />
            </ItemGrid>
            <ItemGrid>
              <StaticImage
                className="slider-img"
                src="../../images/calgary-boudoir-robin.jpg"
              />
              <ReviewBox
                className="review-box"
                review="Mark was instrumental in changing the view my wife had of herself after three kids.  His thoughtful input, witty charm and great photography skills made for a memorable makeover session.  She has gone from hiding behind baggy sweats to wearing the clothes of a confident and sexy woman!"
                name="Robin Hogg"
              />
            </ItemGrid>
          </Slider>
        </Wrapper>
      </Container>
    </Section>
  )
}
