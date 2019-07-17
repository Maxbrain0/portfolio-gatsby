import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import styles from "./index.module.scss"

export default ({ data }) => (
  <Layout>
    <h1>Welcome</h1>

    <p>
      I'm Jacob Goodwin, a Web Developer experienced in writing Single Page
      Applications. I'm have also worked with backend technologies such as Go,
      Nodejs, gRPC, and GraphQL.
    </p>

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
    <p>Golang, gRPC, Flutter</p>

    <h1>My story</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maiores
      voluptas est, magnam enim minus quod rem non corporis. Omnis alias quae,
      nisi similique odit saepe fuga veniam facilis minus beatae quibusdam error
      dignissimos, veritatis modi molestiae, suscipit repellat excepturi nulla
      tempora! Consequuntur fuga ab nisi beatae est, soluta provident fugit
      magnam pariatur vero, voluptatem sed iste sit, blanditiis repellendus
      libero commodi quia aliquid dicta similique odit amet ratione! Hic
      laboriosam architecto quaerat amet natus, vitae recusandae magnam aut,
      error dignissimos minus eaque culpa consequuntur expedita possimus, eos
      alias aliquid. Inventore iure est illum veritatis soluta odit harum fuga
      rem.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "Profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 512) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
