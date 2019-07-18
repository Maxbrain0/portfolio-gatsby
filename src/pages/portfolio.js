import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Project from "../components/project"

export default ({ data }) => {
  const projectData = data.allProjectsJson.edges.map(({ projectNode }) => {
    const matchNode = data.allFile.edges.find(({ imgNode }) => {
      return projectNode.mediaName === imgNode.base
    })

    if (!matchNode) {
      projectNode.mediaUrl = null
    } else {
      projectNode.mediaUrl = matchNode.imgNode.publicURL
    }

    return projectNode
  })

  const projects = projectData.map(project => (
    <Project key={project.url} project={project} />
  ))

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Some of my favorite projects"
        pathname="portfolio/"
      />
      <h1>Portfolio</h1>
      {projects}
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        projectNode: node {
          title
          description
          mediaName
          url
          github
          icons
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        imgNode: node {
          base
          publicURL
        }
      }
    }
  }
`
