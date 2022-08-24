import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTAsecondary from "../../components/CTAsecondary"
import CTA from "../../components/CTA"
import BannerImg from "../../images/banners/banner-1.png"
import { Container, Section } from "../../components/layoutComponents"

export default function Books() {
  return (
    <Layout>
      <SEO title="" description="" />
      <BannerSecondary
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        to3="/portfolios/books"
        link3="Books"
        headline="Books"
        description="When I saw my photos, I broke into tears because I thought, I can't believe how beautiful that person is. - Deanna"
      />
      <CTAsecondary />
      <Section>
        <Container>
          <h2 className="headline"></h2>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </Container>
      </Section>
      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident and sexy. A boudoir photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful and sexy, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered"
      />
    </Layout>
  )
}
