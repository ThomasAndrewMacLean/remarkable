import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroBol from "../components/heroBol"
import HighlightCase from "../components/highlightCase"
import WhatWeDo from "../components/whatWeDo"
import Book from "../components/book"
import CaseCards from "../components/caseCards"
import ContactUs2 from "../components/contactUs2"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import SEO from "../components/seo"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQuery {
      allContentfulServiceOverviewPage {
        nodes {
          brandChangeText
          brandCreationText
          brandChangeTitle
          brandCreationTitle
          brandProtectionText
          brandProtectionTitle
          brandStrategyText
          brandStrategyTitle
          heroText
          readMoreButton
          experience {
            json
          }
          headerImage {
            fluid {
              src
            }
          }
          ourApproach {
            json
          }
        }
      }
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
  `)

  const otherCases = data.allContentfulCasePage.nodes.slice(0, 2)
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<b>${text}</b>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    },
  }
  const serviceData = data.allContentfulServiceOverviewPage.nodes[0]
  return (
    <Layout>
      <SEO title="Services" />
      <HeroBol
        image={serviceData.headerImage}
        titleHtml={serviceData.heroText}
      />
      <div className="servicesWrap">
        <p
          className="ourApproach"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(serviceData.ourApproach.json, options),
          }}
        ></p>

        <div className="serviceBlockWrap">
          <div className="service strategy">
            <h2>{serviceData.brandStrategyTitle}</h2>
            <p>{serviceData.brandStrategyText}</p>
            <a href="/service/strategy" className="readMore">
              {serviceData.readMoreButton}
            </a>
          </div>

          <div className="service creation">
            <h2>{serviceData.brandCreationTitle}</h2>
            <p>{serviceData.brandCreationText}</p>
            <a href="/service/creation" className="readMore">
              {serviceData.readMoreButton}
            </a>
          </div>

          <div className="service protection">
            <h2>{serviceData.brandProtectionTitle}</h2>
            <p>{serviceData.brandProtectionText}</p>
            <a href="/service/protection" className="readMore">
              {serviceData.readMoreButton}
            </a>
          </div>
          <div className="service change">
            <h2>{serviceData.brandChangeTitle}</h2>
            <p>{serviceData.brandChangeText}</p>
            <a href="/service/change" className="readMore">
              {serviceData.readMoreButton}
            </a>
          </div>
        </div>

        <p
          className="experience"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(serviceData.experience.json, options),
          }}
        ></p>
      </div>

      <div className="relevantCasesWrap">
        <h3 className="title">Relevant cases for you...</h3>
        <div className="caseCardsWrap">
          {otherCases.slice(0, 2).map(c => {
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

        <div className="buttonWrap">
          <a href="/cases" className="ctaButton">
            check all cases
          </a>
        </div>
      </div>
      <ContactUs2 />
    </Layout>
  )
}

export default ServicesPage
