import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Icon from "./ui/icon"
import styles from "./project.module.scss"

const project = props => {
  const icons = props.project.icons.map(icon => (
    <Icon key={icon} type={icon} width={36} height={36} />
  ))

  return (
    <div className={styles.project}>
      <div className={styles.title}>
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>

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

      <div className={styles.techLogos}>
        <h3>Built With</h3>
        {icons}
      </div>
    </div>
  )
}

export default project
