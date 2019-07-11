import React, { Component } from "react"
import "../util/fontAwesome"

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Main Layout</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
