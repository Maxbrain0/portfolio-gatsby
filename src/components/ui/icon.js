import React, { Component } from "react"

// icon imports
import BrandIcon from "../../assets/svg/brand.svg"
import VueIcon from "../../assets/svg/vue.svg"

class Icon extends Component {
  static defaultProps = {
    width: 32,
    height: 32,
  }
  components = {
    brand: BrandIcon,
    vue: VueIcon,
  }
  render() {
    const IconName = this.components[this.props.type]
    return <IconName width={this.props.width} height={this.props.height} />
  }
}
export default Icon
