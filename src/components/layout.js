import React, { Component } from "react"

import "./layout.scss"
import "../util/fontAwesome"
import Sidebar from "./sidedbar"

class Layout extends Component {
  render() {
    return (
      <div>
        <Sidebar className="sidebar" />
        <div className="main">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
