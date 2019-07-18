import React from "react"
import styles from "./experienceItem.module.scss"

const experienceItem = props => {
  const bullets = props.experience.bullets.map((bullet, index) => (
    <div className={styles.bullet}>
      <div className={styles.symbol}>&#8226;</div>
      <div key={index}>{bullet}</div>
    </div>
  ))
  return (
    <div className={styles.experienceItem}>
      <h2 className={styles.title}>{props.experience.title}</h2>
      <h4 className={styles.company}>{props.experience.company}</h4>
      <div className={styles.dates}>
        {props.experience.dates} - {props.experience.location}
      </div>
      <div className={styles.bullets}>{bullets}</div>
    </div>
  )
}

export default experienceItem
