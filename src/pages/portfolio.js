import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const icons = data.allProjectsJson.edges.map((edge, index) => {
    const lib = edge.node.technology_icons[0].lib
    const name = edge.node.technology_icons[0].name

    return <FontAwesomeIcon key={index} icon={[lib, name]} />
  })

  return (
    <Layout>
      <h1>Portfolio</h1>
      {icons}
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          url
          github_url
          technology_icons {
            lib
            name
          }
        }
      }
    }
  }
`
