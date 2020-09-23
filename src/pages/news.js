import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroBol from "../components/heroBol"
import BlogCards from "../components/blogCards"
import ContactUs from "../components/contactUs"

import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="Blogs" />

    <HeroBol></HeroBol>
    <BlogCards></BlogCards>
    <ContactUs />
  </Layout>
)

export default NewsPage
