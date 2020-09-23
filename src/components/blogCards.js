import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"

import "./blogCards.css"

const BlogCards = ({}) => {
  const data = useStaticQuery(graphql`
    query BlogCardsQuery {
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
    <div className="blogCardsWrap">
      {data.allContentfulCasePage.nodes.map(c => {
        return (
          <article key={c.title}>
            <img src={c.image.fluid.src} alt={c.title} />

            <div className="textWrap">
              <h4>{c.title}</h4>
              <h5>{c.client}</h5>
            </div>
          </article>
        )
      })}

      {data.allContentfulCasePage.nodes.map(c => {
        return (
          <article key={c.title}>
            <img src={c.image.fluid.src} alt={c.title} />

            <div className="textWrap">
              <h4>{c.title}</h4>
              <h5>{c.client}</h5>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default BlogCards
