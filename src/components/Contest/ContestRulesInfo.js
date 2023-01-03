import React from "react"
import { useContestRulesQuery } from "../../hooks/useContestRulesQuery"
import { Container, Section } from "../layoutComponents"

export default function ContestRulesInfo() {
  const data = useContestRulesQuery()
  return (
    <Section>
      <Container>
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: `${data.wpPage.ACF_ContestRules.contestRules}`,
          }}
        ></div>
      </Container>
    </Section>
  )
}
