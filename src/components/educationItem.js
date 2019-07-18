import React from "react"
import styles from "./educationItem.module.scss"

const educationItem = props => {
  const other = props.education.other ? (
    <div className={styles.other}>{props.education.other}</div>
  ) : null

  const thesis = props.education.thesis ? (
    <div className={styles.thesis}>
      <h3>Thesis</h3>
      <h4>{props.education.thesis.title}</h4>
      <p>{props.education.thesis.summary}</p>
    </div>
  ) : null

  return (
    <div className={styles.educationItem}>
      <h2 className={styles.school}>{props.education.school}</h2>
      <h4 className={styles.degree}>
        {props.education.degree}, {props.education.dates}
      </h4>
      {other}
      {thesis}
    </div>
  )
}

export default educationItem
