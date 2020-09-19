import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import HighlightCase from "../components/highlightCase"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <Hero></Hero>
    <HighlightCase/>
    </Layout>
)

export default IndexPage
