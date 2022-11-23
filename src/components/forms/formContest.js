import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit, Select } from "./formItems"
import Map from "../map"
import { AnchorInline, AnchorUnderline } from "../buttons"

import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"
import Pinterest from "../../images/socials/pinterest.svg"

const FormWrapper = styled.div``

const Text = styled.div`
  max-width: 130ch;
  widht: 100%;
`

const Info = styled.div`
  align-self: flex-start;
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  img {
    width: 25px;
  }
`

export default function FormContest(props) {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h3 className="subhead caps accent">enter to win!</h3>
        </Text>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <FormWrapper>
            <form
              name="contest"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="fname">First Name *</Label>
                  <Input type="name" name="fname" id="fname" required />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="lname">Last Name *</Label>
                  <Input type="name" name="lname" id="lname" required />
                </div>
              </Flex>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="email">Email *</Label>
                  <Input type="email" name="email" id="email" required />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input type="tel" name="phone" id="phone" required />
                </div>
              </Flex>
              <div>
                <Label htmlFor="opt">
                  Would you like to sign up for updates on contests, photo tips,
                  specials, and more?
                </Label>
                <Select name="opt" id="opt" required>
                  <option value="yes">Yes, please!</option>
                  <option value="no">No, thanks!</option>
                </Select>
              </div>
              <div className="spacing-sm">
                <Label htmlFor="msg">Message *</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="send" />
            </form>
          </FormWrapper>
          {/* flex item 2 */}
          <Info className="spacing">
            <div>
              <h3 className="caps subhead accent">contact us:</h3>
              <AnchorUnderline href="tel: 403-252-2662">
                403-252-2662
              </AnchorUnderline>{" "}
              <br />
              <AnchorUnderline href="mailto: info@innerspirit.com">
                info@innerspirit.com
              </AnchorUnderline>
            </div>
            <div>
              <h3 className="caps subhead accent">our location:</h3>
              <AnchorUnderline href="https://www.google.com/maps/place/Inner+Spirit+Photography/@50.977725,-114.0806245,15z/data=!4m2!3m1!1s0x0:0xbbb2559053a55ca5?sa=X&ved=2ahUKEwiG9tu9j975AhXlATQIHfAzDv8Q_BJ6BAhAEB8">
                711 84 Ave SW Calgary, AB, Canada T2V 0V8
              </AnchorUnderline>
            </div>
            <div>
              <h3 className="caps subhead accent">hours:</h3>
              <p className="bold italics">
                10 AM to 7 PM Weekdays By Appointment <br />
                Weekends By Appointment
              </p>
            </div>

            <Socials>
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/boudoirphotographycalgary/"
                >
                  <img
                    src={Instagram}
                    alt="Inner Spirit Photography Instagram - Boudoir Photographer in Calgary"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/innerspiritphoto"
                >
                  <img
                    src={Facebook}
                    alt="Inner Spirit Photography Facebook - Boudoir Photography Calgary"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/marklauriephotographer/"
                >
                  <img
                    src={Linkedin}
                    alt="Inner Spirit Photography Linkedin - Boudoir Photographer Calgary"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/c/InnerSpiritPhotographyCalgary/videos"
                >
                  <img
                    src={Youtube}
                    alt="Inner Spirit Photography Linkedin - Boudoir Photographer Calgary"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.pinterest.ca/innerspiritphot/_saved/"
                >
                  <img
                    src={Pinterest}
                    alt="Inner Spirit Photography Linkedin - Boudoir Photographer Calgary"
                  />
                </a>
                <a target="_blank" href="https://twitter.com/marklaurie">
                  <img
                    src={Twitter}
                    alt="Inner Spirit Photography Linkedin - Boudoir Photographer Calgary"
                  />
                </a>
              </div>
            </Socials>
          </Info>
        </Flex>
      </Container>
    </Section>
  )
}
