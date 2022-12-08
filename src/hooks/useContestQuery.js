import { useStaticQuery, graphql } from "gatsby"

export const useContestQuery = () => {
  const data = useStaticQuery(graphql`
    query ContestQuery {
      wpPage(databaseId: { eq: 2510 }) {
        id
        aCF_ContestPage {
          contestInformation
          headline
          subhead
          hero {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  return data
}
