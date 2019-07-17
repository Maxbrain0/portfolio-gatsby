import React from "react"

import Layout from "../components/layout"
import SkillsCard from "../components/skillsCard"
import styles from "./resume.module.scss"

export default ({ data }) => {
  const skills = data.allSkillsJson.edges.map(({ node }) => (
    <SkillsCard skillData={node} />
  ))

  return (
    <Layout>
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
