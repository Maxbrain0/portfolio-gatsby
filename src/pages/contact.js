import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import styles from "./contact.module.scss"

export default ({ data }) => {
  const links = data.allContactJson.edges.map(({ node }) => (
    <div key={node.label} className={styles.item}>
      <a href={node.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={node.faIcon} size="2x" color={node.color} />
      </a>
      <span>{node.label}</span>
    </div>
  ))
  return (
    <Layout>
      <SEO
        title="Contact"
        description="How to get ahold of me"
        pathname="contact/"
      />
      <div>
        <h1>Contact Me</h1>
        <div className={styles.contactLinks}>{links}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContactJson {
      edges {
        node {
          label
          url
          faIcon
          color
        }
      }
    }
  }
`
