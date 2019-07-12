import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const navigation = props => {
  const navLinks = props.navItems.map(item => (
    <span>
      <FontAwesomeIcon icon={item.icon} />
      <Link to={item.path}>{item.label}</Link>
    </span>
  ))
  return (
    <div className={props.className}>
      <div>
        <Link to="/">Home/Logo</Link>
      </div>
      <div>{navLinks}</div>
    </div>
  )
}

export default navigation
