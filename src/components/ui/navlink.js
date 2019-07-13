import React from "react"
import { Link } from "gatsby"

import styles from "./navlink.module.scss"

const navLink = props => (
  <Link
    to={props.path}
    style={{ color: props.color }}
    className={styles.link}
    activeClassName={styles.activeLink}
  >
    <div className={styles.navLabel}>{props.label}</div>
    <div
      style={{ backgroundColor: props.color }}
      className={styles.underline}
    ></div>
  </Link>
)

export default navLink
