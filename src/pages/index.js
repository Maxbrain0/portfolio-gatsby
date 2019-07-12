import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"

export default () => (
  <Layout>
    <h1>This is the home page</h1>
    <p>This is some generic content for the home page</p>
    <Icon type="vue" width={128} height={128} />
    <h2>Subtitle</h2>
    <p>This is sub content</p>
  </Layout>
)
