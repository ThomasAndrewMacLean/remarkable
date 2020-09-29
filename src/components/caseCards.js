import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"

import "./caseCards.css"

const CaseCards = ({ filter }) => {
  const data = useStaticQuery(graphql`
    query CaseCardsQuery {
      allContentfulCasePage {
        nodes {
          id
          slug
          client
          title
          serviceCartegories {
            title
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const [cases, setCases] = useState(data.allContentfulCasePage.nodes)

  useEffect(() => {
    if (filter && filter.toUpperCase() !== "SHOW ALL") {
      setCases(
        data.allContentfulCasePage.nodes.filter(x =>
          (x.serviceCartegories || [])
            .map(x => x.title.toUpperCase())
            .includes(filter.toUpperCase())
        )
      )
    } else {
      setCases(data.allContentfulCasePage.nodes)
    }
  }, [filter])
  return (
    <div className="caseCardsWrap">
      {cases.map(c => {
        return (
          <article key={c.title}>
            <a href={"/case/" + c.slug}>
              <img src={c.image.fluid.src} alt={c.title} />
              <h5>{c.client}</h5>
              <h4>{c.title}</h4>
              <div className="categories">
                {(c.serviceCartegories || []).map(x => (
                  <span key={x.title}>{x.title}</span>
                ))}
              </div>
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default CaseCards
