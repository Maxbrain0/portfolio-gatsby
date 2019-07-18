import React from "react"
import { Helmet } from "react-helmet"

import "../styles/main.scss"
import "../util/fontAwesome"
import Navigation from "./navigation"

const layout = props => (
  <div className="main">
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
    </Helmet>
    <Navigation className="navigation" />
    <div className="content">{props.children}</div>
  </div>
)

export default layout
