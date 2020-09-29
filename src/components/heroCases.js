import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./heroCases.css"

const Hero = ({ setFilter, filter }) => {
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

  const buttons = [
    "Show all",
    "brand strategy",
    "brand creation",
    "brand protection",
    "brand change",
  ]
  const heroData = data.contentfulNewPage.contentModules.find(
    x => x.contentful_id === "418UtQ1UrHCI6vMY1PvkTV"
  )

  return (
    <div className="heroCasesWrap">
      <h2>Read about our latest client success stories</h2>
      <h4>I pick a service</h4>
      <div className="buttonWrap">
        {buttons.map(b => {
          return (
            <button
              onClick={() => {
                setFilter(b)
              }}
              key={b}
              className={b === filter ? "activeFilter" : ""}
            >
              {b}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
