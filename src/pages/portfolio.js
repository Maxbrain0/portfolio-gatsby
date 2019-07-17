import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"

export default ({ data }) => {
  const projectData = data.allProjectsJson.edges.map(({ projectNode }) => {
    const matchNode = data.allFile.edges.find(({ imgNode }) => {
      return projectNode.imgName === imgNode.childImageSharp.fluid.originalName
    })

    if (!matchNode) {
      projectNode.img = null
    } else {
      projectNode.img = matchNode.imgNode.childImageSharp.fluid
    }

    return projectNode
  })

  const projects = projectData.map(project => (
    <Project key={project.url} project={project} />
  ))

  return (
    <Layout>
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
          imgName
          url
          github
          icons
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        imgNode: node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
