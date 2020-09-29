import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"

import "./caseCards.css"

const CaseCards = ({}) => {
  const data = useStaticQuery(graphql`
    query CaseCardsQuery {
      allContentfulCasePage {
        nodes {
          id
          slug
          client
          title
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  return (
    <div className="caseCardsWrap">
      {data.allContentfulCasePage.nodes.map(c => {
        return (
          <article key={c.title}>
            <a href={"/case/" + c.slug}>
              <img src={c.image.fluid.src} alt={c.title} />

              <h5>{c.client}</h5>

              <h4>{c.title}</h4>
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default CaseCards
