import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  // const icons = data.allProjectsJson.edges.map((edge, index) => {
  //   const lib = edge.node.technology_icons[0].lib
  //   const name = edge.node.technology_icons[0].name

  //   return <FontAwesomeIcon key={index} icon={[lib, name]} />
  // })

  return (
    <Layout>
      <h1>Projects</h1>
      <h1>Skills</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          url
          github
          icons
        }
      }
    }
  }
`
