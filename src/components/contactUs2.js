import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Img from "gatsby-image"

import "./contactUs2.css"

const ContactUs2 = ({}) => {
  const data = useStaticQuery(graphql`
    query SiteHeroQuery {
      placeholderImage: file(relativePath: { eq: "thierry.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="contactUs2Wrap">
      <div className="left">
          
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>

      <div className="right">
        <h4>Question about your brand strategy?</h4>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default ContactUs2
