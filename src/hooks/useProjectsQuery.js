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
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  src
                }
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
