import React from "react"
import Layout from "../components/layout"
import ContestHero from "../components/Contest/ContestHero"
import BannerImg from "../images/banners/contact-banner.jpg"
import ContestBanner from "../components/banners/bannerContest"
import ContestInfo from "../components/Contest/ContestInfo"
import { ButtonPrimary } from "../components/buttons"
import { Container, Flex, Section } from "../components/layoutComponents"
import FormContest from "../components/forms/formContest"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import ContestAsidePhoto from "../components/Contest/ContestAsidePhoto"

export default function Contest() {
  return (
    <Layout>
      <SEO
        title="Contest | Inner Spirit Photography"
        description="This could solve
              your gift-giving need or create a perfect gift for yourself."
      />
      <Helmet>
        {/* <script type='text/javascript' src='https://im322.infusionsoft.com/app/form/iframe/cdd5e6d034dc6adfbcbaa93a74ea5667'></script> */}
      </Helmet>
      <ContestBanner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/contest"
        link2="Contest"
      />
      <Container>
        <Flex>
          <ContestInfo />
          <ContestAsidePhoto />
        </Flex>
      </Container>

      <FormContest />
      <Section>
        <center>
          <ButtonPrimary to="/contest-rules">contest rules</ButtonPrimary>
        </center>
      </Section>
    </Layout>
  )
}
