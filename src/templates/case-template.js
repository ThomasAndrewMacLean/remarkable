import * as React from "react"
import Layout from "../components/layout"
import HeroBol from "../components/heroBol"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "./case.css"

const BlogTemplate = ({ data, pageContext }) => {
  const remarkableCase = data.allContentfulCasePage.nodes.find(
    x => x.slug === pageContext.slug
  )
  const otherCases = data.allContentfulCasePage.nodes.filter(
    x => x.slug !== pageContext.slug
  )

  var dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<b>${text}</b>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    },
  }
  return (
    <Layout>
      <HeroBol
        image={remarkableCase.headerImage}
        titleHtml={remarkableCase.title}
      ></HeroBol>

      <article className="caseWrap">
        <h5>
          <span>Author: {remarkableCase.author?.author}</span>
          <span>Client: {remarkableCase.client}</span>
          <span>
            {new Date(remarkableCase.creationDate).toLocaleDateString(
              "en-US",
              dateOptions
            )}
          </span>
        </h5>

        <div className="briefWrap">
          <div className="image">
            <img src={remarkableCase.clientLogo?.fluid.src} alt="" />
          </div>
          <div className="brief text">
            <h3>{remarkableCase.subtitle}</h3>
            <p
              className="textWrap"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  remarkableCase.theBrief?.json,
                  options
                ),
              }}
            ></p>
          </div>
        </div>

        <img
          className="mainImage"
          src={remarkableCase.image?.fluid.src}
          alt=""
        />

        <div className="solutionWrap text">
          <h3>{remarkableCase.subtitleSolution}</h3>
          <p
            className="textWrap"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                remarkableCase.shortDescriptionSolution?.json,
                options
              ),
            }}
          ></p>
        </div>

        <div className="impactWrap text">
          <h3>{remarkableCase.subtitleImpact}</h3>
          <p
            className="textWrap"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                remarkableCase.shortDescriptionImpact?.json,
                options
              ),
            }}
          ></p>
        </div>

        <div className="relevantCasesWrap">
          <h3 className="title">Relevant cases for you...</h3>
          <div className="caseCardsWrap">
            {otherCases.map(c => {
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
        </div>
      </article>
    </Layout>
  )
}
export default BlogTemplate

export const pageQuery = graphql`
  query ProductById {
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
        headerImage {
          fluid {
            src
          }
        }
        author {
          author
        }
        creationDate
        clientLogo {
          fluid {
            src
          }
        }
        subtitle
        shortDescriptionImpact {
          json
        }
        subtitleSolution
        shortDescriptionSolution {
          json
        }
        subtitleImpact
        theBrief {
          json
        }
      }
    }
  }
`
