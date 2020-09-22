import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroCases from "../components/heroCases"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import Book from "../components/book"
import HappyClient from "../components/happyClient"
import ContactUs from "../components/contactUs"

import SEO from "../components/seo"

const CasesPage = () => (
  <Layout>
    <SEO title="Cases" />

    <HeroCases></HeroCases>
    <HighlightCase />
    <WhatWeDo />
    <Book />
    <HappyClient />

    <ContactUs />
  </Layout>
)

export default CasesPage
