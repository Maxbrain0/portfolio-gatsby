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
          fluid={data.file.childImageSharp.fluid}
          title="Porfile Image"
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
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
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
