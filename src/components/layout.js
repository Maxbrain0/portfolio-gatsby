import React, { Component } from "react"

import "./layout.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <Navigation className="navigation" />
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
