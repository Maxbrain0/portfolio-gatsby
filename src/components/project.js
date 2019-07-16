import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./project.module.scss"

const project = props => {
  return (
    <div className={styles.project}>
      <h2>{props.project.title}</h2>
      <p>{props.project.description}</p>

      <div className={styles.externalLinks}>
        <a
          href={props.project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="2x" />
        </a>
        <a
          href={props.project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </div>

      <div className={styles.techLogos}>Logos here</div>
    </div>
  )
}

export default project
