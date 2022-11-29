import * as React from "react"

import Layout from "../components/layout"
import { HeroBannerPadding } from "../components/layoutComponents"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Page Not Found | Inner Spirit Photography"
      description="This is a 404 page."
    />
    <HeroBannerPadding />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
export default NotFoundPage
