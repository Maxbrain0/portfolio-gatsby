import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./navigation.module.scss"

const navigation = props => {
  const data = useStaticQuery(graphql`
    query {
      allNavLinksJson {
        edges {
          node {
            path
            label
          }
        }
      }
    }
  `)

  const navLinks = data.allNavLinksJson.edges.map(({ node }) => {
    return (
      <Link key={node.label} to={node.path} className={styles.navLink}>
        {node.label}
      </Link>
    )
  })
  return (
    <div className={props.className}>
      <div className={styles.brand}>
        <Link to="/">Home/Logo</Link>
      </div>
      <div className={styles.navLinks}>{navLinks}</div>
    </div>
  )
}

export default navigation
