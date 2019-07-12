import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

const layout = props => {
  const data = useStaticQuery(graphql`
    query {
      allNavLinksJson {
        edges {
          node {
            path
            label
            icon
          }
        }
      }
    }
  `)

  const navLinks = data.allNavLinksJson.edges.map(edge => edge.node)

  return (
    <div className="main">
      <Navigation className="navigation" navItems={navLinks} />
      <div className="content">{props.children}</div>
    </div>
  )
}

export default layout
