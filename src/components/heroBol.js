import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./heroBol.css"

const HeroBol = ({}) => {
  const data = useStaticQuery(graphql`
    query HeroBolQuery {
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
    <div
      className="heroBolWrap"
      style={{
        background:
          "url(" +
          heroData.headerImage.fluid.src +
          ") no-repeat center center fixed",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1200"
        // height="420"
        viewBox="0 0 1200 420"
        fill="none"
      >
        <path
          d="M1137.71 567.662C1137.71 461.54 1137.71 522.268 1137.71 425.169L1014.44 352.542L845.084 266.734C776.048 238.218 525.767 106.798 -18.4372 32.4979L-18.4398 567.662L1137.71 567.662Z"
          fill="#0E213F"
          fill-opacity="0.75"
        />
      </svg>
      <h2>
        Fresh insights by our team <br></br>on latest news topics
      </h2>
    </div>
  )
}

export default HeroBol
