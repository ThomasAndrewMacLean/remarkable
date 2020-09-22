import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "./happyClient.css"

const HappyClient = ({}) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<b>${text}</b>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    },
  }

  const data = useStaticQuery(graphql`
    query HappyClientQuery {
      contentfulNewPage {
        contentModules {
          ... on ContentfulLayoutClientSection {
            id
            contentful_id
            layoutClientImage {
              logo {
                fluid {
                  src
                }
                contentful_id
                title
              }
            }
          }
        }
      }
    }
  `)

  const happyClientData = data.contentfulNewPage.contentModules.find(
    x => x.contentful_id === "3m6u3iOaio88ppMoetJP3I"
  )

  console.log(happyClientData)
  return (
    <div className="happyClientWrap">
      <h4>Just a few of our happy clients</h4>
      <div className="clientWrap">
        {happyClientData.layoutClientImage.map((c, i) => {
          return <img key={i + "image"} src={c.logo.fluid.src} alt="" />
        })}
        {happyClientData.layoutClientImage.map((c, i) => {
          return <img key={i + "image"} src={c.logo.fluid.src} alt="" />
        })}
      </div>
      <a className="discover" href="">
        Discover how we make them happy
      </a>
    </div>
  )
}

export default HappyClient
