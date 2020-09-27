import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"

import "./blogCards.css"

const BlogCards = ({}) => {
  const data = useStaticQuery(graphql`
    query BlogCardsQuery {
      allContentfulBlogPage {
        nodes {
          id
          slug
          client
          title
          brief
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
      {data.allContentfulBlogPage.nodes.map(c => {
        return (
          <article key={c.title}>
            <a href={"/news/" + c.slug}>
              <img src={c.image.fluid.src} alt={c.title} />

              <div className="textWrap">
                <h4>{c.title}</h4>
                <h5>{c.brief}</h5>
              </div>
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default BlogCards
