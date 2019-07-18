import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import styles from "./contact.module.scss"

export default () => (
  <Layout>
    <SEO
      title="Contact"
      description="How to get ahold of me"
      pathname="contact/"
    />
    <div>
      <h1>Contact Me</h1>
      <div className={styles.contact}>
        <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" color="#002d5b" />
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="#6e5494" />
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#0077b5" />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="#1da1f2" />
      </div>
    </div>
  </Layout>
)
