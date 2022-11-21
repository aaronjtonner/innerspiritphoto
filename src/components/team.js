import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Flex, Section } from "./layoutComponents"

import Jan from "../images/team/jan-headshot.jpg"
import Fran from "../images/team/fran.jpg"
import Adrienne from "../images/team/adrienne-headshot-2.jpg"
import Melody from "../images/team/melody-headshot.jpg"
import Bonnie from "../images/team/bonnie-headshot.jpg"
import { AnchorInline, ButtonInline } from "./buttons"

const TeamWrapper = styled.div`
  background: url("../../images/small-sprite.jpg"), rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .headshot-img-mobile,
  .headshot-img-desktop {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    border: 2px solid var(--clr-accent);
    height: 300px;
    width: 400px;
    object-fit: cover;
    object-position: top;
  }
  // .headshot-img-mobile {
  //   display: none;
  //   @media screen and (max-width: 48em) {
  //     display: block;
  //   }
  // }
  // .headshot-img-desktop {
  //   @media screen and (max-width: 48em) {
  //     display: none;

  //     .headshot-img-mobile {
  //       display: block;
  //     }
  //   }
  // }
`

const Text = styled.div`
  h4 {
    color: var(--txt-dark-secondary);
  }

  p {
    max-width: 70ch;
    width: 100%;
  }

  @media screen and (max-width: 48em) {
    text-align: center;
  }
`

const TeamMember = props => {
  return (
    <Wrapper>
      <Flex>
        <img className="headshot-img-desktop" src={props.img} alt={props.alt} />
        <Text>
          <div>
            <h3 className="headline accent">{props.name}</h3>
            {/* <img
              className="headshot-img-mobile"
              src={props.img}
              alt={props.alt}
            /> */}
            <h4 className="subhead caps bold">{props.role}</h4>
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
              name="Fran Williams"
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
            <TeamMember
              img={Bonnie}
              alt="Registered Psychologist with inner spirit photo"
              name="Bonnie Sullivan, Ph.D"
              role="Registered Psychologist"
              description="Bonnie gives you tools and experience depth in the Beyond Empowerment sessions, Bonnie is a Registered Psychologist, her Ph.D. is from Palo Alto U. California. She is the core supporting and enhancing Inner Spirit client's emotional & mental health growth. Inner Spirit Photography is the only studio with a Psychologist on board.
"
            />
          </div>
        </Container>
      </Section>
    </TeamWrapper>
  )
}
