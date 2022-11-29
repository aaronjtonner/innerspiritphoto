import React from "react"
import Layout from "../components/layout"
import {
  Container,
  HeroBannerPadding,
  Section,
} from "../components/layoutComponents"
import SEO from "../components/seo"

export default function ThankYou() {
  return (
    <Layout>
      <SEO
        title="Thank you for filling out our contact form!"
        description="Thank you!"
      />
      <HeroBannerPadding />
      <Section>
        <Container>
          <h1 className="headline">thank you for contacting us!</h1>
          <p>We Will be Reaching Out To You Soon.</p>
        </Container>
      </Section>
    </Layout>
  )
}
