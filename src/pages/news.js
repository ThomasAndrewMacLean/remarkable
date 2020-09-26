import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroBol from "../components/heroBol"
import BlogCards from "../components/blogCards"
import ContactUs from "../components/contactUs"

import SEO from "../components/seo"

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    query HeroBolQuery {
      contentfulNewPage(title: { eq: "Homepage" }) {
        contentModules {
          ... on ContentfulLayoutHeaderSection {
            id
            title
            contentful_id
            node_locale
            headerImage {
              fluid(maxWidth: 613) {
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  const heroData = data.contentfulNewPage.contentModules.find(
    x => x.contentful_id === "418UtQ1UrHCI6vMY1PvkTV"
  )
  return (
    <Layout>
      <SEO title="Blogs" />

      <HeroBol
        image={heroData.headerImage}
        titleHtml={"Fresh insights by our team on latest news topics"}
      ></HeroBol>
      <BlogCards></BlogCards>
      <ContactUs />
    </Layout>
  )
}

export default NewsPage
