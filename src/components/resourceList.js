import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorPrimary, ButtonPrimary } from "./buttons"
import { Link } from "gatsby"
import { Container, GridTwo, Section } from "./layoutComponents"

const ButtonWrapper = styled.div``

const Article = styled.article`
  box-shadow: var(--shadow-light);
  border-raidus: var(--br);
  padding: 2em;
  div {
    padding: 2em 2em 0 2em;
  }

  .revelations-book-img {
    width: 50%;
  }

  h2 {
    color: var(--clr-accent);
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: var(--fs-3);
    }
  }
`

const Text = styled.div`
  padding: 2em;

  h2 {
    color: var(--clr-accent);
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: var(--fs-3);
    }
  }
`

export default function ResourceList() {
  return (
    <Section>
      <Container>
        <div className="spacing">
          <Article to="/contest">
            <StaticImage
              className="img"
              src="../images/resources/contest-img.jpg"
              alt="calgary boudoir gallery"
            />
            <div>
              <h2 className="subhead">Contest</h2>
              <p>
                Enter our contest, each round has new theme to respond to.
                Prizes include sessions, prints and credits. Lots of 2nd prizes
                too. Enter today!
              </p>
            </div>
            <ButtonWrapper>
              <ButtonPrimary to="/contest">view contest &#x2192;</ButtonPrimary>
            </ButtonWrapper>
          </Article>
          <Article>
            <StaticImage
              className="img revelations-book-img"
              src="../images/resources/revelations.png"
              alt="calgary boudoir books portfolio"
            />
            <div>
              <h2 className="subhead">Revelations Book</h2>
              <p>
                Several clients share how their images fit into and even changed
                their lives. There are some surprizes on how some of these women
                use their images. Each has a fascinating journey with photos
                from their session. You can get your copy for free.
              </p>
            </div>
            <ButtonWrapper>
              <AnchorPrimary
                href="https://www.womensempowermentstories.com"
                target="_blank"
              >
                revelations books &#x2192;
              </AnchorPrimary>
            </ButtonWrapper>
          </Article>
          <Article to="/portfolios/books">
            <StaticImage
              className="img"
              src="../images/resources/podcast-img.jpg"
              alt="calgary boudoir books portfolio"
            />
            <div>
              <h2 className="subhead">Fascinating Women Podcast</h2>
              <p>
                These are personality conversation with some of the most
                interesting women Mark has interviewed. Each woman explores what
                drives and has shaped her. We think you will enjoy this.
              </p>
            </div>
            <ButtonWrapper>
              <AnchorPrimary
                href="https://www.fascinatingwomen.ca"
                target="_blank"
              >
                visit podcast &#x2192;
              </AnchorPrimary>
            </ButtonWrapper>
          </Article>
          {/* <Article to="/portfolios/books">
            <StaticImage
              className="img"
              src="../images/resources/newsletter.jpg"
              alt="calgary boudoir books portfolio"
            />
            <div>
              <h2 className="subhead">Mailing List</h2>
              <p>
                Check out our newsletter. It is worth getting on our mailing
                list. There is photography tips each month, for camera and
                smartphones. Insights on Mark’s images, contest details, even
                Mark’s musings.
              </p>
            </div>
            <ButtonWrapper>
              <ButtonPrimary to="/book-now">sign up &#x2192;</ButtonPrimary>
            </ButtonWrapper>
          </Article> */}
          <Article to="/portfolios/books">
            <StaticImage
              className="img"
              src="../images/resources/fb-group.jpg"
              alt="calgary boudoir books portfolio"
            />
            <div>
              <h2 className="subhead">Private Facebook Group</h2>
              <p>
                Hey, you would enjoy our Private Facebook Group – Goddesses. We
                post images, powerful quotes, cool stories that relate to our
                members.
              </p>
            </div>
            <ButtonWrapper>
              <AnchorPrimary
                href="https://www.facebook.com/groups/859912931017747"
                target="_blank"
              >
                join group &#x2192;
              </AnchorPrimary>
            </ButtonWrapper>
          </Article>
          {/* <Article to="/portfolios/books">
            <StaticImage
              className="img"
              src="../images/resources/prep-guide.jpg"
              alt="calgary boudoir books portfolio"
            />
            <div>
              <h2 className="subhead">Boudoir/Nude Prep Guide</h2>
              <p>
                Still doing research, want to be know the best preparation and
                what to expect. Download our Boudoir/Nude Preparation Guide. It
                is all you need.
              </p>
            </div>
            <ButtonWrapper>
              <ButtonPrimary to="/book-now">
                download guide &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </Article> */}
        </div>
      </Container>
    </Section>
  )
}
