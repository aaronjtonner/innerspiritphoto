import React from "react"
import { Container, Section, GridAuto, Flex } from "./layoutComponents"
import Mark from "../images/mark-nude-boudoir-photographer-calgary.gif"
import styled from "styled-components"
import { ButtonUnderline } from "./buttons"

const Text = styled.div``

const Stats = styled.div`
  color: var(--clr-accent);
`

const FlexDesktop = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 74em) {
    display: none;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 74em) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const FlexMobile = styled.div`
  display: flex;
  @media screen and (min-width: 74em) {
    display: none;
  }
`

export default function MeetMark() {
  return (
    <Section>
      <Container>
        <FlexDesktop>
          <Text className="spacing">
            <h2 className="headline">
              meet mark laurie, <br />
              <span className="italics accent">your boudoir photographer</span>
            </h2>
            <p>
              It’s Mark’s intuition and emotional presence with clients that
              makes the Inner Spirit Photography experience life-changing.
            </p>
            <p>
              Mark offered the first nude & boudoir photography studio in
              Calgary and remains the best. His imaginative portraits expand
              beyond the typical “lingerie and satin sheets” boudoir. Mark’s
              creatively passionate presentation of women has earned him the
              honour of being the most awarded photographer in his niche in
              Canada. Possibly North America.
            </p>
            <p>
              It is common for his clients to be thrilled to have gained much
              more than breathtaking images. They discover a sense of
              reconnecting with themselves. And their images become reminders of
              their beauty, courage and resilience.
            </p>
            <p>
              Be it for a fun adventure or a much deeper need, your experience
              with Mark will touch your soul while showcasing your breathtaking
              beauty, all through his talented skills.
            </p>
            <p>
              He’s not alone, an incredible team of women, along with Jan, his
              partner and wife, makes your time with Mark exceptional.
            </p>
            <Stats>
              <Flex>
                <div className="italics">
                  <p>Photographed</p>
                  <p className="headline">5,127+</p>
                  <p className="teriatary">Women</p>
                </div>
                <div className="italics">
                  <p>Donations</p>
                  <p className="headline">$514,210+</p>
                  <p className="teriatary">to Charity</p>
                </div>
                <div className="italics">
                  <p>in Business</p>
                  <p className="headline">42+</p>
                  <p className="teriatary">Years</p>
                </div>
              </Flex>
            </Stats>
            <ButtonUnderline to="/about">
              more about mark &#x2192;
            </ButtonUnderline>
          </Text>
          <div>
            <img
              className="stretch"
              src={Mark}
              alt="nude and boudoir photographer in calgary, AB"
            />
          </div>
        </FlexDesktop>
        <FlexMobile>
          <Text className="spacing">
            <h2 className="headline">
              meet mark laurie, <br />
              <span className="italics accent">your boudoir photographer</span>
            </h2>
            <div>
              <img
                className="stretch"
                src={Mark}
                alt="nude and boudoir photographer in calgary, AB"
              />
            </div>
            <p>
              It’s Mark’s intuition and emotional presence with clients that
              makes the Inner Spirit Photography experience life-changing.
            </p>
            <p>
              Mark offered the first nude & boudoir photography studio in
              Calgary and remains the best. His imaginative portraits expand
              beyond the typical “lingerie and satin sheets” boudoir. Mark’s
              creatively passionate presentation of women has earned him the
              honour of being the most awarded photographer in his niche in
              Canada. Possibly North America.
            </p>
            <p>
              It is common for his clients to be thrilled to have gained much
              more than breathtaking images. They discover a sense of
              reconnecting with themselves. And their images become reminders of
              their beauty, courage and resilience.
            </p>
            <p>
              Be it for a fun adventure or a much deeper need, your experience
              with Mark will touch your soul while showcasing your breathtaking
              beauty, all through his talented skills.
            </p>
            <p>
              He’s not alone, an incredible team of women, along with Jan, his
              partner and wife, makes your time with Mark exceptional.
            </p>
            <Stats>
              <Flex>
                <div className="italics">
                  <p>Photographed</p>
                  <p className="headline">5,127+</p>
                  <p className="teriatary">Women</p>
                </div>
                <div className="italics">
                  <p>Donations</p>
                  <p className="headline">$514,210+</p>
                  <p className="teriatary">to Charity</p>
                </div>
                <div className="italics">
                  <p>in Business</p>
                  <p className="headline">42+</p>
                  <p className="teriatary">Years</p>
                </div>
              </Flex>
            </Stats>
            <ButtonUnderline to="/about">
              more about mark &#x2192;
            </ButtonUnderline>
          </Text>
        </FlexMobile>
      </Container>
    </Section>
  )
}
