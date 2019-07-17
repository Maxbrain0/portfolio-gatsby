import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Icon from "./ui/icon"
import styles from "./project.module.scss"

const project = props => {
  const icons = props.project.icons.map(icon => <Icon key={icon} type={icon} />)

  // only display external/github/media link if they're available
  const projUrl = props.project.url ? (
    <a
      href={props.project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <FontAwesomeIcon icon={["fas", "external-link-alt"]} size="2x" />
    </a>
  ) : null

  const githubUrl = props.project.github ? (
    <a
      href={props.project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.github}
    >
      <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
    </a>
  ) : null

  const mediaUrl = props.project.mediaUrl ? (
    <a href={props.project.mediaUrl} className={styles.photoVideo}>
      <FontAwesomeIcon icon={["fas", "photo-video"]} size="2x" />
    </a>
  ) : null

  return (
    <div className={`${styles.project} card`}>
      <div className={styles.title}>
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>

      <div className={styles.externalLinks}>
        {projUrl}
        {githubUrl}
        {mediaUrl}
      </div>

      <div className={styles.techLogos}>
        <h3>Made with</h3>
        <div className={styles.iconContainer}>{icons}</div>
      </div>
    </div>
  )
}

export default project
