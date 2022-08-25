import { useStaticQuery, graphql } from "gatsby"

export const useGalleryQuery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      wpPage(databaseId: { eq: 41 }) {
        id
        ACF_GalleryPage {
          gallery {
            altText
            caption
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)
  return data
}
