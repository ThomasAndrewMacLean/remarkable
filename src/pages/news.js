import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroBol from "../components/heroBol"

import ContactUs from "../components/contactUs"

import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="Blogs" />

    <HeroBol></HeroBol>

    <ContactUs />
  </Layout>
)

export default NewsPage
