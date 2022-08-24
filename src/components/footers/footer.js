import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

import Logo from "../../images/logo-white.svg"
import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo-white-white.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"
import Pinterest from "../../images/socials/pinterest.svg"

import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"

const device = {
  sm: "43em",
  md: "48em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-dark);
  color: var(--txt-light);
`

export const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: 3em;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
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

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

  img {
    width: 150px;
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <LogoContainer>
            <img src={Logo} alt="" />
          </LogoContainer>
          <hr />
          <Flex>
            <FlexItem>
              <p className="heading">contact us</p>
              <ul>
                <li>
                  <FlexContact>
                    <FaPhoneAlt />
                    <a href="tel: 403-252-2662"> +1 (403) 252-2662</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <MdOutlineAlternateEmail />
                    <a href="mailto: info@innerspiritphoto.com">
                      info@innerspiritphoto.com
                    </a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <AiOutlineClockCircle />
                    <p>
                      {Info.hours} <br />
                      Hours by appointment
                    </p>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>{Info.street1}</li>
                <li>Canada</li>
              </ul>
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
            </FlexItem>
            <FlexItem>
              <p className="heading">quick links</p>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/experience">experience</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolios">portfolios</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolios/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolios/books">books</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolios/wall-art">wall art</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolios/projects">projects</StyledLink>
                </li>
                <li>
                  <StyledLink to="/book-now">Contact & Booking</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading">about us</p>
              <p>
                Canadian Portrait Photographer of the Year, Mark Laurie, is the
                photographer for Inner Spirit Photography. Internationally
                renowned, his clients fly in from all over the world or fly Mark
                out. He has done portraits in 16 countries plus every province
                in Canada **** Inner Spirit creates a transformational
                experience with imagery that has been described as life
                changing. Timeless images that portray the soul, desires and
                personality of his clients. We create an enviroment that is so
                safe and creative it becomes easy to express anything you want,
                to experiment, to indulge in exploring you. Everyone is amazed
                how easy and fun the session is.
              </p>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2022</li>
              <li>{Info.name}</li>
              <li>All Rights Reserved</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.innerspiritphoto.com/terms-of-use"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.innerspiritphoto.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <hr />
        </Container>
        <Author>
          <Container>
            <div>
              <p>website by: </p>
              <a target="_blank" href="https://www.aarontonner.com">
                <img
                  src={AaronTonnerWebSolutionsLogo}
                  alt="calgary web designer logo"
                />
              </a>
            </div>
          </Container>
        </Author>
      </FooterWrapper>
    </div>
  )
}
