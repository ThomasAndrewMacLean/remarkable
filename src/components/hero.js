import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./hero.css"

const Hero = ({}) => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
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
    <div className="heroWrap">
      <h2>{heroData.title}</h2>

      <button className="ctaButton">Discover more</button>
      <div className="imageWrap">
        {/* <Img fluid={heroData.headerImage.fluid}></Img> */}
        <img src={heroData.headerImage.fluid.src} alt="header image" />
      </div>
    </div>
  )
}

export default Hero
