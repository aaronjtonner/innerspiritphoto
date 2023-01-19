import React from "react"
import { useContestQuery } from "../../hooks/useContestQuery"
import { Container, Section } from "../layoutComponents"

export default function ContestInfo() {
  const data = useContestQuery()
  return (
    <Section>
      <Container>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.wpPage.ACF_ContestPage.contestInformation}`,
          }}
        ></div>
      </Container>
    </Section>
  )
}
