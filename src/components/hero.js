import React from "react"
 import { useStaticQuery, graphql } from "gatsby"

 import "./hero.css"

const Hero = ({   }) => {
  const data = useStaticQuery(graphql`
  query HeroQuery {
    contentfulNewPage(title: {eq: "Homepage"}) {
        contentModules {
          ... on ContentfulLayoutHeaderSection {
            id
            title
            contentful_id
            node_locale
            headerImage {
              fluid {
                src
              }
            }
          }
        }
      }
  }
  `)

  const heroData = data.contentfulNewPage.contentModules.find(x => x.contentful_id=== "418UtQ1UrHCI6vMY1PvkTV")
  return (
    
       <div
       className="heroWrap"
      >
          <h2>{heroData.title}</h2>

<button className="cta">
    Discover more
</button>
          <div className="imageWrap">
              <img src={heroData.headerImage.fluid.src} alt="header image"/>
          </div>
      
     
      </div>
    
  )
}
 

export default Hero
