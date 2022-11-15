import React from "react"
import Layout from "../components/layout"
import ContestHero from "../components/Contest/ContestHero"
import BannerImg from "../images/banners/contact-banner.jpg"
import ContestBanner from "../components/banners/bannerContest"
import ContestInfo from "../components/Contest/ContestInfo"
import { ButtonPrimary } from "../components/buttons"
import { Section } from "../components/layoutComponents"

export default function Contest() {
  return (
    <Layout>
      <ContestBanner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/contest"
        link2="Contest"
      />
      <ContestInfo />
      <Section>
        <center>
          <ButtonPrimary to="/contest-rules">contest rules</ButtonPrimary>
        </center>
      </Section>
    </Layout>
  )
}
