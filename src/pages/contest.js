import React from "react"
import Layout from "../components/layout"
import ContestHero from "../components/Contest/ContestHero"
import BannerImg from "../images/banners/contact-banner.jpg"
import ContestBanner from "../components/banners/bannerContest"
import ContestInfo from "../components/Contest/ContestInfo"
import { ButtonPrimary } from "../components/buttons"
import { Container, Section } from "../components/layoutComponents"
import FormContest from "../components/forms/formContest"

export default function Contest() {
  return (
    <Layout>
      <ContestBanner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/contest"
        link2="Contest"
      />
      {/* <ContestInfo /> */}
      <Section>
        <Container>
          <h1>enter now and win big!</h1>
          <p>
            Have you almost called us for a session but paused then did not
            call? We have the contest for you. It is a play off our upcoming
            refreshed website, Take the Leap, we will catch you, So the contest
            question is, what image would you take the leap for.{" "}
            <span className="bold">Why would you take the leap?</span>
            How daring or bold (we understand for some that are just doing a
            beauty shot in front of the camera is being bold.){" "}
            <span className="bold">would you leap for?</span>
          </p>
          <p className="bold">The Most Colorful Story Has The Best Chance.</p>
          <p>
            <span className="bold">Prize:</span> <br />
            1st place is a 2 hour Photo session, our Connoisseur session
            complete with makeup and hair.
            <br />
            25- 2nd Prize is a $100 studio gift card good towards a portrait
            session or prints.
            <br />
            Ending & Draw Dates: <br />
            The contest ends on Oct 15, 2022. <br />
            Winner Announcement shortly afterward.
          </p>
        </Container>
      </Section>
      <FormContest />
      <Section>
        <center>
          <ButtonPrimary to="/contest-rules">contest rules</ButtonPrimary>
        </center>
      </Section>
    </Layout>
  )
}
