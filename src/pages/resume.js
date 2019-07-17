import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./resume.module.scss"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={styles.resume}>
        <h1>Work Experience</h1>

        <h1>Education</h1>
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
        }
      }
    }
  }
`
