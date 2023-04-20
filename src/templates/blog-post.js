import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTAsecondary from "../components/CTAsecondary"
import {
  Container,
  HeroBannerPadding,
  Section,
} from "../components/layoutComponents"
import styled from "styled-components"
import { ButtonInline } from "../components/buttons"
import ServiceForm from "../components/forms/serviceForm"
import Mark from "../images/mark-nude-boudoir-photographer-calgary.gif"

const Wrapper = styled.div`
  padding-top: 4em;

  @media screen and (max-width: 32em) {
    padding-top: 2em;
  }

  @media screen and (max-width: 22em) {
    padding-top: 2em;
  }
`

const BlogContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 45rem;

  article {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: var(--spacer-sm);
    }

    h2 {
      font-size: var(--fs-1);
      line-height: 1.1;
      font-family: var(--ff-optima-r);
    }

    h3,
    h4 {
      font-size: var(--fs-2);
      line-height: 1.1;
      font-family: var(--ff-optima-r);
    }

    p {
      margin-bottom: var(--spacer);
    }

    img {
      margin-bottom: var(--spacer);
    }
  }
`

// Layout
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }

  article {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: var(--spacer-sm);
    }

    h2 {
      font-size: var(--fs-1);
      line-height: 1.1;
      font-family: var(--ff-optima-r);
    }

    h3,
    h4 {
      font-size: var(--fs-2);
      line-height: 1.1;
      font-family: var(--ff-optima-r);
    }

    p {
      margin-bottom: var(--spacer);
    }

    img {
      margin-bottom: var(--spacer);
    }
  }
`

const AboutMark = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  img {
    height: 300px;
    object-fit: cover;
  }
`

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <Wrapper>
        <Section>
          <Container>
            <ContentWrapper>
              <Aside className="spacing">
                <AboutMark className="spacing">
                  <h3 className="caps accent title bold">about mark</h3>
                  <img src={Mark} alt="mark laurie" />
                  <p>
                    {" "}
                    Mark offered the first nude & boudoir photography studio in
                    Calgary and remains the best. His imaginative portraits
                    expand beyond the typical “lingerie and satin sheets”
                    boudoir. Mark’s creatively passionate presentation of women
                    has earned him the honour of being the most awarded
                    photographer in his niche in Canada. Possibly North America.
                  </p>
                </AboutMark>
                <Navigation className="spacing">
                  <h3 className="caps accent title bold">
                    Inner <br /> Spirit
                  </h3>
                  <div>
                    <ul>
                      <li>
                        <ButtonInline to="/">Home</ButtonInline> <hr />
                      </li>
                      <li>
                        <ButtonInline to="/about">about us</ButtonInline> <hr />
                      </li>
                      <li>
                        <ButtonInline to="/experience">experience</ButtonInline>{" "}
                        <hr />
                      </li>
                      <li>
                        <ButtonInline to="/portfolios">portfolios</ButtonInline>{" "}
                        <hr />
                      </li>
                      <li>
                        <ButtonInline to="/faq">faq</ButtonInline> <hr />
                      </li>
                      <li>
                        <ButtonInline to="/blog">blog</ButtonInline> <hr />
                      </li>
                      <li>
                        <ButtonInline to="/book-now">
                          book a session
                        </ButtonInline>
                      </li>
                    </ul>
                  </div>
                </Navigation>
                <div className="service-form">
                  <ServiceForm />
                </div>
              </Aside>
              <Content>
                <article
                  className="blog-post"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h1
                      className="headline
                "
                      itemProp="headline"
                    >
                      {parse(post.title)}
                    </h1>

                    <p>{post.date}</p>

                    {/* if we have a featured image for this post let's display it */}
                    {featuredImage?.data && (
                      <GatsbyImage
                        image={featuredImage.data}
                        alt={featuredImage.alt}
                        style={{ marginBottom: 50 }}
                      />
                    )}
                  </header>

                  {!!post.content && (
                    <section itemProp="articleBody">
                      {parse(post.content)}
                    </section>
                  )}

                  <hr />
                </article>
              </Content>
            </ContentWrapper>
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.uri} rel="prev">
                      ← {parse(previous.title)}
                    </Link>
                  )}
                </li>

                <li>
                  {next && (
                    <Link to={next.uri} rel="next">
                      {parse(next.title)} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Container>
        </Section>

        <CTAsecondary />
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
