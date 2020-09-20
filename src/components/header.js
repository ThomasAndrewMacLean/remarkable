import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = ({}) => {
  const data = useStaticQuery(graphql`
    query MyHeaderQuery {
      allContentfulNavigationBar(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ctaLetsTalk
          ctaCases
          ctaContact
          ctaNews
          ctaServices
          logo {
            fluid {
              src
            }
          }
        }
      }
    }
  `)
  return (
    <header
      style={
        {
          // marginBottom: `1.45rem`,
        }
      }
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1rem 1.0875rem`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, display: "inline" }}>
          <Link
            to="/"
            style={{
              color: `#333`,
              textDecoration: `none`,
              display: "flex",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={data.allContentfulNavigationBar.nodes[0].logo.fluid.src}
              alt="remarkable"
            ></img>
          </Link>
        </h1>
        <nav>
          <Link
            to="/cases"
            style={{
              color: `#333`,
              padding: "1rem",
              textDecoration: `none`,
            }}
          >
            {data.allContentfulNavigationBar.nodes[0].ctaCases}
          </Link>

          <Link
            to="/cases"
            style={{
              color: `#333`,
              padding: "1rem",
              textDecoration: `none`,
            }}
          >
            {data.allContentfulNavigationBar.nodes[0].ctaServices}
          </Link>

          <Link
            to="/cases"
            style={{
              color: `#333`,
              padding: "1rem",
              textDecoration: `none`,
            }}
          >
            {data.allContentfulNavigationBar.nodes[0].ctaNews}
          </Link>

          <Link
            to="/cases"
            style={{
              color: `#333`,
              padding: "1rem",
              textDecoration: `none`,
            }}
          >
            {data.allContentfulNavigationBar.nodes[0].ctaContact}
          </Link>

          <Link
            to="/cases"
            style={{
              color: `#333`,
              padding: "0.5rem 1rem",
              marginLeft: "3rem",
              borderRadius: "4px",
              border: "2px solid black",
              textDecoration: `none`,
            }}
          >
            {data.allContentfulNavigationBar.nodes[0].ctaLetsTalk}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
