import { useStaticQuery, graphql } from "gatsby"

export const useBooksQuery = () => {
  const data = useStaticQuery(graphql`
    query BooksQuery {
      wpPage(databaseId: { eq: 2475 }) {
        ACF_BooksPage {
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
