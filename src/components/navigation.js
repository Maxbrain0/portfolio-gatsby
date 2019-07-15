import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Icon from "./ui/icon"
import NavLink from "./ui/navlink"
import styles from "./navigation.module.scss"
import { colorFromIndex } from "../util/color"

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

  const navLinks = data.allNavLinksJson.edges.map(({ node }, index) => {
    const color = colorFromIndex(index)

    return (
      <NavLink
        key={node.label}
        path={node.path}
        label={node.label}
        color={color}
      />
    )
  })
  return (
    <nav className={props.className}>
      <div className={styles.navigationFlex}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Icon type="brand" width={32} height={32} />
          </Link>
          <div className={styles.home}>
            <NavLink path="/" label="Home" color="#000000bb" />
          </div>
        </div>

        <div className={styles.navLinks}>{navLinks}</div>
      </div>
    </nav>
  )
}

export default navigation
