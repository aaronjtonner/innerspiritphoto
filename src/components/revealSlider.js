import React from "react"
import ReactBeforeSliderComponent from "react-before-after-slider-component"

import ReactCompareImage from "react-compare-image"
import "react-before-after-slider-component/dist/build.css"
import styled from "styled-components"

const Wrapper = styled.div`
  border-radius: var(--br);
`

const FIRST_IMAGE = {
  imageUrl:
    "http://www.staging.innerspiritphoto.com/wp-content/uploads/2022/08/before-boudoir.jpg",
}
const SECOND_IMAGE = {
  imageUrl:
    "http://www.staging.innerspiritphoto.com/wp-content/uploads/2022/08/after-boudoir.jpg",
}
export default function RevealSlider() {
  const before =
    "http://www.staging.innerspiritphoto.com/wp-content/uploads/2022/08/before-boudoir.jpg"
  const after =
    "http://www.staging.innerspiritphoto.com/wp-content/uploads/2022/08/after-boudoir.jpg"
  return (
    <Wrapper className="spacing">
      {/* <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      /> */}
      <ReactCompareImage leftImage={before} rightImage={after} />
      <p className="subhead italics accent caps bold center">
        slide to see the before & after of Rosemarie's Calgary boudoir
        photography session!
      </p>
    </Wrapper>
  )
}
