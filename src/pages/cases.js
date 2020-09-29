import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroCases from "../components/heroCases"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import Book from "../components/book"
import CaseCards from "../components/caseCards"
import ContactUs2 from "../components/contactUs2"

import SEO from "../components/seo"

const CasesPage = () => {
  const [filter, setFilter] = useState()
  return (
    <Layout>
      <SEO title="Cases" />

      <HeroCases setFilter={setFilter}></HeroCases>
      <CaseCards filter={filter}></CaseCards>
      <ContactUs2 />
    </Layout>
  )
}

export default CasesPage
