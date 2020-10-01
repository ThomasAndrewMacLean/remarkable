import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Arrow from "./arrow"
import "./highlightCase.css"

const HighlightCase = ({}) => {
  const data = useStaticQuery(graphql`
    query MyHighlightsQuery {
      allContentfulCasePage(filter: { highlightedCase: { eq: true } }) {
        nodes {
          image {
            fluid {
              src
            }
          }
          client
          serviceCartegories {
            title
          }
          title
          slug
        }
      }
    }
  `)

  const highlightCases = data.allContentfulCasePage.nodes
  // const cta = data.contentfulNewPage.contentModules.find(
  //   x => x.id === "26c0838b-abfb-5780-9535-48489d6d703f"
  // )
  return (
    <div className="highlightWrap">
      {highlightCases.map((c, i) => {
        return (
          <div
            className={i % 2 === 0 ? "evenWrap" : "oddWrap"}
            key={i + "case"}
          >
            <div className="textWrap">
              <h5>{c.client}</h5>

              <h4>{c.title}</h4>
              <div className="services">
                {(c.serviceCartegories || []).map((s, i) => {
                  return <span key={s.title + i}>{s.title}</span>
                })}
              </div>
              <div className="arrow">
                <a href={"/case/" + c.slug}>
                  <Arrow></Arrow>
                </a>
              </div>
            </div>
            <div className="imageWrap">
              <img src={c.image.fluid.src} alt="" />
            </div>
          </div>
        )
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "9rem",
          marginBottom: "97px",
        }}
      >
        <button className="ctaButton">View more cases</button>
      </div>
    </div>
  )
}

export default HighlightCase
