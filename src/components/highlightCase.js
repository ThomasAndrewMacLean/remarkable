


  import React from "react"
 import { useStaticQuery, graphql } from "gatsby"

 import "./highlightCase.css"

const HighlightCase = ({   }) => {
  const data = useStaticQuery(graphql`
  query HighlightQuery {
    contentfulNewPage(title: {eq: "Homepage"}) {
      contentModules {
        ... on ContentfulMainCta {
            id
            buttonText
          }
        ... on ContentfulLayoutHighlightedCase {
          id
          contentful_id
          title
          image {
            fluid {
              src
            }
          }
          client
          cta
          services {
            title
            color
          }
        }
      }
    }
  }
  
  `)

  const highlightCases = data.contentfulNewPage.contentModules.filter(x => x.contentful_id=== "2ppwgLQCcpke4UHCNAlbWL")
   const cta = data.contentfulNewPage.contentModules.find(x => x.id ==="26c0838b-abfb-5780-9535-48489d6d703f")
  return (
    
       <div
       className="highlightWrap"
      > 
     {highlightCases.map((c,i) => {

     return(<div key={i + "case"}>{c.client}
     
     <h4>{c.title}</h4>

     <img src={c.image.fluid.src} alt=""/>

     {c.services.map((s,i) => {
         return <span key={s.title +  i}>{s.title}</span>
     })}
     </div>)
     })}


    <button>{cta.buttonText}</button>
      </div>
    
  )
}
 

export default HighlightCase
