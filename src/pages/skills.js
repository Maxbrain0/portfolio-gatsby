import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import SkillsCard from "../components/skillsCard"
import styles from "./resume.module.scss"

export default ({ data }) => {
  const skills = data.allSkillsJson.edges.map(({ node }) => (
    <SkillsCard key={node.label} skillData={node} />
  ))

  return (
    <Layout>
      <SEO
        title="Skills"
        description="A visual summary of my skills and tools"
        pathname="skills/"
      />
      <div className={styles.skills}>
        <h1>Skills</h1>
        {skills}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSkillsJson {
      edges {
        node {
          label
          items {
            skill
            icon
          }
        }
      }
    }
  }
`
