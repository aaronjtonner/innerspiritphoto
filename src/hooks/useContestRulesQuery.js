import { useStaticQuery, graphql } from "gatsby"

export const useContestRulesQuery = () => {
  const data = useStaticQuery(graphql`
    query ContestRulesQuery {
      wpPage(databaseId: { eq: 3459 }) {
        id
        ACF_ContestRules {
          contestRules
        }
      }
    }
  `)
  return data
}
