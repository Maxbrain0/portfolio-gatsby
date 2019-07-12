import React from "react"
import { Link } from "gatsby"

import styles from "./navlink.module.scss"

const navLink = props => (
  <Link
    to={props.path}
    style={{ color: props.color }}
    activeClassName={styles.active}
  >
    <div className={styles.navLabel}>{props.label}</div>
    <div
      style={{ backgroundColor: props.color }}
      className={styles.underlined}
    ></div>
  </Link>
)

export default navLink
