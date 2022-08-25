import { useStaticQuery, graphql } from "gatsby"

export const useGalleryQuery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      wpPage(databaseId: { eq: 41 }) {
        ACF_GalleryPage {
          gallery {
            altText
            sourceUrl
            id
          }
        }
      }
    }
  `)
  return data
}
