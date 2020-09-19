


  import React from "react"
  import { useStaticQuery, graphql } from "gatsby"
  import { BLOCKS, MARKS } from "@contentful/rich-text-types"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  
  import "./whatWeDo.css"
 
 const WhatWeDo = ({   }) => {

    const options = {
        renderMark: {
          [MARKS.BOLD]: text => `<b>${text}</b>`,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
        },
      }
    
   const data = useStaticQuery(graphql`
   query WhatWeDoQuery {
    contentfulNewPage {
      contentModules {
        ... on ContentfulLayoutServiceBlockHomepage {
          id
          contentful_id
          title
          text {
            json
          }
        }
      }
    }
  }
   `)
 
   const whatWeDoData = data.contentfulNewPage.contentModules.find(x => x.contentful_id === "3yxuSAwGnPyUnwJAF6EjhQ")
    return (
     
        <div
        className="highlightWrap"
       > 
     
     
    <h4>{whatWeDoData.title}</h4>
     <p
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(whatWeDoData.text.json, options),
                }}
              ></p>

       </div>
     
   )
 }
  
 
 export default WhatWeDo
 