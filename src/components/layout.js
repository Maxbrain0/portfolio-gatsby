import React, { Component } from "react"

import "./layout.scss"
import "../util/fontAwesome"
// import Sidebar from "./sidedbar"

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
