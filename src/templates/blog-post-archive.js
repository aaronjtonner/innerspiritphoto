import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBanner from "../components/banners/blogBanner"
import { GatsbyImage } from "gatsby-plugin-image"

import { Container, GridTwo, Section } from "../components/layoutComponents"

const Article = styled.article`
  box-shadow: var(--shadow-light);
  border-raidus: var(--br);
`

const Text = styled.div`
  padding: 2em;

  @media screen and (max-width: 400px) {
    h2 {
      font-size: var(--fs-3);
    }
  }
`

export const StyledImg = styled(GatsbyImage)`
  // max-width: 600px;
  height: 100%;
`

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const featuredImg = {
    data: posts.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData,
    alt: posts.featuredImage?.node?.alt || ``,
  }

  if (!posts.length) {
    return (
      <Layout>
        <SEO title="Blog - Inner Spirit Photography" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title="InnerSpirit Photography - All Blog Posts" />
      <BlogBanner
        to1="/"
        link1="Home"
        to2="/blog"
        link2="Blog"
        headline="Blog
"
      />
      <Section>
        <Container>
          <ol className="spacing-lg" style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title

              return (
                <GridTwo>
                  <li key={post.uri}>
                    <Article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <StyledImg
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                      />
                      <Text>
                        <header>
                          <h2 className="headline">
                            <Link
                              className="spacing"
                              to={post.uri}
                              itemProp="url"
                            >
                              <span itemProp="headline">{parse(title)}</span>
                            </Link>
                          </h2>
                          <small>{post.date}</small>
                        </header>
                        <section itemProp="description">
                          {parse(post.excerpt)}
                        </section>
                      </Text>
                    </Article>
                  </li>
                </GridTwo>
              )
            })}
          </ol>

          {previousPagePath && (
            <>
              <Link to={previousPagePath}>Previous page</Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
