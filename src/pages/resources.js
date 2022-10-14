import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import BannerImg from "../images/banners/resources-banner.jpg"

export default function Resources() {
  return (
    <Layout>
      <Banner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/resources"
        link2="Resources"
        headline="Resources"
        description=""
      />
    </Layout>
  )
}
