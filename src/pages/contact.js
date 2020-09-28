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

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPage {
      allContentfulContactPage {
        nodes {
          address {
            json
          }
          agreeCommunications
          agreeProcessData
          askUsAnything {
            json
          }
          email {
            json
          }
          heroImage {
            fluid {
              src
            }
          }
          heroText
          labelCompanyName
          labelEmail
          labelFirstName
          labelLastName
          labelTextArea
          phonenumber {
            json
          }
          privacyPolicy {
            json
          }
          officeParis {
            json
          }
          sendButton
        }
      }
    }
  `)

  const contactData = data.allContentfulContactPage.nodes[0]
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<b>${text}</b>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    },
  }

  const sendForm = () => {}
  return (
    <Layout>
      <SEO title="Contact" />
      <HeroBol image={contactData.heroImage} titleHtml={contactData.heroText} />
      <div className="contactWrap">
        <div className="left">
          <p
            className="askUsAnything"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(
                contactData.askUsAnything.json,
                options
              ),
            }}
          ></p>

          <div className="addressSquares">
            <p
              className="square"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(contactData.address.json, options),
              }}
            ></p>

            <p
              className="square"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(contactData.email.json, options),
              }}
            ></p>
            <p
              className="square"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  contactData.phonenumber.json,
                  options
                ),
              }}
            ></p>
            <p
              className="square"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  contactData.officeParis.json,
                  options
                ),
              }}
            ></p>
          </div>
        </div>
        <div className="right">
          <form action="" onSubmit={sendForm}>
            <div className="row">
              <div className="inputWrap">
                <label className="uppercase" htmlFor="name">
                  {contactData.labelFirstName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autocomplete="given-name"
                />
              </div>

              <div className="inputWrap">
                <label className="uppercase" htmlFor="lastName">
                  {contactData.labelLastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  autocomplete="family-name"
                />
              </div>
            </div>

            <div className="row">
              <div className="inputWrap">
                <label className="uppercase" htmlFor="companyName">
                  {contactData.labelCompanyName}
                </label>
                <input type="text" id="companyName" name="companyName" />
              </div>

              <div className="inputWrap">
                <label className="uppercase" htmlFor="email">
                  {contactData.labelEmail}
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="email"
                />
              </div>
            </div>

            <div className="row">
              <div className="inputWrap">
                <label className="uppercase" htmlFor="comment">
                  {contactData.labelTextArea}
                </label>
                <textarea id="comment" name="comment"></textarea>
              </div>
            </div>

            <div className="row checkboxRow">
              <input
                type="checkbox"
                name="agreeCommunications"
                id="agreeCommunications"
              />
              <label htmlFor="agreeCommunications">
                {contactData.agreeCommunications}
              </label>
            </div>

            <div className="row checkboxRow">
              <input
                required
                type="checkbox"
                name="agreeProcessData"
                id="agreeProcessData"
              />
              <label htmlFor="agreeProcessData">
                {contactData.agreeProcessData}
              </label>
            </div>

            <div className="row">
              <div
                className="privacy"
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(
                    contactData.privacyPolicy.json,
                    options
                  ),
                }}
              ></div>
            </div>

            <div className="row">
              <button className="ctaButton">{contactData.sendButton}</button>
            </div>
          </form>
        </div>
        {/* <p
          className="ourApproach"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(serviceData.ourApproach.json, options),
          }}
        ></p>

        <p
          className="experience"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(serviceData.experience.json, options),
          }}
        ></p> */}
      </div>

      <ContactUs2 />
    </Layout>
  )
}

export default ContactPage
