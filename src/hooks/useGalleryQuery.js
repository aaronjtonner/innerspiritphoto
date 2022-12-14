import { useStaticQuery, graphql } from "gatsby"

export const useGalleryQuery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      wpPage(databaseId: { eq: 41 }) {
        ACF_GalleryPage {
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
