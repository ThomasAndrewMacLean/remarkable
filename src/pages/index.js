import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <Hero></Hero>
    </Layout>
)

export default IndexPage
