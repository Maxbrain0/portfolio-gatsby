import React from "react"

// icon imports
import BrandIcon from "../../assets/svg/brand.svg"
import BulmaIcon from "../../assets/svg/bulma.svg"
import D3Icon from "../../assets/svg/d3js-icon.svg"
import GatsbyIcon from "../../assets/svg/gatsbyjs-icon.svg"
import GhostIcon from "../../assets/svg/ghost-tile.svg"
import HandlebarsIcon from "../../assets/svg/handlebarsjs-icon.svg"
import JavascriptIcon from "../../assets/svg/javascript.svg"
import JestIcon from "../../assets/svg/jestjsio.svg"
import NpmIcon from "../../assets/svg/npmjs-ar21.svg"
import NodeIcon from "../../assets/svg/nodejs-icon.svg"
import NuxtIcon from "../../assets/svg/nuxt-square.svg"
import ParcelIcon from "../../assets/svg/parceljs-rect.svg"
import ReactIcon from "../../assets/svg/reactjs-icon.svg"
import SassIcon from "../../assets/svg/sass-lang-icon.svg"
import TypeScriptIcon from "../../assets/svg/typescriptlang-icon.svg"
import VueIcon from "../../assets/svg/vue.svg"
import VuetifyIcon from "../../assets/svg/vuetify.svg"

const Icon = props => {
  const components = {
    brand: { icon: BrandIcon, url: null },
    bulma: { icon: BulmaIcon, url: "https://bulma.io/" },
    d3: { icon: D3Icon, url: "https://d3js.org/" },
    gatsby: { icon: GatsbyIcon, url: "https://www.gatsbyjs.org/" },
    ghost: { icon: GhostIcon, url: "https://ghost.org/" },
    handlebars: { icon: HandlebarsIcon, url: "https://handlebarsjs.com/" },
    javascript: {
      icon: JavascriptIcon,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    jest: {
      icon: JestIcon,
      url: "https://jestjs.io/",
    },
    node: { icon: NodeIcon, url: "https://nodejs.org/en/" },
    npm: { icon: NpmIcon, url: "https://www.npmjs.com/" },
    nuxt: { icon: NuxtIcon, url: "https://nuxtjs.org/" },
    parcel: { icon: ParcelIcon, url: "https://parceljs.org/" },
    react: { icon: ReactIcon, url: "https://reactjs.org/" },
    sass: { icon: SassIcon, url: "https://sass-lang.com/" },
    typescript: {
      icon: TypeScriptIcon,
      url: "https://www.typescriptlang.org/",
    },
    vue: { icon: VueIcon, url: "https://vuejs.org/" },
    vuetify: { icon: VuetifyIcon, url: "https://vuetifyjs.com/en/" },
  }

  if (!components[props.type]) {
    return null
  }

  const IconName = components[props.type].icon

  if (!components[props.type].url) {
    return <IconName className={props.className} />
  }

  // get passed down classes
  return (
    <a
      href={components[props.type].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconName className={props.className} />
    </a>
  )
}

export default Icon
