import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "./contactUs.css"

const ContactUs = ({}) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<b>${text}</b>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    },
  }

  const data = useStaticQuery(graphql`
    query ContactUsQuery {
      contentfulNewPage {
        contentModules {
          ... on ContentfulLayoutContactUsWithoutImage {
            contentful_id
            subtitle
            title
            cta {
              json
            }
          }
        }
      }
    }
  `)

  const contactData = data.contentfulNewPage.contentModules.find(
    x => x.contentful_id === "1OZE1o7QkREvgs6pCKhelv"
  )
  return (
    <div className="contactUsWrap">
      <div className="left">
        <h4>{contactData.title}</h4>
        <h5>{contactData.subtitle}</h5>
      </div>

      <div className="right">
        <button
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactData.cta.json, options),
          }}
        ></button>
      </div>
    </div>
  )
}

export default ContactUs
