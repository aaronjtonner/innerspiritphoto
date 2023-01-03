import { useStaticQuery, graphql } from "gatsby"

export const useWallArtQuery = () => {
  const data = useStaticQuery(graphql`
    query WallArtQuery {
      wpPage(databaseId: { eq: 2485 }) {
        ACF_WallArtPage {
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
