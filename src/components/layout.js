import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"
import Map from "./map"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <Footer />
      <Map />
    </>
  )
}
