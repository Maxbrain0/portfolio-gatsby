import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./navigation.module.scss"

const navigation = props => {
  const data = useStaticQuery(graphql`
    query {
      allNavLinksJson {
        edges {
          node {
            path
            label
            icon
            color
          }
        }
      }
    }
  `)

  const navLinks = data.allNavLinksJson.edges.map(({ node }) => {
    return (
      <span key={node.label}>
        <FontAwesomeIcon icon={node.icon} color={node.color} />
        <Link to={node.path}>{node.label}</Link>
      </span>
    )
  })
  return (
    <div className={props.className}>
      <div>
        <Link to="/">Home/Logo</Link>
      </div>
      <div className={styles.navLinks}>{navLinks}</div>
    </div>
  )
}

export default navigation
