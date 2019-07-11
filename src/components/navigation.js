import React from "react"
import { Link } from "gatsby"

const navigation = props => (
  <div className={props.className}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)
export default navigation
