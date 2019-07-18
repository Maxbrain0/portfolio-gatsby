import React from "react"

import "../styles/main.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

const layout = props => (
  <div className="main">
    <Navigation className="navigation" />
    <div className="content">{props.children}</div>
  </div>
)

export default layout
