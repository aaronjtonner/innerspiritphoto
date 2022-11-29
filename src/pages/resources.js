import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, GridAuto, Section } from "../components/layoutComponents"
import ResourceList from "../components/resourceList"
import BannerImg from "../images/banners/resources-banner.jpg"
import SEO from "../components/seo"

export default function Resources() {
  return (
    <Layout>
      <SEO
        title="Resources | Inner Spirit Photography"
        description="This page contains all of Inner Spirit Photography's resources for our clients!"
      />
      <Banner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/resources"
        link2="Resources"
        headline="Resources"
        description=""
      />
      <ResourceList />
    </Layout>
  )
}
