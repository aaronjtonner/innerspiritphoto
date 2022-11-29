import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTAsecondary from "../../components/CTAsecondary"
import BooksPortfolio from "../../components/Portfolios/BooksPortfolio"
import CTA from "../../components/CTA"
import BannerImg from "../../images/banners/books-banner.jpg"
import { Container, Section } from "../../components/layoutComponents"
import styled from "styled-components"

const Text = styled.div`
  max-width: 100ch;
  width: 100%;
`

export default function Books() {
  return (
    <Layout>
      <SEO
        title="Books | Inner Spirit Photography"
        description="Inner Spirit Photography can create boudoir books!"
      />
      <BannerSecondary
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        to3="/portfolios/books"
        link3="Books"
        headline="Books"
        description="Thank you for such an awe-inspiring experience. I can honestly believe I am an amazing woman!"
        name="- Judy M."
      />
      <BooksPortfolio />
      <CTAsecondary />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="headline accent italics">
              our nude portrait books will delight you!
            </h2>
            <div className="spacing">
              <p>
                Each of our books is unique and handcrafted. We strive to make
                your vision a reality with a variety of different, artistic
                treatments done to your book image selections .
              </p>
              <p>
                It takes a few weeks for your images to be retouched and
                enhanced then your layout is designed. Before the book leaves to
                be printed in an Italian castle by a mostly female staff, you
                view and approve our layout design. Printing time depends on the
                bookmaker’s volume flow, book type, and accessories, taking from
                one to six weeks to produce.
              </p>
              <p>
                We call you as soon as it arrives. We have women gasping and
                crying upon seeing the emotional beauty of themselves in their
                own hardcover book!
              </p>
              <p>
                Your books are available in many styles from traditional to the
                very latest trend. For example, we have a 9 X 13 inch book with
                a steel cover and a storybook with a soft leather style cover,
                the page edges delicately ripped. There are various styles of
                hardcover book, some that can hold a video screen in the top lid
                of their box.
              </p>
              <p>
                Sizes vary, colors abound and there are a dazzling array of
                finishes and accessories.
              </p>
              <p>
                We think it is kind of cool to have, Printed in Italy in your
                book. It is a statement.
              </p>
              <p>
                But of course, what else would you expect from Calgary’s top
                luxury studio?
              </p>
            </div>
          </Text>
        </Container>
      </Section>
      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident and sexy. A boudoir photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful and sexy, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered."
      />
    </Layout>
  )
}
