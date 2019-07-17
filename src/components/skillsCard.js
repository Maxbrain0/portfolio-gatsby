import React from "react"
import styles from "./skillsCard.module.scss"

import Icon from "./ui/icon"

const skillsCard = props => {
  const skills = props.skillData.items.map(item => (
    <div key={item.skill} className={styles.skill}>
      <Icon type={item.icon} />
      <div>{item.skill}</div>
    </div>
  ))
  return (
    <div className={`card`}>
      <h2>{props.skillData.label}</h2>
      <div className={styles.skillList}>{skills}</div>
    </div>
  )
}
export default skillsCard
