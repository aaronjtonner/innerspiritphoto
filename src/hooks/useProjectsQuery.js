import { useStaticQuery, graphql } from "gatsby"

export const useProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      wpPage(databaseId: { eq: 2490 }) {
        ACF_ProjectsPage {
          gallery {
            id
            altText
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
