import { useStaticQuery, graphql } from "gatsby"

export const useContestQuery = () => {
  const data = useStaticQuery(graphql`
    query ContestQuery {
      wpPage(databaseId: { eq: 2510 }) {
        id
        ACF_ContestPage {
          contestInformation
          headline
          subhead
          contestAsidePhoto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
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
