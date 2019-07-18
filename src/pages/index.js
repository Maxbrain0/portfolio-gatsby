import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import styles from "./index.module.scss"

export default ({ data }) => {
  const about = data.home.about.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))
  return (
    <Layout>
      <SEO title="Intro" description="A professional introduction" />
      <h1>Welcome</h1>

      <p>{data.home.intro}</p>

      <div className={styles.profileImage}>
        <Img
          fixed={data.file.childImageSharp.fixed}
          title="Porfile Image"
          style={{
            display: "block",
            margin: "auto",
            maxWidth: "256px",
            maxHeight: "256px",
          }}
          imgStyle={{ borderRadius: "128px" }}
        />
      </div>

      <h2>Currently working on</h2>
      <p>{data.home.current}</p>

      <h1>My story</h1>
      {about}
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    home: dataJson {
      intro
      current
      about
    }
  }
`
