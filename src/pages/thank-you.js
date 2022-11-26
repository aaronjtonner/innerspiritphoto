import React from "react"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"

export default function ThankYou() {
  return (
    <Layout>
      <Section>
        <Container>
          <h1 className="headline">thank you for contacting us!</h1>
          <p>We Will Be Reaching Out To You Soon.</p>
        </Container>
      </Section>
    </Layout>
  )
}
