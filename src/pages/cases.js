import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroCases from "../components/heroCases"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import Book from "../components/book"
import HappyClient from "../components/happyClient"
import ContactUs2 from "../components/contactUs2"

import SEO from "../components/seo"

const CasesPage = () => (
  <Layout>
    <SEO title="Cases" />

    <HeroCases></HeroCases>

    <ContactUs2 />
  </Layout>
)

export default CasesPage
