import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import styles from "./index.module.scss"

export default ({ data }) => {
  const about = data.home.about.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))

  const current = data.home.current.map((item, index) => (
    <div key={index}>
      {item.description}
      {item.url ? (
        <>
          <span> - </span>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="1x" />
          </a>
        </>
      ) : null}
    </div>
  ))

  return (
    <Layout>
      <SEO title="Home" description="A professional introduction" />
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
      <p>{current}</p>

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
      current {
        description
        url
      }
      about
    }
  }
`
