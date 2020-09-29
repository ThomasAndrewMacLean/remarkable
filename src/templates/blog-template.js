import * as React from "react"
import ContactUs2 from "../components/contactUs2"
import Layout from "../components/layout"
import HeroBol from "../components/heroBol"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import "./blog.css"

const BlogTemplate = ({ data, pageContext }) => {
  const remarkableCase = data.allContentfulBlogPage.nodes.find(
    x => x.slug === pageContext.slug
  )
  const otherCases = data.allContentfulBlogPage.nodes.filter(
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

      <article className="blogWrap">
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

        <div className="solutionWrap text">
          <h3>{remarkableCase.subtitleSolution}</h3>
          <div
            className="textWrap"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(remarkableCase.text?.json, options),
            }}
          ></div>
        </div>

        <div className="mainImageWrap">
          <img
            className="mainImage"
            src={remarkableCase.image?.fluid.src}
            alt=""
          />
        </div>

        <ContactUs2 />

        <div className="relevantCasesWrap">
          <h3 className="title">Things you may find interesting too...</h3>
          <div className="caseCardsWrap">
            {otherCases.map(c => {
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
        </div>
      </article>
    </Layout>
  )
}
export default BlogTemplate

export const pageQuery = graphql`
  query BlogPageById {
    allContentfulBlogPage {
      nodes {
        id
        slug
        client
        brief
        title
        text {
          json
        }
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
      }
    }
  }
`
