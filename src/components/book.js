


  import React from "react"
  import { useStaticQuery, graphql } from "gatsby"
  import { BLOCKS, MARKS } from "@contentful/rich-text-types"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  
  import "./whatWeDo.css"
 
 const Book = ({   }) => {

    const options = {
        renderMark: {
          [MARKS.BOLD]: text => `<b>${text}</b>`,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
        },
      }
    
   const data = useStaticQuery(graphql`
   query BookQuery {
    contentfulNewPage {
        contentModules {
            ... on ContentfulLayoutHighlightedImage {
                contentful_id
                image {
                  fluid {
                    src
                  }
                }
              }
          ... on ContentfulLayoutContentBlock {
            id

            contentful_id
            title
            headline
            ctaTitle
            copy {
              copy
            }
          }
        }
      }
  }
   `)
 
   const bookData = data.contentfulNewPage.contentModules.find(x => x.contentful_id === "71JJMBCHq3v9O6TFSPO9Aa")
   const imageData = data.contentfulNewPage.contentModules.find(x => x.contentful_id === "4pf5Wo8fXGzpcCaYbQGbTM")
    return (
     
        <div
        className="highlightWrap"
       > 
     
     
    <h4>{bookData.headline}</h4>
     <p
                
              > {bookData.copy.copy}</p>

<img src={imageData.image.fluid.src} alt=""/>
       </div>
     
   )
 }
  
 
 export default Book
 