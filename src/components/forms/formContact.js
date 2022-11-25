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

export default function FormContact(props) {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h3 className="subhead caps accent">
            your complimentary planning session is the first step on your{" "}
            <span className="italics">transformative journey!</span>
          </h3>
        </Text>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <FormWrapper>
            <form
              acceptCharset="UTF-8"
              action="https://im322.infusionsoft.com/app/form/process/874dc5be8f3ee257d63dd0f53f29707e"
              className="infusion-form"
              id="inf_form_874dc5be8f3ee257d63dd0f53f29707e"
              method="POST"
            >
              <input
                name="inf_form_xid"
                type="hidden"
                defaultValue="874dc5be8f3ee257d63dd0f53f29707e"
              />
              <input
                name="inf_form_name"
                type="hidden"
                defaultValue="10. Marketing - Free &#a;Consultation Form (471)"
              />
              <input
                name="infusionsoft_version"
                type="hidden"
                defaultValue="1.70.0.503005"
              />
              <div>
                <div>
                  <div className="title">
                    <div className="title" contentid="title">
                      <div>
                        <span data-mce-mark={1}>
                          <strong>
                            <span data-mce-mark={1}>
                              Request a Free Consultation
                            </span>
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
              <div className="spacing">
                <div className="infusion-field">
                  <Label htmlFor="inf_field_FirstName">First Name *</Label>
                  <Input
                    id="inf_field_FirstName"
                    name="inf_field_FirstName"
                    placeholder="First Name *"
                    type="text"
                  />
                </div>
                <div className="infusion-field">
                  <Label htmlFor="inf_field_LastName">Last Name *</Label>
                  <Input
                    id="inf_field_LastName"
                    name="inf_field_LastName"
                    placeholder="Last Name *"
                    type="text"
                  />
                </div>
                <div className="infusion-field">
                  <Label htmlFor="inf_field_Email">Email *</Label>
                  <Input
                    id="inf_field_Email"
                    name="inf_field_Email"
                    placeholder="Email *"
                    type="text"
                  />
                </div>
                <div className="infusion-field">
                  <Label htmlFor="inf_field_Phone1">Phone Number *</Label>
                  <Input
                    id="inf_field_Phone1"
                    name="inf_field_Phone1"
                    placeholder="Phone Number *"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
              <div>
                <div className="text">
                  <div className="text" contentid="paragraph">
                    <div> </div>
                  </div>
                </div>
              </div>
              <div className="infusion-field">
                <Label htmlFor="inf_option_KeepUpWithUs">
                  Keep Up With Us *
                </Label>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <Flex>
                        <Label htmlFor="inf_option_KeepUpWithUs_701">
                          Yes, I would love to get updates on contests, photo
                          tips, specials, and more.
                        </Label>
                        <Input
                          id="inf_option_KeepUpWithUs_701"
                          name="inf_option_KeepUpWithUs"
                          type="radio"
                          defaultValue={701}
                        />
                      </Flex>
                    </span>
                    <span className="infusion-option">
                      <Flex>
                        <Label htmlFor="inf_option_KeepUpWithUs_703">
                          No, I don't want to get updates
                        </Label>
                        <Input
                          id="inf_option_KeepUpWithUs_703"
                          name="inf_option_KeepUpWithUs"
                          type="radio"
                          defaultValue={703}
                        />
                      </Flex>
                    </span>
                  </div>
                </div>
              </div>
              <div className="infusion-field">
                <Label htmlFor="inf_custom_SessionWantedFor">
                  Session Wanted For:
                </Label>
                <div className="infusion-field-input-container">
                  <Select
                    id="inf_custom_SessionWantedFor"
                    name="inf_custom_SessionWantedFor"
                  >
                    <option value>Please select one</option>
                    <option value="Gift">Gift</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Empowerment">Empowerment</option>
                    <option value="Mix">Mix</option>
                    <option value="Not Sure">Not Sure</option>
                  </Select>
                </div>
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
              <div className="infusion-field">
                <Label htmlFor="inf_custom_Message">Message *</Label>
                <TextArea
                  cols={24}
                  id="inf_custom_Message"
                  name="inf_custom_Message"
                  placeholder="Message *"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <div>
                <div>&nbsp;</div>
              </div>
              <div className="infusion-submit">
                <button
                  className="infusion-recaptcha"
                  id="recaptcha_874dc5be8f3ee257d63dd0f53f29707e"
                  type="submit"
                >
                  Submit
                </button>
              </div>
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
