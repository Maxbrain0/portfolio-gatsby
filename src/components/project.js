import React from "react"

const project = props => {
  return (
    <div>
      <h2>{props.project.title}</h2>
      <p>{props.project.description}</p>
    </div>
  )
}

export default project
