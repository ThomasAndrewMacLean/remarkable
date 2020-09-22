import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./heroCases.css"

const Hero = ({}) => {
  const data = useStaticQuery(graphql`
    query HeroCasesQuery {
      contentfulNewPage(title: { eq: "Homepage" }) {
        contentModules {
          ... on ContentfulLayoutHeaderSection {
            id
            title
            contentful_id
            node_locale
            headerImage {
              fluid {
                src
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
    <div className="heroCasesWrap">
      <h2>Read about our latest client success stories</h2>
      <h4>I pick a service</h4>
    </div>
  )
}

export default Hero
