import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"

export default ({ data }) => {
  const projectData = data.allProjectsJson.edges

  const projects = projectData.map(({ node }) => (
    <Project key={node.url} project={node} />
  ))

  return (
    <Layout>
      <h1>Projects</h1>
      {projects}
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
