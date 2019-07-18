import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <h1>This page doesn't exist</h1>
    <p>But I do appreciate folks that like to meddle around. So kudos to ya!</p>

    <Link to="/" className={styles.link}>
      Back to Intro
    </Link>
  </Layout>
)

export default NotFoundPage
