import React from "react"
import Layout from "../components/layout"
import {
  Container,
  HeroBannerPadding,
  Section,
} from "../components/layoutComponents"
import SEO from "../components/seo"

export default function ThankYouContest() {
  return (
    <Layout>
      <SEO
        title="Thank you for entering our contest!"
        description="This is our thank you page for our contest!"
      />
      <HeroBannerPadding />
      <Section>
        <Container>
          <h1 className="headline">thank you for entering our contest!</h1>
          <p>
            Best of Luck! We will be reaching out if you are one of the winners.{" "}
            <br /> By the way, have a session then win the contest, we credit
            the prize back to you. <br />
            Call us to explore what your session could look like. 403.252.2662
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
