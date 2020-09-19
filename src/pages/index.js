import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <Hero></Hero>
    <HighlightCase/>
    <WhatWeDo/>
    </Layout>
)

export default IndexPage
