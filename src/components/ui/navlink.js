import React from "react"
import { Link } from "gatsby"

const navLink = props => (
  <Link to={props.path} style={{ color: props.color }}>
    {props.label}
  </Link>
)

export default navLink
