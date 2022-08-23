import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Flex, Section } from "./layoutComponents"

import { Jan } from "../images/team/jan.jpg"
import { Fran } from "../images/team/fran.jpg"
import { Adrienne } from "../images/team/adrienne.jpg"
import { Melody } from "../images/team/melody.jpg"
import { Bonnie } from "../images/team/bonnie.jpg"
import { AnchorInline, ButtonInline } from "./buttons"

const TeamWrapper = styled.div`
  background: url("../../images/small-sprite.jpg"), rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Wrapper = styled.div`
  .headshot-img-mobile {
    display: none;
    @media screen and (max-width: 48em) {
      display: block;
    }
  }
  .headshot-img-desktop {
    @media screen and (max-width: 48em) {
      display: none;

      .headshot-img-mobile {
        display: block;
      }
    }
  }
`

const Text = styled.div`
  h4 {
    color: var(--txt-dark-secondary);
  }
`

const TeamMember = props => {
  return (
    <Wrapper>
      <Flex>
        <img className="headshot-img-desktop" src={props.img} alt={props.alt} />
        <Text>
          <div>
            <h3 className="headline">{props.name}</h3>
            <img
              className="headshot-img-mobile"
              src={props.img}
              alt={props.alt}
            />
            <h4 className="subhead caps">{props.role}</h4>
          </div>
          <p>{props.description}</p>
        </Text>
      </Flex>
    </Wrapper>
  )
}

export default function Team() {
  return (
    <TeamWrapper>
      <Section>
        <Container className="spacing-md">
          <h2 className="headline center">
            meet the <span className="italics accent">inner spirit team</span>
          </h2>
          <div className="spacing-lg">
            <TeamMember
              img={Jan}
              alt="Jan, partner of inner spirit photography"
              name="Jan Howells-Laurie"
              role="Partner & Office admin"
              description="Jan is the behind-the-scenes person who helped build Inner Spirit. She has done makeup, hairstyling, and retouching in the past. Now, she may be the first friendly face who greets you when you arrive."
            />
            <TeamMember
              img={Fran}
              alt="Fran, expert photo retouched of inner spirit photography"
              name="Fran William"
              role="Expert retoucher, printer, and operations manager"
              description="Fran gives your images breathtaking polish. She retouches, enhances, and custom prints every image. She has been Mark's right hand for 22 years now, with 36 years in the industry. Few can come close to her skills and care."
            />
            <TeamMember
              img={Adrienne}
              alt="Makeup artist and hairstylist of inner spirit photography"
              name="Adrienne Furrie"
              role="Makeup artist and hairstylist"
              description="Adrienne has worked with the top stylists and photographers in North America for over 20 years. Her comforting approach complements her tremendous makeup skill and hairstyling. She is our warm-up act giving you your first rush of confidence."
            />
            <TeamMember
              img={Melody}
              alt="Body paint artist of inner spirit photo"
              name="Melody Kielek"
              role="Body paint artist"
              description="Melody is one of the best body painters in Alberta. She has been commissioned all over the world. Besides her awesome creative paint skills, she is warm and engaging. She will keep you amused and relaxed as she transforms your body into art.
"
            />
            <Flex>
              <img
                src={Bonnie}
                alt="Registered Psychologist with inner spirit photo"
              />
              <Text>
                <div>
                  <h3 className="headline">Bonnie Sullivan, Ph.D.</h3>
                  <h4 className="subhead">Registered Psychologist</h4>
                </div>
                <p>
                  Bonnie gives you tools and experience depth in the{" "}
                  <ButtonInline to="/experience">
                    Beyond Empowerment sessions,
                  </ButtonInline>{" "}
                  Bonnie is a Registered Psychologist, her Ph.D. is from Palo
                  Alto U. California. She is the core supporting and enhancing
                  Inner Spirit client's emotional & mental health growth.{" "}
                  <span className="bold italics">
                    {" "}
                    Inner Spirit Photography is the only studio with a
                    Psychologist on board.
                  </span>
                </p>
              </Text>
            </Flex>
          </div>
        </Container>
      </Section>
    </TeamWrapper>
  )
}
