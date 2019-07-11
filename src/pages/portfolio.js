import React from "react"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const icons = data.allProjectsJson.edges.map(edge => {
    const lib = edge.node.technology_icons[0].lib
    const name = edge.node.technology_icons[0].name

    return <FontAwesomeIcon icon={[lib, name]} />
  })

  return (
    <Layout>
      <h2>Portfolio</h2>
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
