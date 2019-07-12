import React from "react"

import "../styles/main.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

class Layout extends React.Component {
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
