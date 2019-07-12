import React, { Component } from "react"

import "./layout.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

class Layout extends Component {
  navItems = [
    {
      path: "/portfolio",
      label: "Portfolio",
      icon: [],
    },
    {
      path: "/resume",
      label: "Resume",
      icon: [],
    },
    {
      path: "/contact",
      label: "Contacts",
      icon: ["fas", "address-card"],
    },
  ]
  render() {
    return (
      <div className="main">
        <Navigation className="navigation" navItems={this.navItems} />
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
