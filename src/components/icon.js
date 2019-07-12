import React, { Component } from "react"

// icon imports
import VueIcon from "../assets/svg/vue.svg"

class Icon extends Component {
  components = {
    vue: VueIcon,
  }
  render() {
    const IconName = this.components[this.props.type]
    return <IconName />
  }
}
export default Icon
