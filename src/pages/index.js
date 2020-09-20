import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import Book from "../components/book"
import HappyClient from "../components/happyClient"
import ContactUs from "../components/contactUs"



import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <Hero></Hero> 
    <HighlightCase/>
    <WhatWeDo/>
    <Book/>
    <HappyClient/>
    
    <ContactUs/>
        </Layout>
)

export default IndexPage
