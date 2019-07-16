import React, { Component } from "react"

// icon imports
import BrandIcon from "../../assets/svg/brand.svg"
import BulmaIcon from "../../assets/svg/bulma.svg"
import D3Icon from "../../assets/svg/d3js-icon.svg"
import GatsbyIcon from "../../assets/svg/gatsbyjs-icon.svg"
import GhostIcon from "../../assets/svg/ghost-tile.svg"
import HandlebarsIcon from "../../assets/svg/handlebarsjs-icon.svg"
import NpmIcon from "../../assets/svg/npmjs-ar21.svg"
import NuxtIcon from "../../assets/svg/nuxt-square.svg"
import ParcelIcon from "../../assets/svg/parceljs-rect.svg"
import ReactIcon from "../../assets/svg/reactjs-icon.svg"
import SassIcon from "../../assets/svg/sass-lang-icon.svg"
import TypeScriptIcon from "../../assets/svg/typescriptlang-icon.svg"
import VueIcon from "../../assets/svg/vue.svg"
import VuetifyIcon from "../../assets/svg/vuetify.svg"

class Icon extends Component {
  components = {
    brand: BrandIcon,
    bulma: BulmaIcon,
    d3: D3Icon,
    gatsby: GatsbyIcon,
    ghost: GhostIcon,
    handlebars: HandlebarsIcon,
    npm: NpmIcon,
    nuxt: NuxtIcon,
    parcel: ParcelIcon,
    react: ReactIcon,
    sass: SassIcon,
    typescript: TypeScriptIcon,
    vue: VueIcon,
    vuetify: VuetifyIcon,
  }
  render() {
    const IconName = this.components[this.props.type]
    if (!IconName) {
      return null
    }
    // get passed down classes
    return <IconName className={this.props.className} />
  }
}
export default Icon
