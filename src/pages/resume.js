import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ExperienceItem from "../components/experienceItem"
import EducationItem from "../components/educationItem"

import styles from "./resume.module.scss"

export default ({ data }) => {
  const experience = data.allExperienceJson.edges.map(({ node }) => (
    <ExperienceItem key={node.title} experience={node} />
  ))

  const education = data.allEducationJson.edges.map(({ node }) => (
    <EducationItem key={node.school} education={node} />
  ))

  return (
    <Layout>
      <div className={styles.resume}>
        <h1>Experience</h1>
        {experience}

        <h1>Education</h1>
        {education}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allEducationJson {
      edges {
        node {
          school
          dates
          degree
          other
          thesis {
            title
            summary
          }
        }
      }
    }
    allExperienceJson {
      edges {
        node {
          title
          company
          dates
          bullets
          location
        }
      }
    }
  }
`
